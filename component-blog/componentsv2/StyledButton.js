import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function StyledButton({title, buttonColor = 'red', bgColor = 'gold', fontWeight = 'bold', fontSize = 16}) {
  return (
    <TouchableOpacity style={[styles.buttonBox, {backgroundColor: bgColor}]}>
      <Text style={{color: buttonColor, fontWeight: fontWeight, fontSize: fontSize}}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  }
});
