import { Text, View, StyleSheet, Image } from 'react-native';

export default function CustomText({children, textColor = 'green', fontSize = 20, fontWeight = 'bold'}) {
  return (
    <Text style={{color: textColor, fontSize: fontSize, fontWeight: fontWeight}}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({

});
