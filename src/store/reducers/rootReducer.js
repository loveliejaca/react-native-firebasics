import authReducer from './authReducer'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import thunk from 'redux-thunk'
import { createFirestoreInstance,reduxFirestore, getFirestore, firestoreReducer } from 'redux-firestore';
import { ReactReduxFirebaseProvider,reactReduxFirebase, getFirebase, firebaseReducer } from 'react-redux-firebase';
import fbConfig from '../../config/fbConfig'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['navigation']
};



const rootReducer = combineReducers({
  authReducer: persistReducer(persistConfig, authReducer),
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore
      })
    ),
    reactReduxFirebase(fbConfig, {
      userProfile: 'users',
      useFirestoreForProfile: true,
      attachAuthIsReady: true,
    }),
    reduxFirestore(fbConfig),
  )
);

export const persistor = persistStore(store);
