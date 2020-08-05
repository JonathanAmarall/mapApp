import React from 'react';
import { View, Text } from 'react-native';

export default function Profile({ route, navigation }) {
  const { github_username } = route.params;
  console.log(github_username);
  return (
    <View>
      <Text>{github_username}</Text>
    </View>
  );
}
