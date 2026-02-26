import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';

import { Card } from 'react-native-paper';

import ContactItems from './components/ContactItems';

export default function App() {
  const [contacts, setContacts] = useState([
    {id: '1', name: 'Yan', phone: '0912 123 123', category: 'carry'},
    {id: '2', name: 'ol', phone: '0970 921 313', category: 'support'},
    {id: '3', name: 'sss', phone: '0931 238 312', category: 'mid'},
    {id: '4', name: 'wqe', phone: '0931 238 312', category: 'offlane'},
    {id: '5', name: 'wqes', phone: '0931 238 312', category: 'hard support'},
  ]);
  const handleDelete = (idToRemove) => {
    const updatedList = contacts.filter((person) => person.id !== idToRemove);
    
    setContacts(updatedList);
  };
  return (
    <ScrollView style={styles.container}>
      <Card>
        {contacts.map((person) => (
         <ContactItems key={person.name} contact={person} onCall={() => alert(`Calling ${person.name}`)} onDelete={() => handleDelete(person.id)} />
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
