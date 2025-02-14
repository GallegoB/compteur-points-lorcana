import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PlayerInputScreen from './screens/PlayerInputScreen';
import DiceRollScreen from './screens/DiceRollScreen';
import GameScreen from './screens/GameScreen';
import RoundSummaryScreen from './screens/RoundSummaryScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlayerInput" component={PlayerInputScreen} />
        <Stack.Screen name="DiceRoll" component={DiceRollScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="RoundSummary" component={RoundSummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
