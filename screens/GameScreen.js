// src/screens/GameScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameScreen = ({ navigation, route }) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const { firstPlayer, player1, player2, mode } = route.params;

  const handleIncrement = (player) => {
    if (player === player1 && player1Score < 20) {
      setPlayer1Score(player1Score + 1);
    } else if (player === player2 && player2Score < 20) {
      setPlayer2Score(player2Score + 1);
    }

    if (player1Score === 20 || player2Score === 20) {
      navigation.navigate('RoundSummary', { player1, player2, mode });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{firstPlayer} commence</Text>
      <Text>Score de {player1}: {player1Score}</Text>
      <Text>Score de {player2}: {player2Score}</Text>
      <Button title={`+1 pour ${player1}`} onPress={() => handleIncrement(player1)} />
      <Button title={`+1 pour ${player2}`} onPress={() => handleIncrement(player2)} />
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

export default GameScreen;
