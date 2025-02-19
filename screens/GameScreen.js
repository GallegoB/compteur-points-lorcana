import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
const GameScreen = ({ route, navigation }) => {
  const [player1Score, setPlayer1Score] = useState(0);
  // let player1Score = 0;
  const [player2Score, setPlayer2Score] = useState(0);
  //let player2Score = 0;
  const [player1Victory, setPlayer1Victory] = useState(0);
  const [player2Victory, setPlayer2Victory] = useState(0);
  const { firstPlayer, player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments } = route.params;
  let maxScore = 20-1;
  let nbGame = 0;

function endGame() {
  navigation.navigate('RoundSummary', { player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments });
}

function debParty() {
  setPlayer1Score(0);
  setPlayer2Score(0);

}

function incrementVictory() {
    if (player1Score > maxScore) {
        setPlayer1Victory(player1Victory + 1);        
        alert(`Victoire de ${player1}`);
    } else if (player2Score > maxScore) {
        setPlayer2Victory(player2Victory + 1);
        alert(`Victoire de ${player2}`);
      }
}

function modeRound() {
  
  if (player1Score === maxScore|| player2Score === maxScore) {
    alert(`Mode de la round: ${mode} ${player1Score} ${player2Score}`);
    if (round === 'Bo1') {
      incrementVictory();
      alert(`Le gagnant de la round est ${player1Score === maxScore ? player1 : player2}`);
      endGame();
    } else if (round === 'Bo2') {
      if (nbGame < 3) {
        nbGame++;
        incrementVictory();

        if (player1Victory === 2 || player2Victory === 2) {
          alert(`Le gagnant de la round est ${player1Victory === 2 ? player1 : player2}`);
         endGame();
        } else if (player1Victory !== player2Victory) {
          if (player1Victory === 1 && player2Victory === 1) {
              alert(`Egalité`);
              endGame();
          }
        }
        
      }
    } else if (round === 'Bo3') {
        nbGame++;
        incrementVictory();

      if (player1Victory === 2 || player2Victory === 2) {

        alert(`Le gagnant de la round est ${player1Victory === 2 ? player1 : player2}`);

          endGame();
      } else if (player1Victory === 1 && player2Victory === 1) {
          alert(`Egalité`);
          endGame();
      }
      debParty();
    }
    }
}

const handleIncrement = (player) => {

    if (player === player1 ) {
       setPlayer1Score(player1Score + 1);
       //player1Score++;
    } else if (player === player2 && player2Score < maxScore) {
      //player2Score++;
      setPlayer2Score(player2Score + 1);
    }
    modeRound();
  };

  const handleDecrement = (player) => {
    if (player === player1 && player1Score < maxScore && player1Score > 0) {
      setPlayer1Score(player1Score - 1);
      //player1Score--;
    } else if (player === player2 && player2Score < maxScore && player2Score > 0) {
      setPlayer2Score(player2Score - 1);
      //player2Score--;
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, styles.flippedText]}>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.largeButton} onPress={() => handleIncrement(player2)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton} onPress={() => handleDecrement(player2)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.playerContainer}>
          <Text style={[styles.playerScore, styles.flippedText]}>{player2Score}</Text>
        <Text style={[styles.playerText, styles.flippedText]}>Partie gagnée: {player2Victory}</Text>
        {player2 === 'Joueur 2' ? (
          <Text style={[styles.playerText, styles.flippedText]}>Joueur 2</Text>
        ) : (
          <Text style={[styles.playerText, styles.flippedText]}>Joueur 2: {player2}</Text>
        )}
        </View>
<Text style={styles.title}>Numéro de round: {nbRoundMade}</Text>
<Text style={styles.infoText}>{firstPlayer} commence la première</Text>
  <View style={styles.playerContainer}>
        {player1 === 'Joueur 1' ? (
          <Text style={[styles.playerText]}>Joueur 1</Text>
        ) : (
          <Text style={[styles.playerText, styles.flippedText]}>Joueur 1: {player1}</Text>
        )}
        <Text style={[styles.playerText]}>Partie gagnée: {player1Victory}</Text>
      <Text style={[styles.playerScore]}>{player1Score}</Text>
  </View>
  <View style={[styles.buttonContainer]}>
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.largeButton} onPress={() => handleIncrement(player1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton} onPress={() => handleDecrement(player1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

export default GameScreen;