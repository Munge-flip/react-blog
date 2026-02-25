import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function StyledButton({title, btnColor = 'gold', bgColor = 'maroon', fontWeight = 'bold', fontSize = 16}) {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: bgColor}]}>
      <Text style={{color: btnColor, fontSize: fontSize, fontWeight: fontWeight}}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  }
});
