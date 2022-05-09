import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import quoteA from '../assets/profile/quoteA.png';
import quoteB from '../assets/profile/quoteB.png';
import quoteC from '../assets/profile/quoteC.png';
import quoteD from '../assets/profile/quoteD.png';
import quoteE from '../assets/profile/quoteE.png';
import quoteF from '../assets/profile/quoteF.png';
import quoteG from '../assets/profile/quoteG.png';
import quoteH from '../assets/profile/quoteH.png';
import quoteI from '../assets/profile/quoteI.png';
import quoteJ from '../assets/profile/quoteJ.png';
import quoteK from '../assets/profile/quoteK.png';
import quoteL from '../assets/profile/quoteL.png';
import quoteM from '../assets/profile/quoteM.png';
import profileA from '../assets/profile/profileA.jpg';
import profileB from '../assets/profile/profileB.jpg';
import profileC from '../assets/profile/profileC.png';
import profileD from '../assets/profile/profileD.jpg';
import profileE from '../assets/profile/profileE.jpg';
import profileF from '../assets/profile/profileF.jpg';
import profileG from '../assets/profile/profileG.jpg';
import profileH from '../assets/profile/profileH.jpg';
import profileI from '../assets/profile/profileI.jpg';
import profileJ from '../assets/profile/profileJ.jpg';
import profileK from '../assets/profile/profileK.jpg';
import profileL from '../assets/profile/profileL.png';
import profileM from '../assets/profile/profileM.jpg';

export default function Quote() {
  const quotes = [
    quoteA,
    quoteB,
    quoteC,
    quoteD,
    quoteE,
    quoteF,
    quoteG,
    quoteH,
    quoteI,
    quoteJ,
    quoteK,
    quoteL,
    quoteM,
  ];

  const background = [
    profileA,
    profileB,
    profileC,
    profileD,
    profileE,
    profileF,
    profileG,
    profileH,
    profileI,
    profileJ,
    profileK,
    profileL,
    profileM,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState('');

  useEffect(() => changeImage(), []);

  const changeImage = () => {
    setCurrentImageIndex(Math.floor(Math.random() * quotes.length));
  };

  return (
    <ImageBackground
      source={background[currentImageIndex]}
      resizeMode='cover'
      style={styles.quoteImageBackground}
    >
      <View style={styles.quoteDescriptionContainer}>
        <TouchableOpacity onPress={changeImage} style={styles.button}>
          <Image
            source={quotes[currentImageIndex]}
            style={styles.quoteImageDescription}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  quoteImageBackground: {
    flex: 1,
  },

  quoteDescriptionContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 140,
  },

  quoteImageDescription: {
    width: 350,
    height: 250,
    borderRadius: 20,
  },
});
