<script>
	import { onMount } from 'svelte';
	import { ForceGraph } from '$lib';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {HTMLDivElement} */
	let chart;

	onMount(() => {
		chart.appendChild(
			ForceGraph(data, {
				nodeGroup: (/** @type {App.ForceGraphNode} */ n) => n.group,
				nodeTitle: (/** @type {App.ForceGraphNode} */ n) => n.label,
				width: 1000,
				height: 800
			})
		);
	});
</script>

<div bind:this={chart}></div>

<form action="/book/search" method="get">
	<label for="title">Add a book</label>
	<input id="title" name="title" type="text" placeholder="Title" />
	<button>Search</button>
</form>
