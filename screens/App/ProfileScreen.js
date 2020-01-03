import React from 'react';
import { Layout, ListItem } from '@ui-kitten/components';
import { global } from '../../styles/global';
import { StyleSheet, Alert } from 'react-native';
import { ProfileBadge } from '../../components/Profile/ProfileBadge';
import Authentication from '../../providers/Authentication';
import { getProfileDocument } from '../../api/FirebaseClient';

export default class ProfileScreen extends React.Component {
  componentDidMount() {
    this.getProfileData();
  }

  async getProfileData() {
    const userId = await Authentication.getActiveUser();

    // const data = await getProfileDocument();
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
        <ProfileBadge />
        <Layout style={classes.profileItems}>
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
