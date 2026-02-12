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
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.leftAvatarContainer}>
          <Text style={styles.avatar}>Avatar1</Text>
        </View>

        <View style={styles.rightAvatarContainer}>
          <Text style={styles.avatar}>Avatar2</Text>
          <Text style={styles.avatar}>Avatar3</Text>
        </View>
      </View>

      <View style={styles.bannerContainer}>
        <Text style={styles.banner}>Banner</Text>
      </View>
      
      <View style={styles.gridContainer}>
        <GridBox />
        <GridBox />
        <GridBox />
        <GridBox />
      </View>

      <View style={styles.bannerContainer}>
        <Text style={styles.banner}>Bottom Text</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    margin: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rightAvatarContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderWidth: 1,
    textAlign: 'center', 
    textAlignVertical: 'center',
  },
  bannerContainer: {
    height: 150,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
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