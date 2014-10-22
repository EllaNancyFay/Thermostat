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

		it('can be increased', function() {
			thermostat.increaseTemperatureBy(5)
			expect(thermostat.temperature).toEqual(25)
		});

		it('can be decreased', function() {
			thermostat.decreaseTemperatureBy(5)
			expect(thermostat.temperature).toEqual(15)
		});
	});
});