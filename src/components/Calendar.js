import React, { useEffect,useState } from 'react';
import moment from "moment";
import SelectDropdown from 'react-native-select-dropdown'

import {globalPallete} from '../styles/global'

import {
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Button,
  View,
  Text,
  Animated,
  Easing,
  Picker,
  StyleSheet,
  ImageBackground } from 'react-native';

import CalendarWeek from './CalendarWeek';

const Calendar  = (props) => {

  const [state, setState] = useState({
    selectedMonthEvents: [],
    dateObject: moment(),
    selectedWeek:  moment().startOf("week").day("Sunday"),
    allmonths: moment.months(),
    selectedDay: moment().startOf("day"),
    currentDay: moment().startOf("day"),
    showEvents: false
  });
  const [yearList, setYearList] = useState([])

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    let yearTemp = []
    for (var i = 0; i < 10; i++) {
      yearTemp.push(currentYear + i);
    }

    setYearList(yearTemp)

  }, [])

  function handleChangeYear(e) {

  }

  const select = (day) => {
    setState({
      ...state,
      selectedMonth: day.date,
      selectedDay: day.date.clone()
    });

    props.getSelectedDateEvents(day.date.toDate())
  }

  const renderWeeks = () => {
    const currentMonthView = state.dateObject;
    const currentSelectedDay = state.selectedDay;
    const monthEvents = state.selectedMonthEvents;

    let weeks = [];
    let done = false;
    let counter = 1;
    let previousCurrentNextView = currentMonthView
      .clone()
      .startOf("month")
      .subtract(1, "d")
      .day("Sunday");
    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while (!done) {
      weeks.push(
        <CalendarWeek
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={currentMonthView}
          monthEvents={monthEvents}
          selected={currentSelectedDay}
          select={day => select(day)}
        />
      );
      counter++;
      previousCurrentNextView.add(1, "w");
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
    }
    return weeks;
  }


  return (
    <View style={styles.container}>
      <View style={styles.calendarHead}>
        <SelectDropdown
        data={yearList}
        onSelect={(selectedItem, index) => {
          console.log('---------selected',selectedItem, index)
        }}
        buttonStyle = {{
          backgroundColor: '#3e4048',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        buttonTextStyle = {{
          color: '#fff',
          textAlign: 'left',
          fontSize: 18,
          fontFamily: 'Montserrat-SemiBold',
        }}
        defaultButtonText = {new Date().getFullYear()}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
        />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.calendarTxtToday}>{moment().format('ddd, MMMM DD')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calendarTop}></View>
      <View style={styles.calendarDayName}>
        <View style={styles.calendarNameTd}>
          <Text style={styles.calendarTdTxt}>Sun</Text>
        </View>
        <View style={styles.calendarNameTd}>
          <Text style={styles.calendarTdTxt}>Mon</Text>
        </View>
        <View style={styles.calendarNameTd}>
          <Text style={styles.calendarTdTxt}>Tue</Text>
        </View>
        <View style={styles.calendarNameTd}>
          <Text style={styles.calendarTdTxt}>Wed</Text>
        </View>
        <View style={styles.calendarNameTd}>
          <Text style={styles.calendarTdTxt}>Thu</Text>
        </View>
        <View style={styles.calendarNameTd}>
          <Text style={styles.calendarTdTxt}>Fri</Text>
        </View>
        <View style={styles.calendarNameTd}>
          <Text style={styles.calendarTdTxt}>Sat</Text>
        </View>
      </View>
      <View>
        {renderWeeks()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    backgroundColor: '#c6c5c9',
    borderRadius: 10
  },

  calendarHead: {
    height: 80,
    width: '100%',
    backgroundColor: '#3e4048',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  calendarTxtToday: {
    color: globalPallete.aquaish4,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: -15,
    padding: 10
  },
  calendarPicker: {
    color: '#fff',
    fontSize: 29,
    fontFamily: 'Montserrat-Regular',
    width: 150,
    backgroundColor: 'pink',
    height: 20
  },
  calendarDayName: {
    width: '100%',
    flexDirection: 'row'
  },
  calendarNameTd: {
    width: '14.2857142857%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: "#a8a7ad",
    borderRightWidth: 1,
    borderTopColor: "#a8a7ad",
    borderTopWidth: 1
  },
  'calendarNameTd:last-child': {
    borderRightWidth: 0
  },
  calendarTdTxt: {
    color: globalPallete.black,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15
  },
  calendarTop: {
    height: 40
  },
})

export default Calendar
