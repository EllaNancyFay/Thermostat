function Thermostat(){
	this.temperature = 20
	this.isPowerSavingModeOn = true
	this.maximumTemp = 25
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
	if (this.temperature > this.maximumTemp)
	throw new Error('You cannot go above the maximum temperature')
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	 this.temperature -= degrees
	if (this.temperature < 10) 
	throw new Error('You cannot set the temp below 10')
};


Thermostat.prototype.increaseTemperature = function() {
	this.temperature += 1
};

Thermostat.prototype.decreaseTemperature = function() {
	this.temperature -= 1
};

Thermostat.prototype.turnOffPowerSaving = function() {
	this.isPowerSavingModeOn = false
	this.maximumTemp = 32
};

Thermostat.prototype.turnOnPowerSaving = function() {
	this.isPowerSavingModeOn = true
	this.maximumTemp = 25
};

Thermostat.prototype.resetTemperature = function() {
	this.temperature = 20
};