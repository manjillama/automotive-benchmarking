<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import CenterStand from './centerStand.svelte';
	import Helmet from './helmet.svelte';
	import Key from './key.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Accessories">
	<CenterStand {products} />
	<Helmet {products} />
	<Key {products} />
</Accordion>
