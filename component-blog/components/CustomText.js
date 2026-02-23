import { StyleSheet, Text, View, Button } from 'react-native';

export default function CustomText({ children, textColor = 'black', size = 16, fontWeight = 'bold' }) {

  return (
    <Text style={{color: textColor, fontSize: size, fontWeight: fontWeight }}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({

});
