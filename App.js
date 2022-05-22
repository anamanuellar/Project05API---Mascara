import react, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';


export default function App() {
  const [cell, setCell] = useState('');

  const [cpf, setCPF] = useState('');

  return (
    <View style={styles.container}>
      <TextInputMask
        style={styles.input}
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99)'
        }}
        value={cell}
        onChangeText={text => setCell(cell)}
      />
        <TextInputMask
        style={styles.input}
        type={'cpf'}
        value={cpf}
        onChangeText={text => setCPF(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    fontSize: 20,
    padding: 10,
    margin: 10,
  }
});
