// src/screens/HomeScreen.js
import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles'; // Importez les styles depuis le fichier styles.js

const HomeScreen = ({ navigation }) => {
  const [mode, setMode] = useState('Libre');
  const [round, setRound] = useState('Bo3');
  const [nbRound, setNbRound] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez le mode de jeu</Text>
      <Picker
        selectedValue={mode}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setMode(itemValue)}
      >
        <Picker.Item label="Libre" value="Libre" />
        <Picker.Item label="Tournoi" value="Tournoi" />
      </Picker>

        <TextInput
              style={styles.input}
              placeholder="Nombre de round"
              value={nbRound}
              onChangeText={setNbRound}
              keyboardType="numeric"
            />
      <Text style={styles.title}>Choisissez le mode de rondes</Text>
      {/* <Button title="Bo1" onPress={() => setMode('Bo1')} />
      <Button title="Bo2" onPress={() => setMode('Bo2')} />
      <Button title="Bo3" onPress={() => setMode('Bo3')} /> */}
      <Picker selectedValue={round}
        style={{ height: 50, width: 200 }}  
        onValueChange={(itemValue, itemIndex) => setRound(itemValue)}>
        <Picker.Item label="Bo1" value="Bo1" />
        <Picker.Item label="Bo2" value="Bo2" />
        <Picker.Item label="Bo3" value="Bo3" />
      </Picker>
        <Button title="Valider" onPress={() => navigation.navigate('PlayerInput', { mode, round, nbRound})} />
    </View>
  );
};



export default HomeScreen;
