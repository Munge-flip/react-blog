import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';



export default function App() {
  const [entry, setEntry] = useState({
    playerID: '',
    playName: '',
    rank: '',
  });
  const [submitPlayer, setSubmitPlayer] = useState(null);

  const handleInput = (id, text) => {
    setEntry({...entry, [id]: text});
  }
  const handSubmission = () => {
    setSubmitPlayer(entry);
  }
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TextInput 
        style={styles.paragraph}
        placeholder="ID: "
        value={entry.playerID}
        onChangeText={(data) => handleInput('playerID', data)}
      />
      <TextInput 
        style={styles.paragraph}
        placeholder="Name: "
        value={entry.playName}
        onChangeText={(data) => handleInput('playName', data)}
      />
      <TextInput 
        style={styles.paragraph}
        placeholder="Rank: "
        value={entry.rank}
        onChangeText={(data) => handleInput('rank', data)}
      />
      <Button 
        title="Submit"
        onPress={handSubmission}
      />
    </View>
    {submitPlayer && (
      <View>
      <Text>Player ID: {entry.playerID} </Text>
      <Text>Player Name: {entry.playName} </Text>
      <Text>Player Rank: {entry.rank} </Text>
      </View>
    )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
