import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {
  IntroScreen,
  AuthSignUpScreen,
  AuthLoginScreen,
  HomeScreen
} from '../screens';



const { Navigator, Screen } = createStackNavigator();

const AppStack = props => {

    return (
      <Navigator

        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
        }}
      >
        <Screen
        name="Home"
        component={IntroScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Screen
        name="Login"
        component={AuthLoginScreen}
        options={{
          headerTransparent: true,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Screen
        name="Create Account"
        component={AuthSignUpScreen}
        options={{
          headerTransparent: true,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      
      </Navigator>
    )
}

export default AppStack;
