import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import StyledButton from './components/StyledButton';

export default function App() {
  const [test, setTest] = useState('Waiting for button press')
  const returnFunction = () => {
    setTest('I show up when pressed')
  }
  return (
    <View style={styles.container}>
      <Card>
      <Text> {test} </Text>
        <StyledButton title="Press Me" onPress={returnFunction} />
      </Card>
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
