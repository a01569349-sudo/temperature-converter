import { useState } from 'react';
import TemperatureManager from '../models/managers/TemperatureManager';
import TemperatureVO from '../models/valueobjects/TemperatureVO';

const useTemperatureConverter = () => {
  const [celsiusValue, setCelsiusValue] = useState('');
  const [fahrenheitValue, setFahrenheitValue] = useState('');
  const manager = TemperatureManager();

  const convertTemperature = () => {
    if (celsiusValue === '') {
      setFahrenheitValue('');
      return;
    }

    const temperature = new TemperatureVO(Number(celsiusValue), 'CELSIUS');
    const result = manager.convert(temperature, 'FAHRENHEIT');

    setFahrenheitValue(result.value.toString());
  };

  return {
    celsiusValue,
    setCelsiusValue,
    fahrenheitValue,
    setFahrenheitValue,
    convertTemperature,
  };
};

export default useTemperatureConverter;