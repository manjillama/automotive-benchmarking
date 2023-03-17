<script lang="ts">
	import type { IProduct } from '../../interfaces/IProduct';
	import Accordion from '../accordion.svelte';
	import DisplayUnit from './displayUnit.svelte';
	import HandleLock from './handleLock.svelte';
	import HandThrottle from './handThrottle.svelte';
	import HornSwitch from './hornSwitch.svelte';
	import SeatLock from './seatLock.svelte';
	import SideStandSensor from './sideStandSensor.svelte';
	import UsbChargingPort from './usbChargingPort.svelte';
	import VehicleSwitchOn from './vehicleSwitchOn.svelte';

	export let products: IProduct[];
</script>

<Accordion target="Electronics">
	<DisplayUnit {products} />
	<UsbChargingPort {products} />
	<VehicleSwitchOn {products} />
	<HandThrottle {products} />
	<HandleLock {products} />
	<SeatLock {products} />
	<HornSwitch {products} />
	<SideStandSensor {products} />
</Accordion>
