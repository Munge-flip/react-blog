import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })
  const [userSubmit, setUserSubmit] = useState(null);

  const handleUserInputs = (id, data) => {
    setUserData({...userData, [id]: data})
  }
  const handleUserSubmissions = () => {
    setUserSubmit(userData);
  }
  const isUsernameValid = /\d/.test(userData.username) && userData.username.length >= 8;
  const isPasswordValid = /\d/.test(userData.password) && userData.password.length >= 8;
  const isFormFilled = userData.username !== '' && userData.password !== '';
  const canSubmit = isFormFilled && isUsernameValid && isPasswordValid;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput style={styles.paragraph}
          placeholder="Username: "
          value={userData.username}
          onChangeText={(t) => handleUserInputs('username', t)}
        />
        {!isUsernameValid && userData.username.length > 0 && (
          <Text>Username needs to be minimum of 8 characters and has atleast 1 number in it</Text>
        )}
        <TextInput style={styles.paragraph}
          placeholder="Password: "
          value={userData.password}
          onChangeText={(t) => handleUserInputs('password', t)}
        />
        {!isPasswordValid && userData.password.length > 0 && (
          <Text>Username needs to be minimum of 8 characters and has atleast 1 number in it</Text>
        )}
        <Button 
        title="Register"
        onPress={handleUserSubmissions}
        disabled={!canSubmit}
        />
      </View>
      {userSubmit && (
        <View style={styles.paragraph}>
          <Text>You have successfully registered</Text>
          <Text>Here are your info:</Text>
          <Text>Username: {userData.username} </Text>
          <Text>Password: {userData.password} </Text>
        </View>
      )}
    </SafeAreaView>
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
});
