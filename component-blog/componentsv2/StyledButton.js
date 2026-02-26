import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function StyledButton({title, textColor = 'black', size = 20, weight = 'bold', bgColor = 'grey', onPress}) {
  return (
    <TouchableOpacity style={[styles.btnBox, {backgroundColor: bgColor}]} onPress={onPress}>
      <Text style={{color: textColor, fontSize: size, fontWeight: weight}}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnBox: {
    padding: 8,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    margin: 1,
  }
});
