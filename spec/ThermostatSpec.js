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

		it('cannot go below 10 degrees', function() {
			expect(function(){thermostat.decreaseTemperatureBy(15)}).toThrow(new Error('You cannot set the temp below 10'))
		});

		it('cannot go above power saving mode maximum temp', function() {
			expect(function(){thermostat.increaseTemperatureBy(6)}).toThrow(new Error('You cannot go above the maximum temperature'))
		});

		it('cannot go above non power saving mode maximum temp', function() {
			thermostat.turnOffPowerSaving()
			expect(function(){thermostat.increaseTemperatureBy(13)}).toThrow(new Error('You cannot go above the maximum temperature'))
		});

		xit('sets to 10 degrees if user trys to set the temperature to below that', function() {
			thermostat.decreaseTemperatureBy(15);
			expect(thermostat.temperature).toEqual(10)
		});
	});

	describe('features include', function() {

		describe('power saving mode', function() {

		it('that can be turned off', function() {
			thermostat.turnOffPowerSaving()
			expect(thermostat.isPowerSavingModeOn).toBe(false)
		});

		it('that can be turned on', function() {
			thermostat.turnOnPowerSaving()
			expect(thermostat.isPowerSavingModeOn).toBe(true)
		});

		it('when on the max temp is 25 degrees', function() {
			expect(thermostat.maximumTemp).toEqual(25)
		});

		it('when off the max temp is 32 degrees', function() {
			thermostat.turnOffPowerSaving()
			expect(thermostat.maximumTemp).toEqual(32)
		});

		it(' when on should always have a max temp of 25 degrees', function() {
			thermostat.turnOffPowerSaving()
			thermostat.turnOnPowerSaving()
			expect(thermostat.maximumTemp).toEqual(25)
		});

		});
	});
});