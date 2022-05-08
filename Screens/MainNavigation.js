import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import AnimeAllList from './AnimeAllList';
import Favorites from './Favorites';
import Profile from './Profile';
import HomeFeaturedAnime from './HomeFeaturedAnime';
import AnimeSelectedList from './AnimeSelectedList';
import FavoritesSelectedList from './FavoritesSelectedList';
import SignIn from './SignIn';
import Quote from './Quote';

export default function MainNavigation() {
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
  const AnimeStack = createNativeStackNavigator();
  const ProfileStack = createNativeStackNavigator();

  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          options={{ headerShown: false }}
          name='Home Feed'
          component={HomeScreen}
        />
        <HomeStack.Screen
          options={{ headerShown: false }}
          name='Featured Anime'
          component={HomeFeaturedAnime}
        />
      </HomeStack.Navigator>
    );
  };

  const AnimeStackScreen = () => {
    return (
      <AnimeStack.Navigator>
        <AnimeStack.Screen
          options={{ headerShown: false }}
          name='All Anime Feed'
          component={AnimeAllList}
        />
        <AnimeStack.Screen
          name='Reading is Fundamental'
          component={AnimeSelectedList}
          options={{
            headerTitle: 'Reading is Fundamental',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F7EBFF',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
            },
            headerRight: () => <Ionicons name={'ios-bookmarks'} size={25} />,
          }}
        />
      </AnimeStack.Navigator>
    );
  };

  const FavoritesStackScreen = () => {
    return (
      <AnimeStack.Navigator>
        <AnimeStack.Screen
          options={{ headerShown: false }}
          name='All Favorites'
          component={Favorites}
        />
        <AnimeStack.Screen
          name='Favorites Description'
          component={FavoritesSelectedList}
          options={{
            headerTitle: 'My Favorites',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F7EBFF',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
            },
            headerRight: () => <Ionicons name={'ios-bookmarks'} size={25} />,
          }}
        />
      </AnimeStack.Navigator>
    );
  };

  const ProfileStackScreen = () => {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          options={{ headerShown: false }}
          name='Profile Feed'
          component={Profile}
        />
        <ProfileStack.Screen
          options={{ headerShown: false }}
          name='Sign In'
          component={SignIn}
        />

        <ProfileStack.Screen
          options={{ headerShown: false }}
          name='Quote'
          component={Quote}
        />
      </ProfileStack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'md-home';
          } else if (route.name === 'Anime') {
            iconName = 'bonfire-sharp';
          } else if (route.name === 'Favorites') {
            iconName = 'heart-sharp';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2FBBF0',
        tabBarInactiveTintColor: '#7A8FA6',
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name='Home'
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name='Anime'
        component={AnimeStackScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name='Favorites'
        component={FavoritesStackScreen}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name='Profile'
        component={ProfileStackScreen}
      />
    </Tab.Navigator>
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
