import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainNavigation from './MainNavigation';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Sign In'
        component={SignIn}
      />
      <Stack.Screen
        name='Create New User'
        component={SignUp}
        options={{
          headerTitle: 'Create A New User',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FFDE85',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'black',
          },
          headerRight: () => (
            <Ionicons name={'md-person-circle-outline'} size={30} />
          ),
        }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Main Navigation'
        component={MainNavigation}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
