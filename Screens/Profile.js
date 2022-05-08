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
import { authentication } from './firebaseConfig';
import { signOut } from 'firebase/auth';

export default function Profile({ navigation }) {
  const handleSignOut = () => {
    signOut(authentication)
      .then(() => {
        navigation.navigate('Sign In');
      })
      .catch((error) => alert(error.message));
  };

  const animeList = () => {
    navigation.navigate('Quote');
  };

  return (
    <ImageBackground
      source={require('../assets/profile/backgroundPhotoProf.jpg')}
      resizeMode='cover'
      style={styles.profileImageBackground}
    >
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={animeList} style={styles.profileButtonQuote}>
          <Image
            style={styles.profileImage}
            source={require('../assets/signInUp/coverPhoto.png')}
          />
        </TouchableOpacity>
        <View style={styles.profileDescriptionContainer}>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.profileButtonContainer}
          >
            <Text style={styles.profileButtonText}>Sign Out</Text>
            <Ionicons
              name={'ios-log-out'}
              size={30}
              style={styles.profileButtonIcon}
            />
          </TouchableOpacity>
          <Text style={styles.profileEmail}>
            {authentication.currentUser?.email}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  profileImageBackground: {
    flex: 1,
  },

  profileContainer: {
    marginTop: 50,
  },

  profileButtonQuote: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImage: {
    width: 375,
    height: 525,
  },

  profileDescriptionContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileButtonContainer: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#DFF1DF',
    padding: 5,
    borderRadius: 10,
  },

  profileButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  profileButtonIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 5,
  },

  profileEmail: {
    fontSize: 17,
    marginBottom: 25,
    fontWeight: 'bold',
  },
});
