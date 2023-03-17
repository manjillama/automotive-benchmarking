<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import Description from './attributes/description.svelte';
	import Media from './attributes/media.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Motor torque" targetStyleClass="ml-12">
	<Description
		nestedLevel={1}
		descriptions={products.map((product) => product.attributes?.specifications?.motorTorque?.description)}
	/>
	<Media
		nestedLevel={1}
		productsMedias={products.map((product) => product.attributes?.specifications?.motorTorque?.media?.data)}
	/>
</Accordion>
