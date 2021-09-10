import React, { useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppStack from './src/navigation/appstack'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import {store, persistor} from './src/store/reducers/rootReducer'

import { Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = props => {
  const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
          <AppStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
