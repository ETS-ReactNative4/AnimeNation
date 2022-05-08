import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigation from './Screens/LoginNavigation';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from './Screens/firebaseConfig';
import MainNavigation from './Screens/MainNavigation';

export default function App() {
  const [user, setUser] = useState(false);

  //logged user
  onAuthStateChanged(authentication, (user) => {
    if (user) {
      setUser(true);
    } else {
      setUser(false);
    }
  });

  if (user === true) {
    return (
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <LoginNavigation />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
