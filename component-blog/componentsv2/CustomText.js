import { Text, View, StyleSheet, Image } from 'react-native';

export default function CustomText({children, color = 'orange', size = 24, weight = 'bold'}) {
  return (
    <Text style={{color: color, fontSize: size, fontWeight: weight}}> {children} </Text>
  );
}

const styles = StyleSheet.create({

});
