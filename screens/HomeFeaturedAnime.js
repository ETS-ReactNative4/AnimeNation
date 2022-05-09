import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';

export default function HomeFeaturedAnime({ navigation }) {
  const [feed, setFeed] = useState({});

  useEffect(() => {
    fetch(
      'https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c'
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setFeed(responseJson);
      })
      .catch((error) => {
        Alert.alert('Error', error);
      });
  }, []);

  return (
    <ImageBackground
      source={require('../assets/home/backgroundHomeFeatured.jpg')}
      resizeMode='cover'
      style={styles.homeFeatImageBackground}
    >
      <ScrollView>
        <View style={styles.homeFeatContainer}>
          <Image
            style={styles.homeFeatLogo}
            source={require('../assets/home/homePhotoFeatured.png')}
          />

          <View style={styles.homeFeatTitleContainer}>
            <View style={styles.homeFeatImageContainer}>
              <Image
                style={styles.homeFeatArtistPhoto}
                source={{ uri: feed.image }}
              />
              <View style={styles.homeFeatArtistDes}>
                <Text style={styles.homeFeatArtistDirector}>
                  {feed.director}
                </Text>
                <Text style={styles.homeFeatArtistSubDes}>Director</Text>
              </View>
            </View>
          </View>

          <Image
            style={styles.homeFeatCoverPhoto}
            source={{ uri: feed.movie_banner }}
          />
        </View>
        <View style={styles.homeFeatContain}>
          <View style={styles.homeFeatDescription}>
            <Text style={styles.homeFeatTitle}>{feed.title}</Text>
            <Text style={styles.homeFeatTitle2}>{feed.original_title}</Text>
          </View>

          <View style={styles.homeFeatDescription}>
            <Text style={styles.homeFeatAbout}>{feed.description}</Text>
            <Text style={styles.homeFeatProducer}>
              Producer: {feed.producer}
            </Text>
            <Text style={styles.homeFeatRelease}>
              Released: {feed.release_date}
            </Text>
            <Text style={styles.homeFeatTime}>
              Runtime: {feed.running_time} minutes
            </Text>
            <Text style={styles.homeFeatRating}>
              Rating: {feed.rt_score} / 100
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  homeFeatImageBackground: {
    flex: 1,
  },

  homeFeatContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },

  homeFeatLogo: {
    width: 250,
    height: 250,
    marginTop: -35,
  },

  homeFeatTitleContainer: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  homeFeatImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  homeFeatArtistPhoto: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  homeFeatArtistDes: {
    marginLeft: 25,
  },

  homeFeatArtistDirector: {
    fontSize: 23,
    fontWeight: 'bold',
  },

  homeFeatArtistSubDes: {
    fontSize: 17,
    color: 'black',
  },

  homeFeatCoverPhoto: {
    width: '85%',
    height: 350,
    borderRadius: 20,
    marginBottom: 30,
  },

  homeFeatContain: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },

  homeFeatDescription: {
    width: '75%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 40,
  },

  homeFeatTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#DCDCDC',
  },

  homeFeatTitle2: {
    fontSize: 20,
    color: '#DCDCDC',
  },

  homeFeatAbout: {
    fontSize: 23,
    color: '#DCDCDC',
    marginTop: 20,
    justifyContent: 'center',
  },

  homeFeatProducer: {
    fontSize: 20,
    color: '#DCDCDC',
    marginTop: 50,
  },

  homeFeatRelease: {
    fontSize: 20,
    color: '#DCDCDC',
    marginTop: 10,
  },

  homeFeatTime: {
    fontSize: 20,
    color: '#DCDCDC',
    marginTop: 10,
  },

  homeFeatRating: {
    fontSize: 20,
    color: '#DCDCDC',
    marginTop: 10,
    marginBottom: 20,
  },
});
