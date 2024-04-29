import * as d3 from 'd3';

/**
 * Copyright 2021-2024 Observable, Inc.
 * Released under the ISC license.
 * https://observablehq.com/@d3/force-directed-graph
 *
 * @param {Object} graphData - an object containing nodes and links
 * @param {Object[]} graphData.nodes - an iterable of node objects
 * @param {Object[]} graphData.links - an iterable of link objects
 * @param {Object} options - an object containing optional parameters for configuration
 * @param {Function} [options.nodeId=(d) => d.id] - function to get unique identifier for nodes
 * @param {Function} [options.nodeGroup] - function to get color for nodes
 * @param {number[]} [options.nodeGroups] - array of ordinal values representing node groups
 * @param {Function} [options.nodeTitle] - function to get title for nodes
 * @param {string} [options.nodeFill='currentColor'] - node stroke fill
 * @param {string} [options.nodeStroke='#fff'] - node stroke color
 * @param {number} [options.nodeStrokeWidth=1.5] - node stroke width
 * @param {number} [options.nodeStrokeOpacity=1] - node stroke opacity
 * @param {number} [options.nodeRadius=5] - node radius
 * @param {number} [options.nodeStrength] - node strength
 * @param {Function} [options.linkSource=({ source }) => source] - function to get source node for links
 * @param {Function} [options.linkTarget=({ target }) => target] - function to get target node for links
 * @param {string} [options.linkStroke='#999'] - link stroke color
 * @param {number} [options.linkStrokeOpacity=0.6] - link stroke opacity
 * @param {number} [options.linkStrokeWidth=1.5] - link stroke width
 * @param {string} [options.linkStrokeLinecap='round'] - link stroke linecap
 * @param {number} [options.linkStrength] - link strength
 * @param {string[]} [options.colors=d3.schemeObservable10] - array of color strings for node groups
 * @param {number} [options.width=640] - outer width
 * @param {number} [options.height=400] - outer height
 * @param {Promise<any>} [options.invalidation] - promise to stop simulation when resolved
 */
export function ForceGraph(
	{ nodes, links },
	{
		nodeId = (d) => d.id,
		nodeGroup,
		nodeGroups,
		nodeTitle,
		nodeFill = 'currentColor',
		nodeStroke = '#fff',
		nodeStrokeWidth = 1.5,
		nodeStrokeOpacity = 1,
		nodeRadius = 5,
		nodeStrength,
		linkSource = ({ source }) => source,
		linkTarget = ({ target }) => target,
		linkStroke = '#999',
		linkStrokeOpacity = 0.6,
		linkStrokeWidth = 1.5,
		linkStrokeLinecap = 'round',
		linkStrength,
		colors = d3.schemeObservable10,
		width = 640,
		height = 400,
		invalidation
	} = {}
) {
	// Compute values.
	const N = d3.map(nodes, nodeId).map(intern);
	const R = typeof nodeRadius !== 'function' ? null : d3.map(nodes, nodeRadius);
	const LS = d3.map(links, linkSource).map(intern);
	const LT = d3.map(links, linkTarget).map(intern);
	if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
	const T = nodeTitle == null ? null : d3.map(nodes, nodeTitle);
	const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
	const W = typeof linkStrokeWidth !== 'function' ? null : d3.map(links, linkStrokeWidth);
	const L = typeof linkStroke !== 'function' ? null : d3.map(links, linkStroke);

	// Replace the input nodes and links with mutable objects for the simulation.
	nodes = d3.map(nodes, (_, i) => ({ id: N[i] }));
	links = d3.map(links, (_, i) => ({ source: LS[i], target: LT[i] }));

	// Compute default domains.
	if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

	// Construct the scales.
	const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);

	// Construct the forces.
	const forceNode = d3.forceManyBody();
	const forceLink = d3.forceLink(links).id(({ index: i }) => N[i]);
	if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
	if (linkStrength !== undefined) forceLink.strength(linkStrength);

	const simulation = d3
		.forceSimulation(nodes)
		.force('link', forceLink)
		.force('charge', forceNode)
		.force('center', d3.forceCenter())
		.on('tick', ticked);

	const svg = d3
		.create('svg')
		.attr('width', width)
		.attr('height', height)
		.attr('viewBox', [-width / 2, -height / 2, width, height])
		.attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

	const link = svg
		.append('g')
		.attr('stroke', typeof linkStroke !== 'function' ? linkStroke : null)
		.attr('stroke-opacity', linkStrokeOpacity)
		.attr('stroke-width', typeof linkStrokeWidth !== 'function' ? linkStrokeWidth : null)
		.attr('stroke-linecap', linkStrokeLinecap)
		.selectAll('line')
		.data(links)
		.join('line');

	const node = svg
		.append('g')
		.attr('fill', nodeFill)
		.attr('stroke', nodeStroke)
		.attr('stroke-opacity', nodeStrokeOpacity)
		.attr('stroke-width', nodeStrokeWidth)
		.selectAll('circle')
		.data(nodes)
		.join('circle')
		.attr('r', nodeRadius)
		.call(drag(simulation));

	if (W) link.attr('stroke-width', ({ index: i }) => W[i]);
	if (L) link.attr('stroke', ({ index: i }) => L[i]);
	if (G) node.attr('fill', ({ index: i }) => color(G[i]));
	if (R) node.attr('r', ({ index: i }) => R[i]);
	if (T) node.append('title').text(({ index: i }) => T[i]);
	if (invalidation != null) invalidation.then(() => simulation.stop());

	function intern(value) {
		return value !== null && typeof value === 'object' ? value.valueOf() : value;
	}

	function ticked() {
		link
			.attr('x1', (d) => d.source.x)
			.attr('y1', (d) => d.source.y)
			.attr('x2', (d) => d.target.x)
			.attr('y2', (d) => d.target.y);

		node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
	}

	function drag(simulation) {
		function dragstarted(event) {
			if (!event.active) simulation.alphaTarget(0.3).restart();
			event.subject.fx = event.subject.x;
			event.subject.fy = event.subject.y;
		}

		function dragged(event) {
			event.subject.fx = event.x;
			event.subject.fy = event.y;
		}

		function dragended(event) {
			if (!event.active) simulation.alphaTarget(0);
			event.subject.fx = null;
			event.subject.fy = null;
		}

		return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
	}

	return Object.assign(svg.node(), { scales: { color } });
}
