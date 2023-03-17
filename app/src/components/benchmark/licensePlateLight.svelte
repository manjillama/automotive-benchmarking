<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import Description from './attributes/description.svelte';
	import Media from './attributes/media.svelte';

	export let products: IProduct[];
</script>

<Accordion target="License plate light">
	<Description descriptions={products.map((product) => product.attributes?.feature?.licensePlateLight?.description)} />
	<Media productsMedias={products.map((product) => product.attributes?.feature?.licensePlateLight?.media?.data)} />
</Accordion>
