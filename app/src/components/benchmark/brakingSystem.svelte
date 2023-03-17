<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import FrontBrakeType from './frontBrakeType.svelte';
	import RareBrakeType from './rareBrakeType.svelte';
	import TypeOfBrake from './typeOfBrake.svelte';
	import TypeOfBrakeActuation from './typeOfBrakeActuation.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Braking system">
	<TypeOfBrake {products} />
	<TypeOfBrakeActuation {products} />
	<FrontBrakeType {products} />
	<RareBrakeType {products} />
</Accordion>
