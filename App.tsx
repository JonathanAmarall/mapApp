import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Route from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Route />
      <StatusBar backgroundColor="orange" />
    </NavigationContainer>
  );
}
