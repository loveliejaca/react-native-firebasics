import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native'
import {
  ScrollView,
  TouchableWithoutFeedback,
  StatusBar,
  Image,
  Button,
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  ImageBackground } from 'react-native';

import {globalStyles, globalPallete} from '../styles/global'

const IntroScreen  = ({ navigation }) => {

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('-----Refreshed!----');
    });
    return unsubscribe;
  }, [navigation]);


  let animatedValue = new Animated.Value(0);

    Animated.loop(
      Animated.timing(
        animatedValue,
        {
          toValue: 1,
          duration: 80000,
          easing: Easing.linear,
          useNativeDriver: true
        }
      )
    ).start();

  const rotate = animatedValue.interpolate({
       inputRange: [0, 1],
       outputRange: ['0deg', '360deg']
      })

  return (
    <View style={styles.container}>
      <ImageBackground
        style={globalStyles.backgroundImage}
        source={require('../assets/images/space-bg.png')}
      />
      <LottieView
        autoPlay
        loop
        source={require('../assets/json/spaceman.json')}
        style={{
          height: 120,
          width: 120,
          top: -10
        }}
      />

      <LottieView
        autoPlay
        loop
        source={require('../assets/json/wave-white.json')}
        style={{
          position: 'absolute',
          height: 400,
          left: 0,
          bottom: 0
        }}
      />
      <Animated.Image
        style={{
          transform: [{ rotate: rotate }],
          resizeMode: "contain",
          height: 300,
          width: 300,
          top: -50,

        }}
        source={require('../assets/images/moon.png')}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Planner</Text>
        <Text style={styles.subTitle}>Mood your self with a Planner!</Text>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')} >
          <Text style={styles.titleLink}>Lets Get Started!</Text>
        </TouchableWithoutFeedback>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: null,
    height: null,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    backgroundColor: '#f9f7fe'

  },
  titleContainer: {
    padding: 20,
    marginTop: 70,
    width:' 100%',
    alignItems: 'flex-start',
  },

  title: {
    fontFamily: 'NunitoBlack',
    fontSize: 40,
  },
  subTitle: {
    fontFamily: 'NunitoLight',
    fontSize: 18,
    marginBottom: 10
  },

  titleLink: {
    fontFamily: 'NunitoBold',
    fontSize: 25,
    color: '#efad1a',
    borderColor: 'transparent',
    borderBottomColor: '#efad1a',
    borderWidth: 1,
  },

  bottomContainer: {
    backgroundColor: '#c7cad8',
    paddingTop: 35,
    width: '100%',
    height: '25%',
    bottom: 0,
    left: 0,
  },
  accentBottomContainer: {
    height: '40%',
    top: undefined,
    width: '100%'
  },
  innerBottomContainer: {
    height: '60%',
    width: '100%',
    backgroundColor: globalPallete.white
  },
  btn: {
    marginVertical: 10,
    backgroundColor: 'rgba(81,135,185,1)',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  bigBlue: {
     color: 'blue',
     fontWeight: 'bold',
     fontSize: 30,
   },
})


export default IntroScreen
