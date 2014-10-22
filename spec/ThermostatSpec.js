describe('Thermostat', function() {

	describe('by default', function() {

		beforeEach(function() {
			thermostat = new Thermostat;
		});

		it('starts at 20 degrees', function() {
			expect(thermostat.temperature).toEqual(20);
		});

		it('power saving mode is on', function () {
			expect(thermostat.isPowerSavingModeOn).toBe(true)
		});

	});
});