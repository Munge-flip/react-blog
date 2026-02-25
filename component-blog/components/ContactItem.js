import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

import CustomeText from './CustomeText';
import StyledButton from './StyledButton';

export default function ContactItem({contact, onCall}) {
  return (
    <Card>
        <CustomeText> {contact.name} </CustomeText>
        <CustomeText> {contact.phone} </CustomeText>
        <CustomeText> {contact.category} </CustomeText>

        <StyledButton title="Call Contact" onPress={onCall} />
    </Card>
  );
}

const styles = StyleSheet.create({

});
