// src/screens/RoundSummaryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './styles'; // Importez les styles depuis le fichier styles.js


const RoundSummaryScreen = ({ navigation, route }) => {
  const [comment, setComment] = useState('');
  const { player1, player2, mode } = route.params;

  const handleSubmit = () => {
    // Enregistrer les couleurs des decks et le commentaire
    // Pour l'instant, on affiche juste un message
    alert(`Commentaire: ${comment}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fin du round</Text>
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
