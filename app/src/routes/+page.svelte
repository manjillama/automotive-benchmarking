<script lang="ts">
	import Login from './login/index.svelte';
	import Benchmark from './benchmark/index.svelte';
	import type { AuthStoreType } from '../Store';
	import { AuthStore } from '../Store';
	import Footer from '../components/footer.svelte';

	$: auth = $AuthStore as AuthStoreType;
</script>

<div class="bg-white pb-8">
	{#if !auth}
		<Login />
	{:else}
		<Benchmark />
	{/if}
</div>
