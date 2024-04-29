<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<table>
	<thead>
		<tr>
			<th>Title</th>
			<th>Author</th>
			<th>Published</th>
			<th>Subjects</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		{#each data.results as book}
			<tr>
				<td>{book.title}</td>
				<td>{book.author}</td>
				<td>{book.published}</td>
				<td>{book.subjectCount}</td>
				<td>
					<form action="/book/add" method="post">
						<input name="id" type="hidden" value={book.id} />
						<button>Add</button>
					</form>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
