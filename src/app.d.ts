// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		interface User {
			id: string;
		}

		interface Locals {
			auth: () => Promise<{
				user: User;
			}>;
		}

		interface ForceGraphNode {
			id: string;
			label: string;
			group: string;
		}

		interface ForceGraphLink {
			source: string;
			target: string;
			value: number;
		}

		interface Book {
			key: string;
			title: string;
			subjects: string[];
		}
	}

	namespace OpenLibrary {
		interface Doc {
			author_name: string[];
			first_publish_year: number;
			key: string;
			subject: string[];
			title: string;
		}
	}
}

export {};
