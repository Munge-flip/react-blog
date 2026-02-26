import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function StyledButton({title, onPress}) {
  return (
    <Pressable onPress={onPress}> {title} </Pressable>
  );
}

const styles = StyleSheet.create({

});
