import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/Main';
import Profile from './pages/Profile';

export default function Route() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'snow',
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
