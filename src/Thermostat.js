function Thermostat(){
	this.temperature = 20
	this.isPowerSavingModeOn = true
	this.maximumTemp = 25
	this.minimumTemp = 10
	this.displayColour = "yellow"
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if (this.temperature + degrees > this.maximumTemp) this.temperature = this.maximumTemp
	else this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if (this.temperature - degrees < this.minimumTemp) this.temperature = this.minimumTemp
	else this.temperature -= degrees;
};


Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1)
};

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1)
};

Thermostat.prototype.turnOffPowerSaving = function() {
	this.isPowerSavingModeOn = false
	this.maximumTemp = 32
};

Thermostat.prototype.turnOnPowerSaving = function() {
	this.isPowerSavingModeOn = true
	this.maximumTemp = 25
	if (this.temperature > this.maximumTemp) this.temperature = 25
};

Thermostat.prototype.resetTemperature = function() {
	this.temperature = 20
};

Thermostat.prototype.setDisplayColour = function() {
	if (this.temperature <= 18) { 
		this.displayColour = 'green' 
	} else if (this.temperature > 25) {
		this.displayColour = 'red'
	}
	else this.displayColour = 'yellow'
};