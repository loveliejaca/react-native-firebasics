import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native'
import { connect, useSelector } from 'react-redux'
import moment from 'moment'

import {globalStyles, globalPallete} from '../styles/global'


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

import Calendar from '../components/Calendar';

const HomeScreen  = (props) => {
  const currentUser = useSelector((state) => state.firebase.auth)
  const [selectedDate, setSelectedDate] = useState(moment().toDate())

  function getSelectedDateEvents(date = moment().toDate()) {
    setSelectedDate(date)
  }

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      console.log('Refreshed!');
    });
    return unsubscribe;
  }, [props.navigation]);

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <ImageBackground
        style={globalStyles.backgroundImage}
        source={require('../assets/images/space-bg.png')}
      />
        <View style={styles.innerContainer}>
          <Text style={styles.txtWelcome}>Welcome {currentUser.displayName}</Text>
          <Text style={styles.txtHeading}>Schedule</Text>

          <Calendar getSelectedDateEvents={getSelectedDateEvents}/>
        </View>




    </ScrollView>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    padding: 12,
    paddingTop: 30,
    width: '100%',
    height: '100%',
  },
  txtWelcome: {
    color: globalPallete.white,
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    textTransform: 'uppercase',
  },
  txtHeading: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10
  },
})


export default connect(null, null)(HomeScreen)

// export default HomeScreen
