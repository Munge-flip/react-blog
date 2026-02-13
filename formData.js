import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const updateField = (key, value) => {
    setFormData({...formData, [key]: value});
  }
  const handleSubmit = () => {
    setSubmittedData(formData);
  }

  const maxChar = 150;
  const curChar = formData.bio.length;
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TextInput 
        style={styles.paragraph}
        placeholder="Name: "
        value={formData.name}
        onChangeText={(text) => updateField('name', text)}
      />
      <TextInput 
        style={styles.paragraph}
        placeholder="Email: "
        value={formData.email}
        onChangeText={(text) => updateField('email', text)}
      />
      <TextInput 
        style={styles.paragraph}
        placeholder="Bio: "
        value={formData.bio}
        onChangeText={(text) => updateField('bio', text)}
      />
      <Text style={styles.paragraph}>Characters used: {curChar} / {maxChar} </Text>
      <Button 
      title="Submit"
      onPress={handleSubmit}
      />
    </View>
    {submittedData && (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Name: {formData.name} </Text>
        <Text style={styles.paragraph}>Email: {formData.email} </Text>
        <Text style={styles.paragraph}>Bio: {formData.bio} </Text>
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
