<script lang="ts">
	import { get } from '$lib/req_util';
	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';
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
	let tempProducts: IProduct[] = [
		{
			id: 2,
			attributes: {
				name: 'Yamaha r15 v2',
				createdAt: '2023-03-10T07:21:23.260Z',
				updatedAt: '2023-03-10T07:26:59.883Z',
				media: {
					data: [
						{
							attributes: {
								mime: 'video/quicktime',
								url: 'https://img-9gag-fun.9cache.com/photo/aMEdqjR_460sv.mp4'
							}
						},
						{
							attributes: {
								mime: 'image/jpeg',
								url: 'https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/02/07133205/vogue-bali-villa-banner-680x1020.jpg'
							}
						}
					]
				},
				feature: {
					chassis: {
						description:
							'This is a chassis description.  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
						media: {
							data: [
								{
									attributes: {
										url: 'https://indonesia.tripcanvas.co/wp-content/uploads/2020/08/Bali-pool-villa-feature.jpg'
									}
								}
							]
						}
					},
					swingarm: {
						description: 'This is a swingarm description',
						media: {
							data: [
								{
									attributes: {
										url: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
									}
								}
							]
						}
					},
					brakingSystem: {
						typeOfBrake: {
							description: 'This is a type of brake description',
							media: {
								data: [
									{
										attributes: {
											url: 'https://images.unsplash.com/photo-1592555059503-0a774cb8d477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
										}
									}
								]
							}
						},
						typeOfBrakeActuation: {
							description: 'This is a type of brake actuation description',
							media: {
								data: [
									{
										attributes: {
											url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
										}
									}
								]
							}
						}
					}
				}
			}
		},
		{
			id: 3,
			attributes: {
				name: 'Yatri P1',
				createdAt: '2023-03-10T07:21:23.260Z',
				updatedAt: '2023-03-10T07:26:59.883Z',
				media: {
					data: [
						{
							attributes: {
								mime: 'image/jpeg',
								url: 'https://www.balivillasales.com/wp-content/uploads/2021/03/IMG_E2917-1140x700.jpg'
							}
						},
						{
							attributes: {
								mime: 'video/quicktime',
								url: 'https://img-9gag-fun.9cache.com/photo/aEqMZAp_460svav1.mp4'
							}
						}
					]
				},
				feature: {
					chassis: {
						description: 'This is a P1 chassis description',
						media: {
							data: [
								{
									attributes: {
										url: 'https://images.unsplash.com/photo-1611441085268-7674a97a0905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
									}
								}
							]
						}
					},
					swingarm: {
						description: 'This is a swingarm description',
						media: {
							data: [
								{
									attributes: {
										url: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
									}
								}
							]
						}
					},
					brakingSystem: {
						typeOfBrake: {
							description: 'This is a type of brake description',
							media: {
								data: [
									{
										attributes: {
											url: 'https://images.unsplash.com/photo-1592555059503-0a774cb8d477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
										}
									}
								]
							}
						},
						typeOfBrakeActuation: {
							description: 'This is a type of brake actuation description',
							media: {
								data: [
									{
										attributes: {
											url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
										}
									}
								]
							}
						}
					}
				}
			}
		}
	];

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
