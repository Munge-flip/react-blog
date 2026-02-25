import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import ContactItem from './components/ContactItem';

export default function App() {
  const myContactsList = [
    { id: '1', name: 'Gian Carlo C. Gonzales', phone: '0912-123-123', category: 'Student' },
    { id: '2', name: 'Ada Lovelace', phone: '0999-888-7777', category: 'Programmer' },
    { id: '3', name: 'Grace Hopper', phone: '0911-222-3333', category: 'Teacher' }
  ];
  return (
    <ScrollView style={styles.container}>
      
      {myContactsList.map((person) => (
        
        <ContactItem 
          key={person.id}
          contact={person}
        />
        
      ))}

    </ScrollView>
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
