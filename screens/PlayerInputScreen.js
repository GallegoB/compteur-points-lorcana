// src/screens/PlayerInputScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PlayerInputScreen = ({ navigation, route }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const { mode } = route.params;

  const handleSubmit = () => {
    let updatedPlayer1 = player1;
    let updatedPlayer2 = player2;
    if (updatedPlayer1 === '') {
      updatedPlayer1 = 'Joueur 1';
    }
    if (updatedPlayer2 === '') {
      updatedPlayer2 = 'Joueur 2';
    }
    navigation.navigate('DiceRoll', { player1: updatedPlayer1, player2: updatedPlayer2, mode });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrez les noms des joueurs</Text>
      <TextInput
        style={styles.input}
        placeholder="Joueur 1"
        value={player1}
        onChangeText={setPlayer1}
      />
      <TextInput
        style={styles.input}
        placeholder="Joueur 2"
        value={player2}
        onChangeText={setPlayer2}
      />
      <Button title="Suivant" onPress={handleSubmit} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default PlayerInputScreen;