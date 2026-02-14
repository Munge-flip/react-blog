import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  const [playerEntry, setPlayerEntry] = useState ({
    playerID: '',
    playerIGN: '',
    playerRank: '',
    playerTeam: '',
  })
  const [playerSubmit, setPlayerSubmit] = useState(null);

  const handlePlayerInput = (id, data) => {
    setPlayerEntry({...playerEntry, [id]: data})
  }
  const handlePlayerSubmission = () => {
    setPlayerSubmit(playerEntry);
  }

  const isIDValid = /^[0-9]+$/.test(playerEntry.playerID);
  const isRankValid = /^[0-9]+$/.test(playerEntry.playerRank);
  const isFormEmpty = playerEntry.playerID !== '' && playerEntry.playerIGN !== '' && playerEntry.playerRank !== '' && playerEntry.playerTeam !== '';
  const canSubmit = isRankValid && isFormEmpty && isIDValid;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput style={styles.paragraph} 
          placeholder="ID: "
          value={playerEntry.playerID}
          onChangeText={(t) => handlePlayerInput('playerID', t)}
        />
        {!isIDValid && playerEntry.playerID.length > 0 && (
          <Text>Enter a Valid ID</Text>
        )}
        <TextInput style={styles.paragraph} 
          placeholder="IGN: "
          value={playerEntry.playerIGN}
          onChangeText={(t) => handlePlayerInput('playerIGN', t)}
        />
        <TextInput style={styles.paragraph} 
          placeholder="Rank: "
          value={playerEntry.playerRank}
          onChangeText={(t) => handlePlayerInput('playerRank', t)}
        />
        {!isRankValid && playerEntry.playerRank.length > 0 && (
          <Text>Enter a Valid rank</Text>
        )}
        <TextInput style={styles.paragraph} 
          placeholder="Team: "
          value={playerEntry.playerTeam}
          onChangeText={(t) => handlePlayerInput('playerTeam', t)}
        />
        <Button 
          title="Submit"
          onPress={handlePlayerSubmission}
          disabled={!canSubmit}
        />
      </View>

      {playerSubmit && (
        <View style={styles.container}>
          <Text style={styles.paragraph}>Welcome</Text>
          <Text style={styles.paragraph}>ID: {playerEntry.playerID} </Text>
          <Text style={styles.paragraph}>IGN: {playerEntry.playerIGN} </Text>
          <Text style={styles.paragraph}>Rank: {playerEntry.playerRank} </Text>
          <Text style={styles.paragraph}>Team: {playerEntry.playerTeam} </Text>
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
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
