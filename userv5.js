import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [userData, setUserData] = useState ({
    email: '',
    password: '',
    bio: ''
  });
  const [userSubmitted, setUserSubmitted] = useState(null);

  const handleUserInput = (id, data) => {
    setUserData({...userData, [id]: data});
  }
  const handleUserSubmission = () => {
    setUserSubmitted(userData);
  }

  const isEmailValid = userData.email.length >= 8 && userData.email.includes('@');
  const isPasswordValid = userData.password.length >= 8;
  const canSubmit = isEmailValid && isPasswordValid;
  const isPasswordEmpty = userData.password === '';
  let strengthText = '';
  let strengthColor = 'grey';

  if (userData.password.length > 0) {
    if (userData.password.length < 5) {
      strengthText = 'Weak';
      strengthColor = 'red';
    } else if (userData.password.length < 8) {
      strengthText = 'Fair';
      strengthColor = 'orange';
    } else {
      strengthText = 'Strong';
      strengthColor = 'green';
    }
  }
  return (
    <View style={styles.container}>
    {!userSubmitted && (
      <View>
        <TextInput style={styles.paragraph} placeholder="Email:" value={userData.email} onChangeText={(text) => handleUserInput('email', text)} />
        {!isEmailValid && userData.email.length > 0 && (
          <Text>Need an @ and a minimum of 8 characters</Text>
        )}
        <TextInput style={[styles.paragraph, isPasswordEmpty ? styles.emptyBox : styles.filledBox]} placeholder="Password:" value={userData.password} onChangeText={(text) => handleUserInput('password', text)} />
        {userData.password.length > 0 && (
          <Text style={{color: strengthColor}} >Strength: {strengthText} </Text>
        )}
        <TextInput style={styles.paragraph} placeholder="Bio: " value={userData.bio} onChangeText={(text) => handleUserInput('bio', text)} />
        <Button title="Submit" onPress={handleUserSubmission} disabled={!canSubmit} />
      </View>
    )}

      {userSubmitted && (
        <View>
          <Text>Welcome</Text>
          <Text>Email: {userData.email} </Text>
          <Text>Password: {userData.password} </Text>
          <Text>Bio: {userData.bio} </Text>
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
  emptyBox: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 10,
  }
});
