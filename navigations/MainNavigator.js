/* eslint-disable react/prop-types */
import { createSwitchNavigator, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import LoadingScreen from '../screens/Auth/LoadingScreen';
import RegistrationScreen from '../screens/Auth/RegistrationScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/App/HomeScreen';
import ProfileScreen from '../screens/App/ProfileScreen';

import React from 'react';
import { Icon } from '@ui-kitten/components';

import { Colors } from '../styles/theme';
import DashboardScreen from '../screens/DashboardScreen';
import EditProfileScreen from '../screens/App/EditProfileScreen';
import CreateRecipeScreen from '../screens/App/Recipe/CreateRecipeScreen';

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegistrationScreen,
  },
});

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let iconName = `home${focused ? '' : '-outline'}`;
          return <Icon name={iconName} width={24} height={24} fill={tintColor} />;
        },
      },
    },
    CreateRecipe: {
      screen: CreateRecipeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name='plus' width={24} height={24} fill={tintColor} />
        ),
        tabBarVisible: false,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let iconName = `person${focused ? '' : '-outline'}`;
          return <Icon name={iconName} width={24} height={24} fill={tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.primary,
    },
    resetOnBlur: true,
  }
);

const AppStack = createStackNavigator(
  {
    MainTabs: {
      screen: TabStack,
      navigationOptions: {
        header: null,
      },
    },
    TestPage: {
      screen: DashboardScreen,
      navigationOptions: {
        title: 'Test Page',
      },
    },
    EditProfile: {
      screen: EditProfileScreen,
      navigationOptions: {
        title: 'Edit Profile',
      },
    },
  },
  {
    defaultNavigationOptions: {
      //Temporary fix.
      headerStyle: {
        marginTop: -24,
      },
    },
  }
);

const MainNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default MainNavigator;
