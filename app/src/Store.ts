import { writable } from 'svelte/store';
import type { IProduct } from './interfaces/IProduct';

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
const ProductsStore = writable<IProduct[]>([]);

export { AuthStore, ProductsStore };
