import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => setCount(count - 1)}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  counterText: { fontSize: 40, marginBottom: 20 },
  buttonContainer: { flexDirection: 'row', gap: 20 },
  btn: { backgroundColor: 'blue', padding: 15, borderRadius: 10, width: 60, alignItems: 'center' },
  btnText: { color: 'white', fontSize: 24, fontWeight: 'bold' }
});