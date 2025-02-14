// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez le mode de jeu</Text>
      <Button title="Bo1" onPress={() => navigation.navigate('PlayerInput', { mode: 'Bo1' })} />
      <Button title="Bo2" onPress={() => navigation.navigate('PlayerInput', { mode: 'Bo2' })} />
      <Button title="Bo3" onPress={() => navigation.navigate('PlayerInput', { mode: 'Bo3' })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
