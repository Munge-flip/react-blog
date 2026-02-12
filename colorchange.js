import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const GridBox = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity 
      style={[styles.grids, { backgroundColor: isPressed ? 'blue' : 'red' }]} 
      onPress={() => setIsPressed(!isPressed)}
    >
      <Text style={styles.buttonText}>Grid</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.gridContainer}>
        <GridBox />
        <GridBox />
        <GridBox />
        <GridBox />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    gap: 10,
    marginBottom: 10,
  },
  grids: {
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
