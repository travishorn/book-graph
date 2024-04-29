/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const title = encodeURIComponent(url.searchParams.get('title') ?? '');
	const endpoint = `https://openlibrary.org/search.json?title=${title}&fields=author_name,first_publish_year,key,subject,title&limit=10`;
	const response = await fetch(endpoint);
	const data = await response.json();

	const results = data.docs.map((/** @type {OpenLibrary.Doc} */ doc) => {
		return {
			author: doc.author_name?.join(', '),
			published: doc.first_publish_year,
			id: doc.key.slice(doc.key.lastIndexOf('/') + 1),
			title: doc.title,
			subjectCount: doc.subject?.length ?? 0
		};
	});

	return {
		results
	};
}
