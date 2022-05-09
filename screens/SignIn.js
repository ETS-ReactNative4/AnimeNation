import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from './firebaseConfig';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Please fill the email and the password');
    } else {
      signInWithEmailAndPassword(authentication, email, password)
        .then((userCredentials) => {})
        .then(() => {
          navigation.navigate('Main Navigation');
        })

        .catch((error) => alert(error.message));
    }
  };

  const handleSignUp = () => {
    navigation.navigate('Create New User');
  };

  return (
    <ImageBackground
      source={require('../assets/signInUp/backgroundPhotoSignIn.jpg')}
      resizeMode='cover'
      style={styles.signInImageBackground}
    >
      <ScrollView style={styles.signInScrollContainer}>
        <KeyboardAvoidingView style={styles.signInContainer}>
          <Image
            style={styles.signInTitle}
            source={require('../assets/signInUp/titleImage.png')}
          />
          <Image
            style={styles.signInImage}
            source={require('../assets/signInUp/coverPhoto.png')}
          />
          <View style={styles.signInInputContainer}>
            <TextInput
              style={styles.signInInputText}
              placeholder='E-mail'
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize='none'
            />
          </View>
          <View style={styles.signInInputContainer}>
            <TextInput
              style={styles.signInInputText}
              placeholder='Password'
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize='none'
              secureTextEntry={true}
            />
          </View>
          <View style={styles.signInButtonContainer}>
            <TouchableOpacity
              onPress={handleLogin}
              style={[styles.signInButton, styles.signInButtonOutline1]}
            >
              <Text style={styles.signInButtonText1}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSignUp}
              style={[styles.signInButton, styles.signInButtonOutline2]}
            >
              <Text style={styles.signInButtonText2}>Register</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  signInImageBackground: {
    flex: 1,
  },

  signInScrollContainer: {
    marginTop: 20,
  },

  signInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInTitle: {
    width: 250,
    height: 250,
  },

  signInImage: {
    width: 175,
    height: 325,
    marginBottom: -10,
  },

  signInInputContainer: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 5,
    paddingVertical: 5,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'grey',
  },

  signInInputText: {
    width: '70%',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },

  signInButtonContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row',
    marginBottom: 15,
  },

  signInButton: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2,
  },

  signInButtonOutline1: {
    backgroundColor: '#5B0E2D',
    marginTop: 5,
    borderColor: '#FFA781',
    borderWidth: 2,
  },

  signInButtonText1: {
    color: '#FFA781',
    fontWeight: '700',
    fontSize: 16,
  },

  signInButtonOutline2: {
    backgroundColor: '#EFC8B1',
    marginTop: 5,
    borderColor: '#8A6626',
    borderWidth: 2,
  },

  signInButtonText2: {
    color: '#8A6626',
    fontWeight: '700',
    fontSize: 16,
  },
});
