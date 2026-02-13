import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  const [entry, setEntry] = useState ({
    playerID: '',
    playerName: '',
    rank: '',
    quote: '',
  })
  const [playerSubmit, setPlayerSubmit] = useState(null);

  const handleInput = (id, data) => {
    setEntry({...entry, [id]: data})
  }
  const handleSubmissions = () => {
    setPlayerSubmit(entry);
  }

  const maxQuote = 20;
  const curQuote = entry.quote.length;
  return (
    <SafeAreaView>
      <View style={styles.container}>
          <TextInput 
          style={styles.paragraph}
          placeholder="ID:"
          value={entry.playerID}
          onChangeText={(t) => handleInput('playerID', t)}
          />
          <TextInput 
          style={styles.paragraph}
          placeholder="Name:"
          value={entry.playerName}
          onChangeText={(t) => handleInput('playerName', t)}
          />
          <TextInput 
          style={styles.paragraph}
          placeholder="Rank:"
          value={entry.rank}
          onChangeText={(t) => handleInput('rank', t)}
          />
          <TextInput 
          style={styles.paragraph}
          placeholder="Quote:"
          value={entry.quote}
          onChangeText={(t) => handleInput('quote', t)}
          />
          <Text style={styles.paragraph}>Current Characters: {curQuote} / {maxQuote} </Text>
          <Button 
          title="Submit"
          onPress={handleSubmissions}
          />
      </View>

      {playerSubmit && (
        <View>
        <Text>Player ID: {entry.playerID} </Text>
        <Text>Player Name: {entry.playerName} </Text>
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
