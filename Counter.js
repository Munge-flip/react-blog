import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);

    const incrementBy1 = () => {
      setCount(count + 1);
    };
    const incrementBy2 = () => {
      setCount(count + 2);
    };
    const resetButton = () => {
      setCount(0);
    };
  return (
    <SafeAreaView>
      <View>
        <Text>Count: {count}</Text>
          <Button 
            title="Increment by 1"
            onPress={() => incrementBy1(count)}
          />
          <Button
            title="Increment by 2"
            onPress={() => incrementBy2(count)}
          />
          <Button
            title="Reset"
            onPress={() => resetButton(count)}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  counterText: { fontSize: 40, marginBottom: 20 },
  buttonContainer: { flexDirection: 'row', gap: 20 },
  btn: { backgroundColor: 'blue', padding: 15, borderRadius: 10, width: 60, alignItems: 'center' },
  btnText: { color: 'white', fontSize: 24, fontWeight: 'bold' }
});