<script lang="ts">
	import { get } from '$lib/req_util';
	import { onMount } from 'svelte';
	import type { IProduct } from '../../interfaces/IProduct';
	import { query } from '../../util/benchmarkUtil';
	import BenchmarkAttributes from '../../components/benchmarkAttributes.svelte';
	import Navbar from '../../components/navbar.svelte';

	let products: IProduct[] = [];

	onMount(() => {
		const productId = 2;
		get<{
			data: {
				id: string | number;
				attributes: IProduct;
			};
		}>(`http://localhost:1337/api/products/${productId}?${query}`).then(({ data }) => {
			products = [...products, { ...data.attributes, id: data.id }];
		});
	});
	$: console.log(query);
</script>

<Navbar />

<div class="container mx-auto py-6">
	<div class="overflow-x-auto">
		<!-- <div>
			<div class="flex">
				<h2>Information</h2>
			</div>
			<div class="flex">
				<div style="width:300px">Model</div>
				<div style="width:450px">Yamaha</div>
				<div style="width:450px">Ducati</div>
			</div>
		</div> -->

		<BenchmarkAttributes />
	</div>

	<!-- <table class="w-full [border-spacing:0.75rem]">
		<tr>
			<th class="text-left">Information</th>
			<th />
			<th />
		</tr>
		<tr>
			<td>Model</td>
			<td>Yamaha</td>
			<td>Ducati</td>
		</tr>
		<tr>
			<td>Media</td>
			<td>Media 1</td>
			<td>Media 2</td>
		</tr>
	</table>

	<table class="w-full">
		<tr>
			<th class="text-left">Feature</th>
		</tr>
		<tr data-te-collapse-init data-te-target="#chassis" aria-expanded="false" aria-controls="chassis" role="button">
			<td>Chassis</td>
			<td />
			<td />
		</tr>
		<tbody class="!visible hidden" id="chassis" data-te-collapse-item>
			<tr class="bg-gray-200">
				<td class="pl-12">Description</td>
				<td>This is chassis description 1</td>
				<td>This is chassis description 2</td>
			</tr>
			<tr class="bg-gray-200">
				<td class="pl-12">Media</td>
				<td>Media 1</td>
				<td>Media 2</td>
			</tr>
		</tbody>
		<tr>
			<td>Swingarm</td>
			<td />
			<td />
		</tr>
		<tr class="bg-gray-200">
			<td class="pl-12">Description</td>
			<td>This is chassis description 1</td>
			<td>This is chassis description 2</td>
		</tr>
		<tr class="bg-gray-200">
			<td class="pl-12">Media</td>
			<td>Media 1</td>
			<td>Media 2</td>
		</tr>
		<tr>
			<td>Braking system</td>
			<td />
			<td />
		</tr>
		<tr class="bg-gray-200">
			<td class="pl-12">Type of brake</td>
			<td />
			<td />
		</tr>
		<tr class="bg-gray-400">
			<td class="pl-24">Description</td>
			<td>This is brake description 1</td>
			<td>This is brake description 2</td>
		</tr>
		<tr class="bg-gray-400">
			<td class="pl-24">Media</td>
			<td>Media 1</td>
			<td>Media 2</td>
		</tr>
		<tr class="bg-gray-200">
			<td class="pl-12">Type of brake actuation</td>
			<td />
			<td />
		</tr>
		<tr class="bg-gray-400">
			<td class="pl-24">Description</td>
			<td>This is actuation description 1</td>
			<td>This is actuation description 2</td>
		</tr>
		<tr class="bg-gray-400">
			<td class="pl-24">Media</td>
			<td>Media 1</td>
			<td>Media 2</td>
		</tr>

		<tr>
			<th class="text-left">Specification</th>
		</tr>
		<tr>
			<td>Battery capacity</td>
			<td />
			<td />
		</tr>
		<tr class="bg-gray-200">
			<td class="pl-12">Description</td>
			<td>This is battery description 1</td>
			<td>This is battery description 2</td>
		</tr>
		<tr class="bg-gray-200">
			<td class="pl-12">Media</td>
			<td>Media 1</td>
			<td>Media 2</td>
		</tr>
	</table>

	<p class="mb-4 space-y-1 md:space-x-1 md:space-y-0">
		<a
			class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
			data-te-collapse-init
			data-te-ripple-init
			data-te-ripple-color="light"
			href="#collapseExample"
			role="button"
			aria-expanded="false"
			aria-controls="collapseExample"
		>
			Link with href
		</a>
		<button
			class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
			type="button"
			data-te-collapse-init
			data-te-ripple-init
			data-te-ripple-color="light"
			data-te-target="#collapseExample"
			aria-expanded="false"
			aria-controls="collapseExample"
		>
			Button with data-te-target
		</button>
	</p>
	<div class="!visible hidden" id="collapseExample" data-te-collapse-item>
		<div class="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
			Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user
			activates the relevant trigger.
		</div>
	</div> -->
</div>
