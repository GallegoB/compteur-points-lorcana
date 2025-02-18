// src/screens/RoundSummaryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './styles'; // Importez les styles depuis le fichier styles.js


const RoundSummaryScreen = ({ navigation, route }) => {
  const [comment, setComment] = useState('');  
  const { firstPlayer, player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments } = route.params;

  const handleSubmit = () => {
    // Enregistrer les couleurs des decks et le commentaire
    


    // Si nbRound est égal à nbRoundMade, on revient à l'écran d'accueil
    if (nbRound == nbRoundMade) {
      navigation.navigate('Home');      
    } else {
      // Sinon, on revient à l'écran de saisie des Joueurs et on incrémente le numéro de round
      navigation.navigate('PlayerInput', { mode, round, nbRound, nbRoundMade: nbRoundMade + 1, nameTournaments });
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fin du round</Text>
      <Text>Nombre de round: {nbRound}</Text>
      <Text>Numéro de round: {nbRoundMade}</Text>
      <Text>Mode: {mode}</Text>
      <TextInput
        style={styles.input}
        placeholder="Ajouter un commentaire"
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Enregistrer" onPress={handleSubmit} />
    </View>
  );
};

export default RoundSummaryScreen;
