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
import CalendarDay from './CalendarDay';


const CalendarWeek  = (props) => {
  let days = [];
  let date = props.previousCurrentNextView;
  let currentMonthView = props.currentMonthView;
  let selected = props.selected;
  let select = props.select;
  let monthEvents = props.monthEvents;


  for (let i = 0; i < 7; i++) {
    let dayHasEvents = false;

    for (let j = 0; j < monthEvents.length; j++) {
      if (monthEvents[j].date.isSame(date, "day")) {
        dayHasEvents = true;
      }
    }

    let day = {
      name: date.format("dd").substring(0, 1),
      number: date.date(),
      isCurrentMonth: date.month() === currentMonthView.month(),
      isToday: date.isSame(new Date(), "day"),
      date: date,
      hasEvents: dayHasEvents
    };

    days.push(<CalendarDay day={day} selected={selected} select={select}/>);
    date = date.clone();
    date.add(1, "d");
  }

  return (
    <View style={styles.container}>
      {days}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%'
  },
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


export default CalendarWeek

// export default HomeScreen
