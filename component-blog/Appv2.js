import { StyleSheet, Text, View, Button } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import CustomText from './components/CustomText';
import StyledButton from './components/StyledButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <CustomText>Hello</CustomText>
        <StyledButton title="submit" />
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
