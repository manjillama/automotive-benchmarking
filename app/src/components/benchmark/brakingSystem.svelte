<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import TypeOfBrake from './typeOfBrake.svelte';
	import TypeOfBrakeActuation from './typeOfBrakeActuation.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Braking system">
	<TypeOfBrake {products} />
	<TypeOfBrakeActuation {products} />
</Accordion>
