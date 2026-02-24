import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
// Import your Atoms!
import CustomText from './CustomText';
import StyledButton from './StyledButton';

export default function ContactItem({ contact, onCall }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        {/* Using the CustomText Atom and passing props! */}
        <CustomText size={22} color="#2c3e50">{contact.name}</CustomText>
        <CustomText size={16} color="#7f8c8d">{contact.phone}</CustomText>
        <CustomText size={14} color="#3498db">{contact.category}</CustomText>
        
        {/* Using the StyledButton Atom */}
        <StyledButton 
          title="Call Contact" 
          color="#27ae60" 
          onPress={onCall} 
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 5,
  }
});