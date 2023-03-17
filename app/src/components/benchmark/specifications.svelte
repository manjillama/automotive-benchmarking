<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import BatteryCapacity from './batteryCapacity.svelte';
	import BatteryType from './batteryType.svelte';
	import BatteryVoltage from './batteryVoltage.svelte';
	import BootSpace from './bootSpace.svelte';
	import CenterOfGravity from './centerOfGravity.svelte';
	import ChargerSpecifications from './chargerSpecifications.svelte';
	import ContinuousPower from './continuousPower.svelte';
	import DimensionsOfAdaptor from './dimensionsOfAdaptor.svelte';
	import GroundClearanceOfBatteryCasing from './groundClearanceOfBatteryCasing.svelte';
	import MotorTorque from './motorTorque.svelte';
	import PcdOfDisk from './pcdOfDisk.svelte';
	import PeakPower from './peakPower.svelte';
	import SprungMass from './sprungMass.svelte';
	import StaticLoadRadius from './staticLoadRadius.svelte';
	import SteeringForkPitchDistance from './steeringForkPitchDistance.svelte';
	import SteeringLockToLockAngle from './steeringLockToLockAngle.svelte';
	import TypeOfMotor from './typeOfMotor.svelte';
	import UnsprungMass from './unsprungMass.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Specifications">
	<TypeOfMotor {products} />
	<PeakPower {products} />
	<ContinuousPower {products} />
	<BatteryType {products} />
	<BatteryVoltage {products} />
	<GroundClearanceOfBatteryCasing {products} />
	<ChargerSpecifications {products} />
	<DimensionsOfAdaptor {products} />
	<SteeringLockToLockAngle {products} />
	<SprungMass {products} />
	<UnsprungMass {products} />
	<StaticLoadRadius {products} />
	<PcdOfDisk {products} />
	<CenterOfGravity {products} />
	<SteeringForkPitchDistance {products} />
	<BatteryCapacity {products} />
	<MotorTorque {products} />
</Accordion>
