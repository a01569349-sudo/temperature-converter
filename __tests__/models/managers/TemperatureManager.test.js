const TemperatureVO = require('../../../models/valueobjects/TemperatureVO');
const TemperatureManager = require('../../../models/managers/TemperatureManager');

describe('TemperatureManager', () => {
  test('converts the freezing point of water from Fahrenheit to Celsius', () => {
    // GIVEN
    const manager = TemperatureManager();
    const fahrenheitTemperature = new TemperatureVO(32, 'FAHRENHEIT');

    // WHEN
    const result = manager.convert(fahrenheitTemperature, 'CELSIUS');

    // THEN
    expect(result).toBeInstanceOf(TemperatureVO);
    expect(result.value).toBe(0);
    expect(result.unit).toBe('CELSIUS');
  });

  test('converts the boiling point of water from Fahrenheit to Celsius', () => {
    // GIVEN
    const manager = TemperatureManager();
    const fahrenheitTemperature = new TemperatureVO(212, 'FAHRENHEIT');

    // WHEN
    const result = manager.convert(fahrenheitTemperature, 'CELSIUS');

    // THEN
    expect(result).toBeInstanceOf(TemperatureVO);
    expect(result.value).toBe(100);
    expect(result.unit).toBe('CELSIUS');
  });

  test('converts a typical room temperature from Fahrenheit to Celsius', () => {
    // GIVEN
    const manager = TemperatureManager();
    const fahrenheitTemperature = new TemperatureVO(68, 'FAHRENHEIT');

    // WHEN
    const result = manager.convert(fahrenheitTemperature, 'CELSIUS');

    // THEN
    expect(result).toBeInstanceOf(TemperatureVO);
    expect(result.value).toBe(20);
    expect(result.unit).toBe('CELSIUS');
  });

  test('converts a negative Celsius equivalent from Fahrenheit to Celsius', () => {
    // GIVEN
    const manager = TemperatureManager();
    const fahrenheitTemperature = new TemperatureVO(14, 'FAHRENHEIT');

    // WHEN
    const result = manager.convert(fahrenheitTemperature, 'CELSIUS');

    // THEN
    expect(result).toBeInstanceOf(TemperatureVO);
    expect(result.value).toBe(-10);
    expect(result.unit).toBe('CELSIUS');
  });

  test('converts a decimal temperature from Fahrenheit to Celsius', () => {
    // GIVEN
    const manager = TemperatureManager();
    const fahrenheitTemperature = new TemperatureVO(98.6, 'FAHRENHEIT');

    // WHEN
    const result = manager.convert(fahrenheitTemperature, 'CELSIUS');

    // THEN
    expect(result).toBeInstanceOf(TemperatureVO);
    expect(result.value).toBe(37);
    expect(result.unit).toBe('CELSIUS');
  });

  test('converts a Celsius temperature to Fahrenheit', () => {
    // GIVEN
    const manager = TemperatureManager();
    const celsiusTemperature = new TemperatureVO(15, 'CELSIUS');

    // WHEN
    const result = manager.convert(celsiusTemperature, 'FAHRENHEIT');

    // THEN
    expect(result).toBeInstanceOf(TemperatureVO);
    expect(result.value).toBe(59);
    expect(result.unit).toBe('FAHRENHEIT');
  });
});
