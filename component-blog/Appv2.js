import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import ContactItems from './components/ContactItems';

export default function App() {
  const [contacts, setContacts] = useState ([
    {id: '1', name: 'Yan', phone: '0912 123 123', category: 'carry'},
    {id: '2', name: 'Jinx', phone: '0912 222 123', category: 'mid'},
    {id: '3', name: 'Laev', phone: '0912 312 451', category: 'offlane'},
    {id: '4', name: 'Vintage', phone: '0912 111 231', category: 'support'},
    {id: '5', name: 'Nando', phone: '0912 131 567', category: 'support'},
  ]);

  const handleDelete = (idToRemove) => {
    const updateList = contacts.filter((person) => person.id !== idToRemove);

    setContacts(updateList);
  }
  return (
    <ScrollView style={styles.container}>
      <Card>
      {contacts.map((person) => (
        <ContactItems contact={person} onCall={() => alert(`Calling ${person.name} `)} onDelete={() => handleDelete(person.id)} />
      ))}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
