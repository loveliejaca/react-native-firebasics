const palette = {
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

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.primary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  }
};
