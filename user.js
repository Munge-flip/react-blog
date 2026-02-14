import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })
  const [userSubmit, setUserSubmit] = useState(null);

  const handleUser = (id, info) => {
    setUserData({...userData, [id]: info})
  }
  const handleUserSubmission = () => {
    setUserSubmit(userData);
  }
  const isUsernameValid = userData.password.length >= 8;
  const isPasswordValid = userData.username.length >= 8;
  const isFormFilled = userData.username !== '' && userData.password !== '';
  const canSubmit = isFormFilled && isUsernameValid && isPasswordValid;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput style={styles.paragraph}
          placeholder="Username: "
          value={userData.username}
          onChangeText={(t) => handleUser('username', t)}
        />
        {!isUsernameValid && userData.username.length > 0 && (
          <Text style={{color: 'red'}}>Minimum of 8 characters</Text>
        )}
        <TextInput style={styles.paragraph}
          placeholder="Password: "
          value={userData.password}
          onChangeText={(t) => handleUser('password', t)}
          secureTextEntry={true}
        />
        {!isPasswordValid && userData.password.length > 0 && (
          <Text style={{color: 'red'}}>Minimum of 8 characters</Text>
        )}
        <Button style={styles.paragraph}
          title="Submit"
          onPress={handleUserSubmission}
          disabled={!canSubmit}
        />
      </View>

      {userSubmit && (
        <View style={styles.paragraph}>
          <Text>Username: {userData.username} </Text>
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
