import { StyleSheet, View, SafeAreaView, Alert } from 'react-native';
import ContactItem from './components/ContactItem'; // Import the Molecule

export default function App() {
  // 1. The Data (This could come from a database or state later)
  const myContact = {
    name: 'Gian Carlo',
    phone: '0912-345-6789',
    category: 'Family'
  };

  // 2. The Function Action
  const handleCall = () => {
    Alert.alert("Dialing...", `Calling ${myContact.name} at ${myContact.phone}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 3. Passing Data Down to the Molecule via Props */}
      <ContactItem 
        contact={myContact} 
        onCall={handleCall} 
      />
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
});