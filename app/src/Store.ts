import { writable } from 'svelte/store';

export interface IAuth {
	jwt: string;
	user: {
		id: number;
		username: string;
		email: string;
	};
}

export type AuthStoreType = IAuth | null;

const AuthStore = writable<AuthStoreType>(null);

export { AuthStore };
