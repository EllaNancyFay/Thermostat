$(document).ready(function() {
	var thermostat = new Thermostat;
	$(".temperature h1").text(thermostat.temperature);

	$(".increase_temperature").on('click', function() {
		thermostat.increaseTemperature()
		$(".temperature h1").text(thermostat.temperature);
	});

	$(".decrease_temperature").on('click', function() {
		thermostat.decreaseTemperature()
		$(".temperature h1").text(thermostat.temperature);
	});

	$(".reset").on('click', function() {
		thermostat.resetTemperature()
		$(".temperature h1").text(thermostat.temperature);
	});

	$(".powerSaveOn").on('click', function() {
		thermostat.turnOnPowerSaving()
	});

	$(".powerSaveOff").on('click', function() {
		thermostat.turnOffPowerSaving()
	});
});

