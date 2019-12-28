import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Layout, Text, Input, Icon } from '@ui-kitten/components';
import * as Google from 'expo-google-app-auth';

const GoogleIcon = (style)=>(<Icon {...style} name='google'/>)

export default class LoginScreen extends React.Component {
  
  state= { 
    input_email: '',
    input_password: '',
    user: null,
  }

  componentDidMount(){
  }

  async googleSignIn(){
    try {
      const result = await Google.logInAsync({
        androidClientId: '1047920724345-8fo7hc4s5gim04vdonqejv6ggfr8mpg6.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        console.log('GOOGLE: ' + result.accessToken);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }


  render(){
    const { input_email, input_password } = this.state;

    return(
      <Layout style={classes.container}>
        <Text category="h3" style={classes.header}>Welcome</Text>
        <Input 
          label="Email" 
          placeholder="john.doe@example.com"
          textContentType="emailAddress"
          autoCapitalize="none"
          value={input_email} 
          onChangeText={(text)=>{this.setState({input_email: text})}}
        />
        <Input
          value={input_password}
          onChangeText={(text)=>{this.setState({input_password: text})}}
          label="Password"
          placeholder="Your secret key"
          secureTextEntry={true}
        />
        <Button style={classes.loginButton}>SIGN IN</Button>
        <Text style={classes.textDivider}>OR</Text>
        <Button 
          style={[classes.loginButton, classes.googleButton]} 
          appearance="outline" 
          icon={GoogleIcon}
          onPress={()=>{this.googleSignIn()}}
        >
            SIGN IN WITH GOOGLE
        </Button>
      </Layout>
    )
  }
}

const classes = StyleSheet.create({
  centerBox : {

  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  header:{
    margin: 8,
  },
  loginButton: {
    alignSelf: 'stretch',
    marginVertical: 8,
  },
  textDivider: {
    marginVertical: 4,
    color: '#aaa',
  },
  googleButton: {

  }
});