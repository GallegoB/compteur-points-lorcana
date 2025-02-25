import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('roundSummary');
        if (jsonValue != null) {
          setData(JSON.parse(jsonValue));
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Données enregistrées</Text>
      {data ? (
        <View>
          <Text style={styles.label}>Premier joueur : {data.firstPlayer}</Text>
          <Text style={styles.label}>Joueur 1 : {data.player1}</Text>
          <Text style={styles.label}>Joueur 2 : {data.player2}</Text>
          <Text style={styles.label}>Mode : {data.mode}</Text>
          <Text style={styles.label}>Round : {data.round}</Text>
          <Text style={styles.label}>Nombre de rounds : {data.nbRound}</Text>
          <Text style={styles.label}>Nombre de rounds effectués : {data.nbRoundMade}</Text>
          <Text style={styles.label}>Commentaire : {data.comment}</Text>
          <Text style={styles.label}>Couleurs sélectionnées : {data.selectedColors.join(', ')}</Text>
        </View>
      ) : (
        <Text style={styles.label}>Aucune donnée disponible</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DataScreen;