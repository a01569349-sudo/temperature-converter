import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text, TextInput } from 'react-native-paper';
import useTemperatureConverter from '../hooks/useTemperatureConverter';

const TemperatureScreen = () => {
  const { celsiusValue, setCelsiusValue, fahrenheitValue, convertTemperature } =
    useTemperatureConverter();

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Convertidor de temperaturas
      </Text>
      <Text style={styles.label}>Grados Celsius:</Text>
      <TextInput
        id="celsiusInput"
        mode="flat"
        style={styles.input}
        keyboardType="numeric"
        inputMode="decimal"
        theme={{ colors: { primary: '#77F2DC' } }}
        value={celsiusValue}
        onChangeText={setCelsiusValue}
      />
      <Text style={styles.label}>Grados Fahrenheit:</Text>
      <TextInput
        id="fahrenheitResult"
        mode="flat"
        value={fahrenheitValue}
        editable={false}
        selectTextOnFocus={false}
        style={styles.input}
      />

      <View style={styles.buttonWrapper}>
        <Button
          id="convertButton"
          mode="contained"
          style={styles.button}
          onPress={convertTemperature}
        >
          CONVERTIR
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    marginBottom: 16,
    color: '#1f3a5f',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  label: {
    marginBottom: 8,
    color: '#4b5d78',
    fontSize: 15,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#f9fbff',
  },
  celsiusInputFocused: {
    borderColor: '#77F2DC',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 8,
  },
  button: {
    borderRadius: 10,
    width: '40%',
    minWidth: 140,
    backgroundColor: '#5005F2',
  },
});

export default TemperatureScreen;