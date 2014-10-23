$(document).ready(function() {
	var thermostat = new Thermostat;
	$(".temperature h1").text(thermostat.temperature);
	$(".powerSaveOn").attr('checked', 'checked');

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
		$(".temperature h1").text(thermostat.temperature);
	});

	$(".powerSaveOff").on('click', function() {
		thermostat.turnOffPowerSaving()
	});
		

	$.getJSON("http://api.openweathermap.org/data/2.5/find?q=London&units=metric", function(data){
	$("#actualWeather").text(data['list'][1]['main']['temp'])
	});
});

