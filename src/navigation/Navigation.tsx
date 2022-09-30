import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';
import { ActorInfoScreen } from '../screens/ActorInfoScreen';
import { Info } from '../interfaces/actorInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
  ActorInfoScreen: Info;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" options={{ cardStyle: { backgroundColor: '#E5E4E2' }}} component={ DetailScreen } />
      <Stack.Screen name="ActorInfoScreen" component={ ActorInfoScreen } />
    </Stack.Navigator>
  );
}