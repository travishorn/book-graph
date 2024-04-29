/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Hard-coded sample user
	event.locals.auth = async function () {
		return {
			user: {
				id: 'eb509b67-b4c4-4347-a974-d0a54ade079d'
			}
		};
	};

	return await resolve(event);
}
