import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function FavoritesSelectedList({ route }) {
  const postData = route.params.data;
  return (
    <ImageBackground
      source={require('../assets/anime/backgroundPhotoAnimeSel.png')}
      resizeMode='cover'
      style={styles.favSelImageBackground}
    >
      <ScrollView>
        <View style={styles.favSelMainPlayerView}>
          <View>
            <Image
              style={styles.favSelCoverPhoto}
              source={{ uri: postData.image }}
            />
          </View>

          <View style={styles.favPostTitleContainer}>
            <Text style={styles.favPostTitle}>{postData.title}</Text>
            <Text style={styles.favPostTitleSub}>
              {postData.original_title}
            </Text>
          </View>

          <View style={styles.favPostAboutContainer}>
            <Text style={styles.favPostAbout}>{postData.description}</Text>
          </View>

          <View style={styles.favPostEtc}>
            <Text style={styles.favPost}>Director: {postData.director}</Text>
            <Text style={styles.favPost}>Producer: {postData.producer}</Text>
            <Text style={styles.favPost}>
              Released: {postData.release_date}
            </Text>
            <Text style={styles.favPost}>
              Runtime: {postData.running_time} minutes
            </Text>
            <Text style={styles.favPost}>
              Rating: {postData.rt_score} / 100
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  favSelImageBackground: {
    flex: 1,
  },

  favSelMainPlayerView: {
    alignItems: 'center',
    marginBottom: 40,
  },

  favSelCoverPhoto: {
    width: 250,
    height: 350,
    borderRadius: 10,
    marginTop: 50,
  },

  favPostTitleContainer: {
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

  favPostTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },

  favPostTitleSub: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },

  favPostAboutContainer: {
    width: '75%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
  },

  favPostAbout: {
    fontSize: 23,
    marginTop: 10,
    color: 'white',
  },

  favPostEtc: {
    marginTop: 40,
    alignItems: 'center',
  },

  favPost: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});
