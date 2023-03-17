<script lang="ts">
	import { get } from '$lib/req_util';
	import type { IProduct } from '../interfaces/IProduct';
	import { ProductsStore } from '../Store';
	import { scrollToTop } from '../util';
	import { query } from '../util/benchmarkUtil';
	import Accessories from './benchmark/accessories.svelte';
	import BootSpace from './benchmark/bootSpace.svelte';
	import BrakingSystem from './benchmark/brakingSystem.svelte';
	import Cad from './benchmark/cad.svelte';
	import Chassis from './benchmark/chassis.svelte';
	import Description from './benchmark/description.svelte';
	import Electronics from './benchmark/electronics.svelte';
	import HeadlampType from './benchmark/headlampType.svelte';
	import IndicatorType from './benchmark/indicatorType.svelte';
	import LicensePlateLight from './benchmark/licensePlateLight.svelte';
	import Media from './benchmark/media.svelte';
	import SeatAssembly from './benchmark/seatAssembly.svelte';
	import Specifications from './benchmark/specifications.svelte';
	import Swingarm from './benchmark/swingarm.svelte';
	import TaillampType from './benchmark/taillampType.svelte';
	import VehicleFeatures from './benchmark/vehicleFeatures.svelte';

	$: allProducts = $ProductsStore;
	let filteredProducts = allProducts;
	let searchedProduct = '';
	let selectedProducts: IProduct[] = [];

	$: {
		filteredProducts = allProducts.filter((product) =>
			product.attributes.name.toLowerCase().includes(searchedProduct.toLowerCase())
		);
	}

	function addNewProduct(productId: number) {
		get<{
			data: IProduct;
		}>(`/products/${productId}?${query}`).then(({ data }) => {
			selectedProducts = [...selectedProducts, data];
		});
	}
</script>

{#if selectedProducts.length > 0}
	<div class="sticky z-10 top-0 bg-white py-2" style="border-bottom: 1px solid #ddd">
		<Description boldDescription descriptions={selectedProducts.map((product) => product?.attributes?.name)} />
	</div>
{/if}

<div class="flex no-wrap py-2">
	{#if selectedProducts.length > 0}
		<Media productsMedias={selectedProducts.map((product) => product?.attributes?.media?.data)} />
	{/if}
	<div style="width:450px" class="shrink-0 px-2">
		<div>
			<div class="select-product-wrapper relative mb-3">
				<input
					bind:value={searchedProduct}
					type="text"
					class="border border-gray-400 text-black peer block min-h-[auto] w-full rounded bg-transparent py-2 px-3 transition-all duration-200 ease-linear"
					id="selectProduct"
					placeholder="Add product to compare"
				/>
				{#if filteredProducts.length > 0}
					<div class="bar border rounded shadow-lg mt-2 absolute right-0 left-0 bg-white max-h-[200px] overflow-y-auto">
						{#each filteredProducts as product}
							<button class="p-2 w-full text-left" on:click={() => addNewProduct(product.id)}
								>{product.attributes.name}</button
							>
							<hr />
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

{#if selectedProducts.length > 0}
	<div class="flex">
		<h2 class="font-semibold text-lg mb-2">Feature</h2>
	</div>
	<Chassis products={selectedProducts} />
	<Swingarm products={selectedProducts} />
	<BrakingSystem products={selectedProducts} />
	<Accessories products={selectedProducts} />
	<HeadlampType products={selectedProducts} />
	<TaillampType products={selectedProducts} />
	<IndicatorType products={selectedProducts} />
	<LicensePlateLight products={selectedProducts} />
	<Electronics products={selectedProducts} />
	<VehicleFeatures products={selectedProducts} />
	<SeatAssembly products={selectedProducts} />
	<BootSpace products={selectedProducts} />
	<Specifications products={selectedProducts} />

	<Cad products={selectedProducts} />
	<button on:click={scrollToTop} class="bg-primary text-white w-10 h-10 rounded-full shadow-lg fixed bottom-10 right-10"
		><i class="fas fa-arrow-up" /></button
	>
{:else}
	<h1 class="text-center font-extrabold text-6xl mt-12">Welcome! 🙏</h1>
	<p class="text-center mt-8">Don't be same be better - T.S. Eliot</p>
{/if}

<style>
	.bar {
		display: none;
	}
	.select-product-wrapper:focus-within > .bar {
		display: block;
	}
</style>
