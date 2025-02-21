// src/screens/RoundSummaryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles'; // Importez les styles depuis le fichier styles.js
import colors from './colors.json'; // Importez le tableau de couleurs depuis le fichier colors.json

const RoundSummaryScreen = ({ navigation, route }) => {
  const [comment, setComment] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const { firstPlayer, player1, player2, mode, round, nbRound, nbRoundMade, nameTournaments } = route.params;

  //const colors = ['Ambre', 'Améthyste', 'Émeraude', 'Rubis', 'Saphir', 'Acier'];

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else if (selectedColors.length < 2) {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleSubmit = () => {
    // Enregistrer les couleurs des decks et le commentaire
    console.log('Couleurs sélectionnées:', selectedColors);
    console.log('Commentaire:', comment);

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
      <Text>Nombre de round: {nbRound}, Numéro de round: {nbRoundMade}</Text>
      <Text>Mode: {mode}</Text>
      <Text style={styles.subtitle}>Sélectionnez les deux couleurs du deck de l'autre joueur:</Text>
      <View style={styles.colorRow}>
      {colors.map((color) => (
        <CheckBox
          key={color}
          title={color}
          checked={selectedColors.includes(color)}
          onPress={() => handleColorChange(color)}
            containerStyle={styles.colorCheckBox}
        />
      ))}
      </View>
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
