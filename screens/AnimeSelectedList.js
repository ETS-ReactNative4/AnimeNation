import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function AnimeSelectedList({ route }) {
  const postData = route.params.data;

  return (
    <ImageBackground
      source={require('../assets/anime/backgroundPhotoAnimeSel.png')}
      resizeMode='cover'
      style={styles.animeSelImageBackground}
    >
      <ScrollView>
        <View style={styles.animeSelMainPlayerView}>
          <View>
            <Image
              style={styles.animeSelCoverPhoto}
              source={{ uri: postData.movie_banner }}
            />
          </View>

          <View style={styles.animePostTitleContainer}>
            <Text style={styles.animePostTitle}>{postData.title}</Text>
            <Text style={styles.animePostTitleSub}>
              {postData.original_title}
            </Text>
          </View>

          <View style={styles.animePostAboutContainer}>
            <Text style={styles.animePostAbout}>{postData.description}</Text>
          </View>

          <View style={styles.animePostEtc}>
            <Text style={styles.animePost}>Director: {postData.director}</Text>
            <Text style={styles.animePost}>Producer: {postData.producer}</Text>
            <Text style={styles.animePost}>
              Released: {postData.release_date}
            </Text>
            <Text style={styles.animePost}>
              Runtime: {postData.running_time} minutes
            </Text>
            <Text style={styles.animePost}>
              Rating: {postData.rt_score} / 100
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  animeSelImageBackground: {
    flex: 1,
  },

  animeSelMainPlayerView: {
    alignItems: 'center',
    marginBottom: 40,
  },

  animeSelCoverPhoto: {
    width: 250,
    height: 350,
    borderRadius: 10,
    marginTop: 50,
  },

  animePostTitleContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    width: '60%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },

  animePostTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },

  animePostTitleSub: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },

  animePostAboutContainer: {
    width: '75%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
  },

  animePostAbout: {
    fontSize: 23,
    marginTop: 10,
    color: 'white',
  },

  animePostEtc: {
    marginTop: 40,
    alignItems: 'center',
  },

  animePost: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});
