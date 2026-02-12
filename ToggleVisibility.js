import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false); 

  return (
    <View style={styles.container}>
      <Button 
        title={isVisible ? "Hide Secret" : "Show Secret"} 
        onPress={() => setIsVisible(!isVisible)} 
      />
      
      {isVisible && (
        <Text style={styles.text}>🎉 This is the secret message! 🎉</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { marginTop: 20, fontSize: 18, fontWeight: 'bold' }
});