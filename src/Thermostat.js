function Thermostat(){
	this.temperature = 20
	this.isPowerSavingModeOn = true
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	 this.temperature -= degrees
	if (this.temperature < 10) 
		this.temperature = 10; 
	//	throw new Error('Do you wanna freeze fool?!')};
};


Thermostat.prototype.increaseTemperature = function() {
	this.temperature += 1
};

Thermostat.prototype.decreaseTemperature = function() {
	this.temperature -= 1
};

Thermostat.prototype.turnOffPowerSaving = function() {
	this.isPowerSavingModeOn = false
};

Thermostat.prototype.turnOnPowerSaving = function() {
	this.isPowerSavingModeOn = true
};