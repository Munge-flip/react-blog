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
        <CustomText>Role: {contact.category} </CustomText>
        <StyledButton title="Contact" onPress={onCall} />
        <StyledButton title="Delete" bgColor="red" onPress={onDelete} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },
});
