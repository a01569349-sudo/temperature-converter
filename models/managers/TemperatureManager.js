const TemperatureVO = require('../valueobjects/TemperatureVO');

const TemperatureManager = () => {
  function convert(temperature, unit) {
    if (temperature.unit === 'CELSIUS' && unit === 'FAHRENHEIT') {
        const fahrenheitValue = (temperature.value * 9/5) + 32;
      return new TemperatureVO(fahrenheitValue, unit);
    }
    return new TemperatureVO(temperature.value, unit);
  }

  return { convert };
};

module.exports = TemperatureManager;