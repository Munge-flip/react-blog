import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function InputDisplay() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Type here..."
        onChangeText={(text) => setName(text)}
        value={name}
      />
      
      <Text style={styles.result}>Hello, {name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, fontSize: 18, borderRadius: 5 },
  result: { marginTop: 20, fontSize: 24, fontWeight: 'bold', color: 'green' }
});