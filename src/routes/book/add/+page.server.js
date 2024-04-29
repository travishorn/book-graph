import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const { user } = await locals.auth();
		const form = await request.formData();
		const id = form.get('id');
		const endpoint = `https://openlibrary.org/works/${id}.json`;
		const response = await fetch(endpoint);

		/** @type {App.Book} */
		const doc = await response.json();

		const bookId = doc.key.slice(doc.key.lastIndexOf('/') + 1);

		const subjects = doc.subjects.map((id) => {
			return { id };
		});

		const bookSubjects = subjects.map((subject) => {
			return {
				bookId,
				subjectId: subject.id
			};
		});

		await db('Book')
			.insert({
				id: bookId,
				title: doc.title
			})
			.onConflict()
			.ignore();

		await db('Subject').insert(subjects).onConflict().ignore();

		await db('BookSubject').insert(bookSubjects).onConflict().ignore();

		await db('UserBook').insert({ userId: user.id, bookId }).onConflict().ignore();

		return redirect(303, '/');
	}
};
