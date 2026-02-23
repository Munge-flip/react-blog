import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function StyledButton({ button, color = 'gold', onPress }) {
  return (
    <TouchableOpacity style={{ backgroundColor: color }} onPress={onPress}>
      <Text> {button} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
