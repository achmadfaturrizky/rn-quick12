import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import Form from './src/screens/Form';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Hello!',
      headerStyle: {
        backgroundColor: '#cecece',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#000',
      },
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail',
      headerStyle: {
        backgroundColor: '#cecece'
      }
    }
  },
  Form: {
    screen: Form
  }
})

export default createAppContainer(AppNavigator);