import { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
  })
  const [userSubmit, setUserSubmit] = useState(null);

  const handleInput = (id, data) => {
    setFormData({...formData, [id]: data})
  }
  const handleUserSubmission = () => {
    setUserSubmit(formData);
  }

  const maxChar = 150;
  const curChar = formData.bio.length;
  const isEmailValid = formData.email.includes("@");
  const isFormEmpty = formData.name === '' || formData.email === '' || formData.password === '';
  const canSubmit = isEmailValid && !isFormEmpty;
  return (
    <SafeAreaView>
      <View style={styles.container}>
          <TextInput 
            style={styles.paragraph}
            placeholder="Name: "
            value={formData.name}
            onChangeText={(t) => handleInput('name', t)}
          />
          <TextInput 
            style={styles.paragraph}
            placeholder="Email: "
            value={formData.email}
            onChangeText={(t) => handleInput('email', t)}
          />
          {!isEmailValid && formData.email.length > 0 && (
            <Text>Enter a valid email</Text>
          )}
          <TextInput 
            style={styles.paragraph}
            placeholder="Password: "
            value={formData.password}
            onChangeText={(t) => handleInput('password', t)}
            secureTextEntry
          />
          <TextInput 
            style={styles.paragraph}
            placeholder="Bio: "
            value={formData.bio}
            onChangeText={(t) => handleInput('bio', t)}
          />
          <Text style={styles.paragraph}>Current characters: {curChar} / {maxChar} </Text>
          <Button 
          title="Submit"
          onPress={handleUserSubmission}
          disabled={!canSubmit}
          />
      </View>

      {userSubmit && (
        <View style={styles.container}>
          <Text style={styles.paragraph} >Name: {formData.name} </Text>
          <Text style={styles.paragraph} >Email: {formData.email} </Text>
          <Text style={styles.paragraph} >Password: {formData.password} </Text>
          <Text style={styles.paragraph} >Bio: {formData.bio} </Text>
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
