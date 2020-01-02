import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { Text } from '@ui-kitten/components';
import firebase from 'firebase';
import '@firebase/auth';
import { SplashScreen } from 'expo';

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    SplashScreen.preventAutoHide();
    this.checkAuth();
  }

  componentWillUnmount() {
    SplashScreen.hide();
  }

  async checkAuth() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
  }

  render() {
    return <View style={classes.center}></View>;
  }
}

const classes = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
