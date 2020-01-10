import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Text, Button, Layout, Input } from '@ui-kitten/components';
import { global } from '../../styles/global';
import Authentication from '../../api/Authentication';

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
  };

  registerUser() {
    const { input } = this.state;
    Authentication.createNewUser(input.email, input.password);
  }

  componentDidMount() {}

  render() {
    const { email, firstname, lastname, password, cpassword } = this.state.input;

    return (
      <KeyboardAvoidingView style={classes.keyAvoidView} behavior='padding'>
        <Layout style={[global.containerCenter, classes.authWrapper]}>
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
              this.registerUser();
            }}>
            CONTINUE
          </Button>
        </Layout>
        <Layout style={{ height: 100 }} />
      </KeyboardAvoidingView>
    );
  }
}

const classes = StyleSheet.create({
  authWrapper: {
    paddingHorizontal: 32,
  },
  keyAvoidView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    margin: 8,
  },
});
