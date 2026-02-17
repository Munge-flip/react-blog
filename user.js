import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';


export default function App() {
const [userData, setUserData] = useState ({
  username: '',
  password: ''
})
const [userSubmit, setUserSubmit] = useState(null);

const handleUserInput = (id, info) => {
  setUserData({...userData, [id]: info})
}
const handleUserSubmission = () => {
  setUserSubmit(userData);
}

const isUsernameValid = userData.username.length >= 8;
const isPasswordValid = userData.password.length >= 8;
const isFormFilled = userData.username !== '' && userData.password !== '';
const canSubmit = isUsernameValid && isPasswordValid && isFormFilled

  return (
    <SafeAreaView>
    {!userSubmit && (
      <View style={styles.container}>
        <TextInput style={styles.paragraph}
          placeholder="Username: "
          value={userData.username}
          onChangeText={(t) => handleUserInput('username', t)}
        />
        {!isUsernameValid && userData.username.length > 0 && (
          <Text>Minimun characters is 8</Text>
        )}
        <TextInput style={styles.paragraph}
          placeholder="Password: "
          value={userData.password}
          onChangeText={(t) => handleUserInput('password', t)}
        />
        {!isPasswordValid && userData.password.length > 0 && (
          <Text>Minimun characters is 8</Text>
        )}
        <Button 
        title="Submit"
        onPress={handleUserSubmission}
        disabled={!canSubmit}
        />
      </View>
    )}

      {userSubmit && (
      <View style={styles.resultBox}>
          <Text style={styles.resultText}>Welcome</Text>
          <Text>Username: {userSubmit.username} </Text>
          <Text>Password: {userSubmit.password} </Text>
          
          <Button title="Edit" onPress={() => setUserSubmit(null)} />
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
    justifyContent: 'center', 
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  resultBox: {
    padding: 20,
    backgroundColor: '#d4edda',
    borderRadius: 10
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10
  }
});
