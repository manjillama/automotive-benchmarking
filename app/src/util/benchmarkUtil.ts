import qs from 'qs';

export const query = qs.stringify(
	{
		populate: [
			'media',
			'feature.chassis.media',
			'feature.swingarm.media',
			'feature.brakingSystem.media',
			'feature.brakingSystem.typeOfBrake.media',
			'feature.brakingSystem.typeOfBrakeActuation.media',
			'feature.brakingSystem.frontBrakeType.media',
			'feature.brakingSystem.rareBrakeType.media',
			'feature.accessories.centerStand.media',
			'feature.accessories.helmet.media',
			'feature.accessories.key.media',
			'feature.headlampType.media',
			'feature.taillampType.media',
			'feature.indicatorType.media',
			'feature.licensePlateLight.media',
			'feature.electronics.displayUnit.media',
			'feature.electronics.usbChargingPort.media',
			'feature.electronics.vehicleSwitchOn.media',
			'feature.electronics.handThrottle.media',
			'feature.electronics.seatLock.media',
			'feature.electronics.hornSwitch.media',
			'feature.electronics.sideStandSensor.media',
			'feature.vehicleFeatures.hillHold.media',
			'feature.vehicleFeatures.driveMode.media',
			'feature.vehicleFeatures.parkAssist.media',
			'feature.vehicleFeatures.seatAssembly.media',
			'feature.vehicleFeatures.bootSpace.media',
			'feature.vehicleFeatures.cruiseControl.media',
			'specifications.typeOfMotor.media',
			'specifications.peakPower.media',
			'specifications.continuousPower.media',
			'specifications.motorToRareWheelDriveType.media',
			'specifications.batteryType.media',
			'specifications.batteryVoltage.media',
			'specifications.groundClearanceOfBatteryCasing.media',
			'specifications.chargerSpecifications.media',
			'specifications.dimensionsOfAdaptor.media',
			'specifications.steeringLockToLockAngle.media',
			'specifications.sprungMass.media',
			'specifications.unsprungMass.media',
			'specifications.staticLoadRadius.media',
			'specifications.pcdOfDisk.media',
			'specifications.centerOfGravity.media',
			'specifications.steeringForkPitchDistance.media',
			'specifications.batteryCapacity.media',
			'cad.media'
		]
	},
	{
		encodeValuesOnly: true // prettify URL
	}
);
