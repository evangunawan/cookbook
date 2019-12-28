import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class LoadingScreen extends React.Component {

  componentDidMount(){
    this.checkAuth();
  }

  async checkAuth(){
    //TODO: check auth from firebase.
    this.props.navigation.navigate('Auth');
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