// src/screens/RoundSummaryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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

export default RoundSummaryScreen;
