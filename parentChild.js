import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [parentCount, setParentCount] = useState(null);
  const [childCount, setChildCount] = useState(parentCount);

  const parentIncrement = () => {
    setParentCount(parentCount + 1)
  }
  const childIncrement = () => {
    setChildCount(childCount + 1)
  }
  return (
    <View style={styles.container}>
      <Text> Parent Count: {parentCount} </Text>
        <Button 
        onPress={() => parentIncrement(parentCount)}
        title="Increment by 1"
        />
        <Text> Child Count: {childCount} </Text>
        <Button 
        onPress={() => childIncrement(parentCount)}
        title="Increment by 1"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
