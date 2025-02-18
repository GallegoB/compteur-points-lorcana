import { StyleSheet } from 'react-native';

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
  dice: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  diceText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  playerContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  playerText: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200,
  },
  flippedText: {
    transform: [{ rotate: '180deg' }],
  },
  largeButton: {
    width: 80, // Largeur du bouton
    height: 80, // Hauteur du bouton
    backgroundColor: 'lightblue', // Couleur de fond du bouton
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Coins arrondis
    marginHorizontal: 10, // Espace entre les boutons
  },
  buttonText: {
    fontSize: 24, // Taille de la police du texte du bouton
  },
});

export default styles;