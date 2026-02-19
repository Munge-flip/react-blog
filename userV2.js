import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';

export default function App() {
  const [userInfo, setUserInfo] = useState ({
    username: '',
    password: ''
  })
  const [userSubmitted, setUserSubmitted] = useState(null);

  const handleUserInput = (id, data) => {
    setUserInfo({...userInfo, [id]: data});
  }
  const handleUserSubmission = () => {
    setUserSubmitted(userInfo);
  }

  const isUserValid = userInfo.username.length >= 8;
  const isPasswordValid = userInfo.password.length >= 8;
  const canSubmit = isUserValid && isPasswordValid;
  const isPasswordEmpty = userInfo.password === '';
  const maxChar = 150;
  let strengthText = '';
  let strengthColor = 'gray';

  if (userInfo.password.length > 0) {
    if (userInfo.password.length < 5) {
      strengthText = 'Weak';
      strengthColor = 'red';
    } else if (userInfo.password.length < 8) {
      strengthText = 'Fair';
      strengthColor = 'orange';
    } else {
      strengthText = 'Strong';
      strengthColor = 'green';
    }
  }
  const curChar = userInfo.username.length;
  return (
    <SafeAreaView>
    {!userSubmitted && (
      <View style={styles.container}>
        <TextInput style={styles.paragraph} 
          placeholder="Username: "
          value={userInfo.username}
          onChangeText={(text) => handleUserInput('username', text)}
        />
        {!isUserValid && userInfo.username.length > 0 && (
          <Text>Need 8 characters</Text>
        )}
        <Text> {curChar} / {maxChar} </Text>
        <TextInput style={[styles.paragraph, isPasswordEmpty ? styles.emptyBox : styles.filledBox
            ]}
          placeholder="Password: "
          value={userInfo.password}
          onChangeText={(text) => handleUserInput('password', text)}
          
        />
        {!isPasswordValid && userInfo.password.length > 0 && (
          <Text style={{ color: strengthColor, marginLeft: 24, fontWeight: 'bold' }}>
              Strength: {strengthText}
            </Text>
        )}
        <Button 
          title="Submit"
          onPress={handleUserSubmission}
          disabled={!canSubmit}
        />
      </View>
    )}
      {userSubmitted && (
        <Text>Welcome</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    justifyContent: 'center'
  },
  paragraph: {
    marginHorizontal: 24,
    marginTop: 15,
    marginBottom: 5,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyBox: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5
  },
  filledBox: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5
  }
});