import React from 'react';
import { Layout, Avatar, Text, ListItem, Input } from '@ui-kitten/components';
import { StyleSheet, Image } from 'react-native';
import { global } from '../../styles/global';

const EditAvatar = (props) => {
  return (
    <Layout style={classes.avatarEdit}>
      <Image
        source={{ uri: 'https://gamepedia.cursecdn.com/dota2_gamepedia/a/aa/Slark_icon.png' }}
        style={(global.backgroundImage, classes.avatarImage)}
      />
      <Layout style={classes.avatarCover}>
        <Text style={{ color: 'white' }}>Edit</Text>
      </Layout>
    </Layout>
  );
};

const EditProfileScreen = (props) => {
  return (
    <Layout style={classes.formContainer}>
      <EditAvatar />
      <Layout style={classes.inputContainer}>
        <Layout style={{ flexDirection: 'row' }}>
          <Input style={classes.fullInput} label='First Name' />
          <Input style={classes.fullInput} label='Last Name' />
        </Layout>
        <Input style={classes.fullInput} label='Bio' />
      </Layout>
    </Layout>
  );
};

const classes = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatarEdit: {
    marginVertical: 64,
  },
  avatarCover: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 96,
    height: 96,
    borderRadius: 128,
  },
  avatarImage: {
    borderRadius: 128,
    height: 96,
    width: 96,
  },
  fullInput: {
    flex: 1,
    margin: 8,
  },
});

export default EditProfileScreen;
