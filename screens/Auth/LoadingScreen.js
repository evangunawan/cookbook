import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import firebase from 'firebase';
import '@firebase/auth';
import { SplashScreen } from 'expo';
import MainContext from '../../providers/MainContext';
import { getProfileDocument } from '../../api/FirebaseClient';

export default class LoadingScreen extends React.Component {
  static contextType = MainContext;
  state = {
    profile: null,
  };

  componentDidMount() {
    SplashScreen.preventAutoHide();
    this._checkAuth();
  }

  componentWillUnmount() {
    SplashScreen.hide();
  }

  _checkAuth() {
    const context = this.context;
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        console.log('DEBUG: onAuthStateChanged called');
        const dbProfile = await getProfileDocument(user.uid);
        context.setProfile(dbProfile);
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
  }

  render() {
    return <Layout />;
  }
}

const classes = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
