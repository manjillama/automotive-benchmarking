<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import Description from './attributes/description.svelte';
	import Media from './attributes/media.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Indicator type">
	<Description descriptions={products.map((product) => product.attributes?.feature?.indicatorType?.description)} />
	<Media productsMedias={products.map((product) => product.attributes?.feature?.indicatorType?.media?.data)} />
</Accordion>
