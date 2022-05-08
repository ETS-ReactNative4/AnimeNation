import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const animeFeat = () => {
    navigation.navigate('Featured Anime');
  };

  return (
    <ImageBackground
      source={require('../assets/home/backgroundPhotoHome.jpg')}
      resizeMode='cover'
      style={styles.homeImageBackground}
    >
      <View style={styles.homeContainer}>
        <Image
          style={styles.homeImageTitle}
          source={require('../assets/signInUp/titleImage.png')}
        />
        <Image
          style={styles.homeImageDescription}
          source={require('../assets/home/descriptionImageHome.png')}
        />
        <View style={styles.homeButtonContainer}>
          <TouchableOpacity onPress={animeFeat} style={styles.homeFingerButton}>
            <Text style={styles.homeFingerButtonText}>
              <Ionicons name={'finger-print'} size={60} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  homeImageBackground: {
    flex: 1,
  },

  homeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  homeImageTitle: {
    width: 250,
    height: 250,
    marginBottom: -10,
  },

  homeImageDescription: {
    width: 375,
    height: 290,
    borderRadius: 20,
  },

  homeButtonContainer: {
    marginTop: 100,
  },

  homeFingerButton: {
    width: 85,
    height: 85,
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: '#DFF1DF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeFingerButtonText: {
    color: 'black',
  },
});
