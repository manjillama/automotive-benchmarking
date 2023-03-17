<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import Description from './attributes/description.svelte';
	import Media from './attributes/media.svelte';

	export let products: IProduct[];
</script>

<Accordion target="USB charging port" targetStyleClass="ml-12">
	<Description
		nestedLevel={1}
		descriptions={products.map((product) => product.attributes?.feature?.electronics?.usbChargingPort?.description)}
	/>
	<Media
		nestedLevel={1}
		productsMedias={products.map((product) => product.attributes?.feature?.electronics?.usbChargingPort?.media?.data)}
	/>
</Accordion>
