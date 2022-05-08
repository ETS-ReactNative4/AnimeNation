import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { authentication } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createNewUser = () => {
    if (email === '' || password === '') {
      Alert.alert('Please fill the form properly');
    } else {
      createUserWithEmailAndPassword(authentication, email, password)
        .then(() =>
          Alert.alert('Great Choice!', 'New User Successfully Created!')
        )
        .catch((error) => {
          if (error.code == 'auth/email-already-in-use') {
            alert('The email address is already in use');
          } else if (error.code == 'auth/invalid-email') {
            alert('The email address is not valid.');
          } else if (error.code == 'auth/operation-not-allowed') {
            alert('Operation not allowed.');
          } else if (error.code == 'auth/weak-password') {
            alert('The password is too weak.');
          }
        });
    }
  };

  return (
    <ImageBackground
      source={require('../assets/signInUp/backgroundPhotoSignUp.jpg')}
      resizeMode='cover'
      style={styles.signUpImageBackground}
    >
      <KeyboardAvoidingView style={styles.signUpContainer}>
        <View style={styles.signUpSubContainer}>
          <Image
            style={styles.signUpTitle}
            source={require('../assets/signInUp/titleImage.png')}
          />
          <View style={styles.signUpInputContainer}>
            <TextInput
              placeholder='example@gmail.com'
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize='none'
            />
          </View>

          <View style={styles.signUpInputContainer}>
            <TextInput
              placeholder='password'
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize='none'
              secureTextEntry={true}
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={createNewUser}
              style={styles.signUpButton}
            >
              <Text style={styles.signUpButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  signUpImageBackground: {
    flex: 1,
  },

  signUpContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUpSubContainer: {
    width: '70%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
  },
  signUpTitle: {
    width: 250,
    height: 250,
    marginTop: -50,
    marginBottom: 10,
  },

  signUpInputContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingVertical: 5,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'grey',
  },

  signUpButton: {
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFDE85',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpButtonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
});
