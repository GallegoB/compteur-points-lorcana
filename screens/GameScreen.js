// src/screens/GameScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import styles from './styles'; // Importez les styles depuis le fichier styles.js

const GameScreen = ({ navigation, route }) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Victory, setPlayer1Victory] = useState(0);
  const [player2Victory, setPlayer2Victory] = useState(0);
  const { firstPlayer, player1, player2, mode, round, nbRound } = route.params;
  let nbGame = 0;
function debParty() {
  setPlayer1Score(0);
  setPlayer2Score(0);  
}
  const handleIncrement = (player) => {
    if (player === player1 && player1Score < 20) {
      setPlayer1Score(player1Score + 1);
    } else if (player === player2 && player2Score < 20) {
      setPlayer2Score(player2Score + 1);
    }

    if (player1Score === 20 || player2Score === 20) {
      if(round === 'Bo1') {
        navigation.navigate('RoundSummary', { player1, player2, mode, round, nbRound });
      }if (round === 'Bo2') {
        if (nbGame < 3) {
          nbGame++;
          if(player1Score === 20) {
            setPlayer1Victory(player1Victory + 1);
            alert(`Victoire de ${player1}`);
          }if(player2Score === 20) {
            setPlayer2Victory(player2Victory + 1);
            alert(`Victoire de ${player2}`);
          } 

          if (player1Victory === 2 || player2Victory === 2) {  
            alert(`1 Le gagnent de la round est ${player1Victory === 2 ? player1 : player2}`);
            navigation.navigate('RoundSummary', { player1, player2, mode, round, nbRound  });
        } else if (player1Victory !== player2Victory) {
            if(player1Victory === 1 && player2Victory === 1) {
                alert(`Egalité`);
                navigation.navigate('RoundSummary', { player1, player2, mode, round, nbRound  });
            } 
        }
               
          debParty();
      }
      }if (round === 'Bo3') {
        nbGame++;
        if(player1Score === 20) {
          setPlayer1Victory(player1Victory + 1);
          alert(`Victoire de ${player1}`);
        }if(player2Score === 20) {
          setPlayer2Victory(player2Victory + 1);
          alert(`Victoire de ${player2}`);
        } 

        if(player1Victory === 2 || player2Victory === 2) {  
          alert(`Le gagnent de la round est ${player1Victory === 2 ? player1 : player2}`);
          navigation.navigate('RoundSummary', { player1, player2, mode, round, nbRound  });
        }else if(player1Victory === 1 && player2Victory === 1) {
          alert(`Egalité`);
          navigation.navigate('RoundSummary', { player1, player2, mode, round, nbRound  });
      } 
             
        debParty();


    
      }
    }


  }

  const handleDecrement = (player) => {
    if (player === player1 && player1Score < 20 && player1Score > 0) {
      setPlayer1Score(player1Score - 1);
    } else if (player === player2 && player2Score < 20 && player2Score > 0) {
      setPlayer2Score(player2Score - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{firstPlayer} commence</Text>
      <Text>Score de {player1}: {player1Score}</Text>
      <Text>round gagner: {player1Victory}</Text>
      <Button title={`+`} onPress={() => handleIncrement(player1)} />
      <Button title={`-`} onPress={() => handleDecrement(player1)} />
      <Text></Text>
      <Text>Score de {player2}: {player2Score}</Text>
      <Text>round gagner: {player2Victory}</Text> 
      <Button title={`+`} onPress={() => handleIncrement(player2)} />
      <Button title={`-`} onPress={() => handleDecrement(player2)} />
     
    </View>
  );
};

export default GameScreen;
