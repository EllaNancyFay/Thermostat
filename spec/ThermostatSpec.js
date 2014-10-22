describe('Thermostat', function() {

	beforeEach(function() {
			thermostat = new Thermostat;
		});

	describe('by default', function() {

		it('starts at 20 degrees', function() {
			expect(thermostat.temperature).toEqual(20);
		});

		it('power saving mode is on', function () {
			expect(thermostat.isPowerSavingModeOn).toBe(true)
		});

	});

	describe('temperature', function(){

		it('can be increased by 1 degree', function() {
			thermostat.increaseTemperature()
			expect(thermostat.temperature).toEqual(21)
		});

		it('can be increased', function() {
			thermostat.increaseTemperatureBy(5)
			expect(thermostat.temperature).toEqual(25)
		});

		it('can be decreased by 1 degree', function() {
			thermostat.decreaseTemperature()
			expect(thermostat.temperature).toEqual(19)
		});

		it('can be decreased', function() {
			thermostat.decreaseTemperatureBy(5)
			expect(thermostat.temperature).toEqual(15)
		});

		xit('cannot go below 10 degrees', function() {
			expect(function(){thermostat.decreaseTemperatureBy(15)}).toThrow(new Error('Do you wanna freeze fool?!'))
		});

		it('sets to 10 degrees if user trys to set the temperature to below that', function() {
			thermostat.decreaseTemperatureBy(15);
			expect(thermostat.temperature).toEqual(10)
		});
	});

	describe('features include', function() {

		it('power saving mode which can be turned off', function() {
			thermostat.turnOffPowerSaving()
			expect(thermostat.isPowerSavingModeOn).toBe(false)
		});

		it('power saving mode which can be turned on', function() {
			thermostat.turnOnPowerSaving()
			expect(thermostat.isPowerSavingModeOn).toBe(true)
		});
	});
});