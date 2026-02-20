import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [userData, setUserData] = useState ({
    email: '',
    password: '',
  });
  const [userSubmitted, setUserSubmitted] = useState(null);

  const handleUserInput = (id, data) => {
    setUserData({...userData, [id]: data})
  }
  const userSubmission = () => {
    setUserSubmitted(userData);
  }

  const isEmailValid = userData.email.includes('@') && userData.email.length >= 8;
  const isPasswordValid = userData.password.length >= 8;
  const canSubmit = isEmailValid && isPasswordValid;
  const isPasswordEmpty = userData.password === '';
  let strenghtText = '';
  let strenghtColor = 'gray';

  if (userData.password.length > 0) {
    if (userData.password.length < 5) {
      strenghtText = 'Weak';
      strenghtColor = 'red';
    } else if (userData.password.length < 8) {
      strenghtText = 'Fair';
      strenghtColor = 'orange';
    } else {
      strenghtText = 'Strong';
      strenghtColor = 'green';
    }
  }
  return (
    <View style={styles.container}>
      {!userSubmitted && (
        <View>
      <TextInput style={styles.paragraph} placeholder="Email: " value={userData.email} onChangeText={(text) => handleUserInput('email', text)} />
      {!isEmailValid && userData.email.length > 0 && (
        <Text>Need an @ and a minimum of 8 characters</Text>
      )}
      <TextInput style={[styles.paragraph, isPasswordEmpty ? styles.emptyBox : styles.filledBox]} placeholder="Password: " value={userData.password} onChangeText={(text) => handleUserInput('password', text)} secureTextEntry={true} />
      {!isPasswordValid && userData.password.length > 0 && (
        <Text style={{ color: strenghtColor}}>
          Strength: {strenghtText}
        </Text>
      )}
      <Button title="Submit" onPress={userSubmission} disabled={!canSubmit} />
        </View>
      )}

      {userSubmitted && (
      <View style={styles.resultBox}>
        <Text>Weclome</Text>
        <Text>Email: {userData.email} </Text>
        <Text>Password: {userData.password} </Text>
        <Button title="Edit" onPress={() => setUserSubmitted(null)} />
      </View>
      )}
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
  },
  resultBox: {
    padding: 20,
    backgroundColor: 'yellow',
    borderRadius: 10
  },
  emptyBox: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5
  },
  filledBox: {
    borderColor: 'grey',
    borderRadius: 5
  }
});
