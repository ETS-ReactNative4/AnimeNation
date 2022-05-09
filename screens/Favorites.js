import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
  Animated,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('coursedb.db');

export default function Favorites({ navigation }) {
  const [favor, setFavor] = useState([]);
  const { width, height } = Dimensions.get('screen');
  const imageW = width * 0.7;
  const imageH = imageW * 1.54;
  const scrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql('select * from animelistF;', [], (_, { rows }) =>
          setFavor(rows._array)
        );
      },
      null,
      null
    );
  }, [favor]);

  const deleteItem = (id) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`delete from animelistF where id = ?;`, [id]);
      },
      null,
      null
    );
    Alert.alert('Deleted from Favorites', 'See you next time!');
  };
  const favoritesTab = () => {
    navigation.navigate('Anime');
  };

  return (
    <View style={styles.favMainContainer}>
      {favor.length > 0 ? (
        <View style={StyleSheet.absoluteFillObject}>
          <View style={StyleSheet.absoluteFillObject}>
            {favor.map((image, index) => {
              const inputRange = [
                (index - 1) * width, // next
                index * width, //current
                (index + 1) * width, //previous
              ];
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
              });
              return (
                <Animated.Image
                  key={`image-${index}`}
                  source={{ uri: image.movie_banner }}
                  style={[StyleSheet.absoluteFillObject, { opacity }]}
                  blurRadius={15}
                />
              );
            })}
          </View>

          <Animated.FlatList
            keyExtractor={(item) => item.id.toString()}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            data={favor}
            horizontal
            pagingEnabled
            renderItem={({ item }) => (
              <View
                style={{
                  width,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOpacity: 0.5,
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 20,
                }}
              >
                <View style={styles.favPostView}>
                  <View style={styles.favPostTitle}>
                    <View style={styles.favImageView}>
                      <Image
                        style={styles.favArtistPhoto}
                        source={{ uri: item.image }}
                      />
                      <View style={styles.favTitleView}>
                        <Text style={styles.favTitleName}>{item.title}</Text>
                        <Text style={styles.favDirectorName}>
                          {item.director}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Favorites Description', {
                        data: item,
                      })
                    }
                  >
                    <Image
                      style={{
                        width: imageW,
                        height: imageH,
                        resizeMode: 'cover',
                        borderRadius: 15,
                      }}
                      source={{ uri: item.movie_banner }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginRight: '2%', marginTop: 25 }}
                  >
                    <Ionicons
                      name='md-heart-dislike-outline'
                      size={35}
                      color='black'
                      onPress={() => deleteItem(item.id)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      ) : (
        <ImageBackground
          source={require('../assets/favorite/backgroundPhotoFav.png')}
          resizeMode='cover'
          style={styles.favImageBackground}
        >
          <View style={styles.favContainer}>
            <Image
              style={styles.favDescription}
              source={require('../assets/favorite/favoritePhotoMessage.png')}
            />
          </View>
          <View style={styles.favHeart}>
            <TouchableOpacity>
              <Ionicons
                name='heart'
                size={35}
                color='black'
                onPress={() => favoritesTab()}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  favMainContainer: {
    flex: 1,
  },

  favPostView: {
    width: '100%',
    alignItems: 'center',
  },

  favPostTitle: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  favImageView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  favArtistPhoto: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  favTitleView: {
    marginLeft: 5,
  },

  favTitleName: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },

  favDirectorName: {
    fontSize: 17,
    color: 'black',
  },

  favImageBackground: {
    flex: 1,
    justifyContent: 'center',
  },

  favContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 300,
  },
  favDescription: {
    width: 300,
    height: 215,
    borderRadius: 20,
  },
  favHeart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
