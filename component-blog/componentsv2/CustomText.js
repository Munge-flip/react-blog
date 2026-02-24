import { Text, View, StyleSheet, Image } from 'react-native';

export default function CustomText({children, textColor = 'red', fontSize = 100, fontWeight = 'bold'}) {
  return (
    <Text style={{color: textColor, fontSize: fontSize, fontWeight: fontWeight}}> {children} </Text>
  );
}

const styles = StyleSheet.create({

});
