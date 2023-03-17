<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import Description from './attributes/description.svelte';
	import Media from './attributes/media.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Head lamp type">
	<Description descriptions={products.map((product) => product.attributes?.feature?.headlampType?.description)} />
	<Media productsMedias={products.map((product) => product.attributes?.feature?.headlampType?.media?.data)} />
</Accordion>
