// src/screens/DiceRollScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import styles from './styles'; // Importez les styles depuis le fichier styles.js

const DiceRollScreen = ({ navigation, route }) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
   const [firstPlayer, setfirstPlayer] = useState('');
  const { player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments } = route.params;

  
const rollDice1 = () => {
    const score1 = Math.floor(Math.random() * 12) + 1;
    setPlayer1Score(score1);
    rollDice();
  };
const rollDice2 = () => { 
    const score2 = Math.floor(Math.random() * 12) + 1;
    setPlayer2Score(score2);      
    rollDice();
  };
  
  function rollDice() {
 
      if (player1Score > player2Score) {
      setfirstPlayer(player1);  
      } else if (player2Score > player1Score) {
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
      <Text style={styles.title}>Lancer les dés pour déterminer le premier joueur de la round {nbRoundMade}</Text>
    <Text></Text>
     
      {/* joueur 2 */}
      <View style={[styles.playerContainer, styles.flippedText]}>       
        { player2 ==='Joueur 2' ? (<Text style={[styles.playerText]}>Joueur 2</Text>) : (<Text style={[styles.playerText]}>Joueur 2:{player2}</Text>)}
        <TouchableOpacity onPress={rollDice2}>
          <View style={styles.dice}>
            <Text style={styles.diceText}>{player2Score}</Text>
          </View>
        </TouchableOpacity>        
      </View>
      

      {/* joueur 1 */}
      <View style={styles.playerContainer}>
        { player1 ==='Joueur 1' ? (<Text style={styles.playerText}>Joueur 1</Text>) : (<Text style={styles.playerText}>Joueur 1:{player1}</Text>)}      
        <TouchableOpacity onPress={rollDice1}>
        <View style={styles.dice}>
          <Text style={styles.diceText}>{player1Score}</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      { firstPlayer === '' ? (<Text>Choisiser le premier joueur?</Text>) : (<Text style={styles.title}>Le joueur qui commencer est: {firstPlayer}</Text> )}
      { firstPlayer !== '' ? (<Button title="Commencer la partie" onPress={handleNext} />) : (<></>)}
      { (player1Score === player2Score && player1Score !== 0) ? (<Text>Egalité relancer les dés</Text>) :<></>}    
    
      <Button style={styles.largeButton} title='Joueur 1 commence' onPress={() => navigation.navigate('Game', { firstPlayer: player1, player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments })} />
      <Button style={styles.largeButton} title='Joueur 2 commence' onPress={() => navigation.navigate('Game', { firstPlayer: player2, player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments })} />
      <Button  style={styles.largeButton} title="Retour" onPress={() => navigation.goBack()} />
        </View>

    </View>
  );
};



export default DiceRollScreen;
