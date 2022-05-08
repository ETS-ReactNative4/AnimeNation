import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useScrollToTop } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('coursedb.db');

export default function Screen2({ navigation }) {
  const [filteredData, setFilteredData] = useState([]);
  const [feed, setFeed] = useState([]);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  useScrollToTop(ref);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then((response) => response.json())
      .then((responseJson) => {
        setFeed(responseJson);
        setFilteredData(responseJson);
      })
      .catch((error) => {
        Alert.alert('Error', error);
      });
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = filteredData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFeed(newData);
      setSearch(text);
    } else {
      setFeed(filteredData);
      setSearch(text);
    }
  };

  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'create table if not exists animelistF (id integer primary key not null, director text, title text, producer text, description text, original_title text, release_date int, running_time int, rt_score int, image text, movie_banner text);'
        );
      },
      null,
      null
    );
  }, []);

  const saveItem = (item) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'insert into animelistF ( director, title, producer, description, original_title, release_date, running_time, rt_score, image, movie_banner) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
          [
            item.director,
            item.title,
            item.producer,
            item.description,
            item.original_title,
            parseInt(item.release_date),
            parseInt(item.running_time),
            parseInt(item.rt_score),
            item.image,
            item.movie_banner,
          ]
        );
      },
      null,
      null
    );
    Alert.alert('Nice one!', 'The movie has been added to Favorites');
  };

  return (
    <ImageBackground
      source={require('../assets/anime/backgroundPhotoAnime.jpg')}
      resizeMode='cover'
      style={styles.animeImageBackground}
    >
      <View style={styles.animeImageContainer}>
        <Image
          style={styles.animeImage}
          source={require('../assets/anime/animePhotoSearch.png')}
        />
      </View>
      <View style={styles.animeTextInputView}>
        <TextInput
          value={search}
          onChangeText={(text) => searchFilter(text)}
          placeholder={'Search Movie Title'}
          placeholderTextColor={'grey'}
          style={styles.animeTextInput}
        ></TextInput>
      </View>

      <View style={styles.animeMainPostView}>
        {feed.length < 1 ? (
          <ActivityIndicator size={'large'} color={'#2FBBF0'} />
        ) : (
          <FlatList
            style={{ marginLeft: '2%' }}
            data={feed}
            ref={ref}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.animePostView}>
                <View style={styles.animePostTitle}>
                  <View style={styles.animeImageView}>
                    <Image
                      style={styles.animeArtistPhoto}
                      source={{ uri: item.movie_banner }}
                    />
                    <View style={styles.animeTitleView}>
                      <Text style={styles.animeTitleName}>{item.title}</Text>
                      <Text style={styles.animeDirectorName}>
                        {item.director}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Ionicons
                      name='heart'
                      size={33}
                      color='black'
                      onPress={() => saveItem(item)}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.animeCoverButton}
                  onPress={() =>
                    navigation.navigate('Reading is Fundamental', {
                      data: item,
                    })
                  }
                >
                  <Image
                    style={styles.animeCoverPhoto}
                    source={{ uri: item.image }}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  animeImageBackground: {
    flex: 1,
  },

  animeImageContainer: {
    alignItems: 'center',
  },

  animeImage: {
    width: 250,
    height: 250,
    marginBottom: -50,
  },

  animeTextInputView: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },

  animeTextInput: {
    height: 45,
    width: '80%',
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'green',
  },

  animeMainPostView: {
    width: '100%',
    marginBottom: 280,
  },

  animePostView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },

  animePostTitle: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  animeImageView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  animeArtistPhoto: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  animeTitleView: {
    marginLeft: 15,
  },

  animeTitleName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },

  animeDirectorName: {
    fontSize: 15,
    color: 'black',
  },

  animeCoverButton: {
    width: 250,
    height: 350,
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginTop: 20,
    borderRadius: 10,
  },

  animeCoverPhoto: {
    width: 250,
    height: 350,
    borderRadius: 10,
  },
});
