import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { Text, Button, Layout, Input } from '@ui-kitten/components';
import { global } from '../../styles/global';
import Authentication from '../../api/Authentication';
import LoadingOverlay from '../../components/LoadingOverlay';

export default class RegistrationScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0,
    },
  };

  state = {
    input: {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      cpassword: '',
    },
    error_message: '',
    show_loading: false,
  };

  _setLoading(val) {
    this.setState({ show_loading: val });
  }

  _isInputValid() {
    const { input } = this.state;
    if (
      !(
        input.cpassword &&
        input.email &&
        input.firstname &&
        input.lastname &&
        input.cpassword &&
        input.password
      )
    ) {
      this._setErrorMessage('Please fill all the inputs.');
      return false;
    } else if (input.password != input.cpassword) {
      this._setErrorMessage('Password did not match.');
      return false;
    }
    return true;
  }

  _setErrorMessage(msg) {
    this.setState({ error_message: msg });
  }

  async registerUser() {
    const { input } = this.state;

    const profileData = {
      first_name: input.firstname,
      last_name: input.lastname,
    };

    this._setLoading(true);
    try {
      await Authentication.createNewUser(input.email, input.password, profileData);
      this._setLoading(false);
    } catch (err) {
      this._setErrorMessage(err.message);
      this._setLoading(false);
    }
  }

  componentDidMount() {}

  render() {
    const { email, firstname, lastname, password, cpassword } = this.state.input;

    return (
      <Layout style={[global.container, classes.authWrapper]}>
        {this.state.show_loading ? <LoadingOverlay /> : null}
        <ScrollView>
          <Layout>
            <Text category='h3' style={classes.header}>
              Register
            </Text>

            <Input
              label='First Name'
              placeholder='John'
              textContentType='name'
              value={firstname}
              onChangeText={(text) => {
                this.setState({
                  input: { ...this.state.input, firstname: text },
                });
              }}
            />
            <Input
              label='Last Name'
              placeholder='Doe'
              textContentType='name'
              value={lastname}
              onChangeText={(text) => {
                this.setState({ input: { ...this.state.input, lastname: text } });
              }}
            />

            <Input
              label='Email'
              placeholder='john.doe@example.com'
              textContentType='emailAddress'
              autoCapitalize='none'
              value={email}
              onChangeText={(text) => {
                this.setState({ input: { ...this.state.input, email: text } });
              }}
            />

            <Input
              textContentType='password'
              value={password}
              onChangeText={(text) => {
                this.setState({ input: { ...this.state.input, password: text } });
              }}
              label='Password'
              placeholder='Your secret key'
              secureTextEntry={true}
            />
            <Input
              textContentType='password'
              label='Confirm Password'
              placeholder='Confirm your password'
              value={cpassword}
              onChangeText={(text) => {
                this.setState({
                  input: { ...this.state.input, cpassword: text },
                });
              }}
              secureTextEntry={true}
            />
            <Button
              style={global.fullButton}
              onPress={() => {
                if (this._isInputValid()) {
                  this.registerUser();
                } else {
                }
              }}>
              CONTINUE
            </Button>
            {this.state.error_message ? (
              <Text style={classes.errorText}>{this.state.error_message}</Text>
            ) : null}
          </Layout>
          <Layout style={{ height: 100 }} />
        </ScrollView>
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
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
  },
});
