import React from 'react';
import { View, Text } from 'react-native';
import * as SecureStorage from 'expo-secure-store';
import * as Google from 'expo-google-app-auth';

export default class DashboardScreen extends React.Component {
  getCredentials() {}

  componentDidMount() {
    this.getCredentials();
  }

  render() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}
