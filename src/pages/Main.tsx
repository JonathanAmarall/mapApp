import React, { Component, useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState();

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -27.358031, longitude: -53.40531 }}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://lh3.googleusercontent.com/ogw/ADGmqu-3pE01iA2kCqB5XAgBwd-RJVPuSrEdM11uetZ3=s83-c-mo',
          }}
        />
        <Callout
          onPress={() => {
            navigation.navigate('Profile', {
              github_username: 'JonathanAmarll',
            });
          }}
        >
          <View style={styles.callout}>
            <Text style={styles.devName}>Jonathan Amaral</Text>
            <Text style={styles.devBio}> Web Developer na empresa iBRSoft</Text>
            <Text style={styles.devTechs}>
              ReactJS, C#, Angular, VueJS, Angular
            </Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  },
});

export default Main;
