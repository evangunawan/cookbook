import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Button, Layout, Text, Input, Icon } from '@ui-kitten/components';
import * as Google from 'expo-google-app-auth';
import Authentication from '../../api/Authentication';

import { global } from '../../styles/global';
import LoadingOverlay from '../../components/LoadingOverlay';

const GoogleIcon = (style) => <Icon {...style} name='google' />;

export default class LoginScreen extends React.Component {
  state = {
    input_email: '',
    input_password: '',
    user: null,
    show_loading: false,
  };

  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Setting a timer'];
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.showLoading(false);
  }

  showLoading(val) {
    this.setState({ show_loading: val });
  }

  async emailSignIn() {
    const { input_email, input_password } = this.state;
    this.showLoading(true);
    try {
      await Authentication.firebaseEmailAuth(input_email, input_password);
    } catch (err) {
      console.log(err);
      this.showLoading(false);
    }
    this.showLoading(false);
  }

  async googleSignIn() {
    this.showLoading(true);
    try {
      const result = await Google.logInAsync({
        androidClientId:
          '1047920724345-843japfvqc5aqj4a61li9ftioqhv1gdv.apps.googleusercontent.com',
        androidStandaloneAppClientId:
          '1047920724345-uvc5rbk3ml4ap9miqnpf82i9kk7fjta1.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        await Authentication.firebaseGoogleAuth(result);
      } else {
        this.showLoading(false);
      }
      return result.accessToken;
    } catch (e) {
      this.showLoading(false);
      return { error: true };
    }
  }

  render() {
    const { input_email, input_password, show_loading } = this.state;

    return (
      <Layout style={[global.containerCenter, classes.authWrapper]}>
        {show_loading ? <LoadingOverlay /> : null}
        <Text category='h3' style={classes.header}>
          Welcome
        </Text>
        <Input
          label='Email'
          placeholder='john.doe@example.com'
          textContentType='emailAddress'
          autoCapitalize='none'
          value={input_email}
          onChangeText={(text) => {
            this.setState({ input_email: text });
          }}
        />
        <Input
          value={input_password}
          onChangeText={(text) => {
            this.setState({ input_password: text });
          }}
          label='Password'
          placeholder='Your secret key'
          secureTextEntry={true}
        />
        <Button
          style={global.fullButton}
          onPress={() => {
            this.emailSignIn();
          }}>
          SIGN IN
        </Button>
        <Text style={classes.textDivider}>OR</Text>
        <Button
          style={[global.fullButton, classes.googleButton]}
          appearance='outline'
          icon={GoogleIcon}
          onPress={() => {
            this.googleSignIn();
          }}>
          SIGN IN WITH GOOGLE
        </Button>
        <Text style={classes.textDivider}>Do not have an account?</Text>
        <Button
          style={global.fullButton}
          appearance='ghost'
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}>
          Register
        </Button>
      </Layout>
    );
  }
}

const classes = StyleSheet.create({
  authWrapper: {
    paddingHorizontal: 32,
  },
  header: {
    margin: 8,
  },
  textDivider: {
    marginVertical: 4,
    color: '#aaa',
  },
  googleButton: {},
});
