/* eslint-disable react/prop-types */
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import LoadingScreen from "../screens/Auth/LoadingScreen";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/App/HomeScreen";
import ProfileScreen from "../screens/App/ProfileScreen";

import React from 'react';
import { Icon } from '@ui-kitten/components';

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  Register: {
    screen: RegistrationScreen
  }
});
const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor})=> {
          let iconName = `home${focused? '' : '-outline'}`;
          return (<Icon name={iconName} width={24} height={24} fill={tintColor}/>)
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({focused,tintColor})=>{
          let iconName = `person${focused ? '' : '-outline'}`;
          return (<Icon name={iconName} width={24} height={24} fill={tintColor}/>)
        }
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true, 
      showLabel: false,
      activeTintColor: '#3366FF',
      inactiveTintColor: '#3366FF',
    }
  }
)

const MainNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  }
)

export default MainNavigator;