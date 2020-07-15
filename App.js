import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';


import { NavigationContainer,createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppSwitchNavigator = createSwitchNavigator({
  Signup:Signup,
  Login:Login,
  Dashboard:Dashboard
});

const AppNavigator = createAppContainer(AppSwitchNavigator);
 name="Signup" 

export default class App extends React.Component {
  render (){
    return <AppNavigator/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
