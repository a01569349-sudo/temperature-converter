import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TemperatureScreen from './screens/TemperatureScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <TemperatureScreen />
    </SafeAreaProvider>
  );
}