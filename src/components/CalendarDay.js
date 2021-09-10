import React, { useEffect } from 'react';

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


const CalendarDay  = (props) => {
  let day = props.day;
  let selected = props.selected;
  let select = props.select;

  let classToday = day.isToday ? styles.isToday : '';
  let classCurrentMonth = day.isCurrentMonth ? '': styles.isOtherMonth;
  let classSelected = day.date.isSame(selected) ? styles.isSelected : '';

  return (
    <View style={[styles.calendarTd, classCurrentMonth, classSelected, classToday]} onPress={select(day)}>
      <Text style={styles.calendarDay}>{day}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  calendarTd: {
    width: '14.2857142857%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: "#a8a7ad",
    borderRightWidth: 1,
    borderTopColor: "#a8a7ad",
    borderTopWidth: 1
  },
  calendarDay: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: globalPallete.black,
  },
  isOtherMonth: {
    opacity: 0.5
  },
  isToday: {
    color: globalPallete.aquaish4,
    fontWeight: 'bold'
  },

  isSelected: {
    color: globalPallete.aquaish4,
    fontWeight: 'bold'
  },
})


export default CalendarDay
