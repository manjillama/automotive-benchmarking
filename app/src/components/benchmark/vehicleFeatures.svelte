<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import CruiseControl from './cruiseControl.svelte';
	import DriveMode from './driveMode.svelte';
	import HillHold from './hillHold.svelte';
	import ParkAssist from './parkAssist.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Vehicle features">
	<HillHold {products} />
	<CruiseControl {products} />
	<DriveMode {products} />
	<ParkAssist {products} />
</Accordion>
