// src/screens/DiceRollScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import styles from './styles'; // Importez les styles depuis le fichier styles.js

const DiceRollScreen = ({ navigation, route }) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
   const [firstPlayer, setfirstPlayer] = useState('');
  const { player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments } = route.params;

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
      navigation.navigate('Game', { firstPlayer, player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments });
    } else if (player2Score > player1Score) {
      navigation.navigate('Game', { firstPlayer, player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments });
    }else{
      Alert("Valeur identique, relancez le dé");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lancer le dé pour déterminer le premier joueur de la round {nbRoundMade}</Text>
    <Text></Text>
      <Button title="Lancer le dé" onPress={rollDice} />
      <Text></Text>
      <Text>{player1} a obtenu {player1Score}</Text>
      <View style={styles.dice}>
        <Text style={styles.diceText}>{player1Score}</Text>
      </View>
      <Text>{player2} a obtenu {player2Score}</Text>
      <View style={styles.dice}>
        <Text style={styles.diceText}>{player2Score}</Text>
      </View>
      
      { firstPlayer === '' ? (<Text>Choisiser le premier joueur</Text>) : (<Text style={styles.title}>Le joueur qui commencer est: {firstPlayer}</Text> )}
      { firstPlayer !== '' ? (<Button title="Commencer la partie" onPress={handleNext} />) : (<Text></Text>)}
      { (player1Score === player2Score && player1Score !== 0) ? (<Button title="Relancer le dé" onPress={rollDice} />) : (<Text></Text>)}
      
    
      <Button title='Joueur 1 commence' onPress={() => navigation.navigate('Game', { firstPlayer: player1, player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments })} />
      <Button title='Joueur 2 commence' onPress={() => navigation.navigate('Game', { firstPlayer: player2, player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments })} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
};



export default DiceRollScreen;
