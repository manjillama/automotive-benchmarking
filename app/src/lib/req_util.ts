import { browser } from '$app/environment';
import { PUBLIC_API_URL } from '$env/static/public';

export function browserGet(key: string) {
	if (browser) return localStorage.getItem(key);
	return null;
}

export function browserSet(key: string, value: any) {
	if (browser) localStorage.setItem(key, value);
}

export async function post<T>(url: string, body?: any) {
	return requestBuilder<T>('POST', url, body);
}
export async function get<T>(url: string, body?: any) {
	return requestBuilder<T>('GET', url, body);
}

async function requestBuilder<T>(requestMethod: 'GET' | 'POST' | 'PATCH' | 'PUT', url: string, body?: any) {
	let customError = false;
	try {
		const headers: any = {};
		if (!(body instanceof FormData)) {
			headers['Content-Type'] = 'application/json';
			body = JSON.stringify(body);
		}
		const token = browserGet('token');
		if (token) headers['Authorization'] = 'Bearer ' + token;

		const options = {
			method: requestMethod,
			body,
			headers
		};
		const res = await fetch(PUBLIC_API_URL + url, options);
		const json = await res.json();
		if (json.error) {
			customError = true;
			throw { id: json.error.status, message: json.error.message };
		}

		return json as T;
	} catch (err: any) {
		throw customError ? err : { id: 500, message: 'Something went wrong. Please try again later.' };
	}
}
