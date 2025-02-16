// src/screens/DiceRollScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import styles from './styles'; // Importez les styles depuis le fichier styles.js

const DiceRollScreen = ({ navigation, route }) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
   const [firstPlayer, setfirstPlayer] = useState('');
  const { player1, player2, mode, round } = route.params;

  const rollDice = () => {
    const score1 = Math.floor(Math.random() * 12) + 1;
    const score2 = Math.floor(Math.random() * 12) + 1;
    setPlayer1Score(score1);
    setPlayer2Score(score2);
    if (score1 > score2) {
     setfirstPlayer(player1);
  
    } else if (score2 > score1) {
      setfirstPlayer(player2);
    } 
   
  };

  const handleNext = () => {
    if (player1Score > player2Score) {
      navigation.navigate('Game', { firstPlayer, player1, player2, mode, round });
    } else if (player2Score > player1Score) {
      navigation.navigate('Game', { firstPlayer, player1, player2, mode, round });
    }else{
      Alert("Valeur identique, relancez le dé");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lancer le dé pour déterminer le premier joueur</Text>
      <Button title="Lancer le dé" onPress={rollDice} />
      <Text>Score de {player1}: {player1Score}</Text>
      <Text>Score de {player2}: {player2Score}</Text>

      <Text style={styles.title}>Le joueur qui commencer est: {firstPlayer}</Text>
      <Button title="Suivant" onPress={handleNext} />
    </View>
  );
};



export default DiceRollScreen;
