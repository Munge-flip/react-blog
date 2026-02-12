import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ManualRouter() {
  const [screen, setScreen] = useState('login');

  if (screen === 'login') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Page</Text>
        <Button title="Login" onPress={() => setScreen('dashboard')} />
      </View>
    );
  }

  // Screen 2: Dashboard
  if (screen === 'dashboard') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Dashboard</Text>
        <Button title="Logout" onPress={() => setScreen('login')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  title: { fontSize: 24, marginBottom: 20 }
});