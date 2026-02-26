import { StyleSheet, Text, View } from 'react-native';

import { Card } from 'react-native-paper';

import CustomText from './CustomText';
import StyledButton from './StyledButton';

export default function ContactItems({contact, onCall, onDelete}) {
  return (
    <View style={styles.container}>
      <Card>
        <CustomText>Name: {contact.name} </CustomText>
        <CustomText>Phone: {contact.phone} </CustomText>
        <CustomText>Category: {contact.category} </CustomText>
        <StyledButton title="Contact Person" onPress={onCall} />
        <StyledButton bgColor="red" title="Delete Contact" onPress={onDelete} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
});
