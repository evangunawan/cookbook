import React from 'react';
import { Layout, ListItem } from '@ui-kitten/components';
import { global } from '../../styles/global';
import { StyleSheet, Alert } from 'react-native';
import { ProfileBadge } from '../../components/Profile/ProfileBadge';
import Authentication from '../../api/Authentication';
import { getProfileDocument } from '../../api/FirebaseClient';
import MainContext from '../../providers/MainContext';

export default class ProfileScreen extends React.Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);
    state = {
      profile: {},
    };
  }

  componentDidMount() {
    const context = this.context;
    this.setState({ profile: context.profile });
    // console.log(context.profile);
  }

  signOutPrompt() {
    Alert.alert('Sign Out', 'Are you sure?', [
      { text: 'Ok', onPress: () => Authentication.firebaseSignOut() },
      { text: 'Cancel', onPress: () => {} },
    ]);
  }

  render() {
    return (
      <Layout style={[global.container, classes.profileContainer]}>
        <ProfileBadge profile={this.context.profile} />
        <Layout style={classes.profileItems}>
          <ListItem
            title='Open Test'
            style={classes.listItem}
            onPress={() => this.props.navigation.navigate('TestPage')}
          />
          <ListItem
            title='Edit Profile'
            style={classes.listItem}
            onPress={() => this.props.navigation.navigate('EditProfile')}
          />
          <ListItem
            title='LogOut'
            style={classes.listItem}
            titleStyle={{ color: 'red' }}
            onPress={() => this.signOutPrompt()}
          />
        </Layout>
      </Layout>
    );
  }
}

const classes = StyleSheet.create({
  profileContainer: {
    justifyContent: 'flex-start',
    paddingTop: 64,
  },
  profileItems: {
    width: '100%',
  },
  listItem: {
    height: 48,
    borderBottomColor: '#dfdfdf',
    borderBottomWidth: 1,
  },
});
