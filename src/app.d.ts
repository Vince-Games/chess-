// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
/// <reference types="@sveltejs/adapter-cloudflare" />
declare namespace App {
	// interface Locals {}
	interface Platform {
		env?: {
			COUNTER: DurableObjectNamespace;
		};
		context: {
			waitUntil(promise: Promise<never>): void;
		};
		caches: CacheStorage & { default: Cache };
	}

	// interface PrivateEnv {}
	// interface PublicEnv {}
	// interface Session {}
	// interface Stuff {}
}
