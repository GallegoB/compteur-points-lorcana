// src/screens/PlayerInputScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './styles'; // Importez les styles depuis le fichier styles.js

const PlayerInputScreen = ({ navigation, route }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const { mode, round, nbRound, nbRoundMade } = route.params;



  

  const handleSubmit = () => {
    let updatedPlayer1 = player1;
    let updatedPlayer2 = player2;
    if (updatedPlayer1 === '') {
      updatedPlayer1 = 'Joueur 1';
    }
    if (updatedPlayer2 === '') {
      updatedPlayer2 = 'Joueur 2';
    }
    navigation.navigate('DiceRoll', { player1: updatedPlayer1, player2: updatedPlayer2, mode, round, nbRound, nbRoundMade});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrez les noms des joueurs</Text>
      <Text>Jeux: {mode}</Text>
      <Text>Mode: {round}</Text>
      <Text>Nombre de round: {nbRound}</Text>
      <Text>Numéro de round: {nbRoundMade}</Text>
      <Text></Text>
      <Text>Nom du joueur 1</Text>
      <TextInput
        style={styles.input}
        placeholder="Joueur 1"
        value={player1}
        onChangeText={setPlayer1}
      />
      <Text></Text>
      <Text>Nom du joueur 2</Text>
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


export default PlayerInputScreen;