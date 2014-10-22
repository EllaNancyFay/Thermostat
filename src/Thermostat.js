function Thermostat(){
	this.temperature = 20
	this.isPowerSavingModeOn = true
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees
};