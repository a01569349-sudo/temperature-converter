import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import TemperatureScreen from './screens/TemperatureScreens';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Convertidor
        </Text>
        <TemperatureScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b10e9b',
  },
  headerTitle: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    textAlign: 'left',
    color: '#ffffff',
    fontWeight: '700',
    backgroundColor: '#ff02ccb3',
  },
});