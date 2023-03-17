<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import Description from './attributes/description.svelte';
	import Media from './attributes/media.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Swingarm">
	<Description descriptions={products.map((product) => product.attributes?.feature?.swingarm?.description)} />
	<Media productsMedias={products.map((product) => product.attributes?.feature?.swingarm?.media?.data)} />
</Accordion>
