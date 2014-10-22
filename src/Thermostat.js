function Thermostat(){
	this.temperature = 20
	this.isPowerSavingModeOn = true
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
};