const TemperatureVO = require('../valueobjects/TemperatureVO');

const TemperatureManager = () => {
  function convert(temperature, unit) {
    if (temperature.unit === 'FAHRENHEIT' && unit === 'CELSIUS') {
      const convertedValue = ((temperature.value - 32) * 5) / 9;
      return new TemperatureVO(convertedValue, unit);
    }

    if (temperature.unit === 'CELSIUS' && unit === 'FAHRENHEIT') {
      const convertedValue = (temperature.value * 9) / 5 + 32;
      return new TemperatureVO(convertedValue, unit);
    }

    return new TemperatureVO(temperature.value, unit);
  }

  return { convert };
};

module.exports = TemperatureManager;