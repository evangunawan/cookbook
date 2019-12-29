import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default class LoadingScreen extends React.Component {

  componentDidMount(){
    // this.checkAuth();
    this.props.navigation.navigate('Auth');
  }

  async checkAuth(){
    const isAuthed = await SecureStore.getItemAsync('google_access_token') || '';
    if(isAuthed){
      console.log('got access token: ' + isAuthed);
      this.props.navigation.navigate('Dashboard');
    }else {
      console.log('did not got auth');
      this.props.navigation.navigate('Auth');
    }
  }

  render() {
    return(
      <View style={classes.center}>

      </View>
    )
  }
}

const classes = StyleSheet.create({
  'center': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
})