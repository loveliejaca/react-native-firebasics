import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#f9f7fe'
  },
  headingText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
  },
  pText: {
    lineHeight: 20,
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
  }
})

export const globalPallete = {
  primary: '#f3f1f6',
  black: '#141827',
  white: '#ffffff',

  redish1: '#b5155c',
  redish2: '#e81f78',
  redish3: '#e71f76',
  redish4: '#ff4c9c',


  yellowish1: '#fec295',
  yellowish2: '#fedf93',
  yellowish3: '#feeca5',
  yellowish4: '#fefec0',


  aquaish1: '#03af9d',
  aquaish2: '#08d3be',
  aquaish3: '#05e2c9',
  aquaish4: '#02f6d8',

  blueish1: '#1488bb',
  blueish2: '#26a6dc',
  blueish3: '#7ccef0',

  moon1: '#f6f6f6',
  moon2: '#c6c5c9',

  pinkish1: '#ff8c9e',
  pinkish2: '#fdcfd7',

}
