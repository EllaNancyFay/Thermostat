$(document).ready(function() {
  var thermostat = new Thermostat;
  $(".temperature h1").text(thermostat.temperature).css('color', thermostat.displayColour);
  $(".powerSaveOn").attr('checked', 'checked');

  $(".increase_temperature").on('click', function() {
    thermostat.increaseTemperature();
    thermostat.setDisplayColour();
    $(".temperature h1").text(thermostat.temperature).css('color', thermostat.displayColour);
  });

  $(".decrease_temperature").on('click', function() {
    thermostat.decreaseTemperature();
    thermostat.setDisplayColour();
    $(".temperature h1").text(thermostat.temperature).css('color', thermostat.displayColour);
  });

  $(".reset").on('click', function() {
    thermostat.resetTemperature();
    thermostat.setDisplayColour();
    $(".temperature h1").text(thermostat.temperature).css('color', thermostat.displayColour);
  });

  $(".powerSaveOn").on('click', function() {
    thermostat.turnOnPowerSaving()
    thermostat.setDisplayColour()
    $(".temperature h1").text(thermostat.temperature).css('color', thermostat.displayColour);
  });

  $(".powerSaveOff").on('click', function() {
    thermostat.turnOffPowerSaving()
  });
    
  $.getJSON("http://api.openweathermap.org/data/2.5/find?q=London&units=metric", function(data){
    $("#actualWeather").text(data['list'][1]['main']['temp'])
  });
});

