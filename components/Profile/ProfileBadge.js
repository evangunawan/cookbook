import React, { useState } from 'react';
import { Layout, Avatar, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const ProfileBadge = (props) => {
  return (
    <Layout style={classes.wrapper}>
      <Avatar
        style={classes.avatar}
        shape='round'
        width={96}
        height={96}
        source={{
          uri:
            'https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/brand-logo.a78e4b51.png',
        }}
      />
      <Layout style={classes.profileBadge}>
        <Layout style={classes.badgeItem}>
          <Text category='h6'>Followers</Text>
          <Text style={{ textAlign: 'center' }}>10</Text>
        </Layout>
        <Layout style={classes.badgeItem}>
          <Text category='h6'>Followers</Text>
          <Text style={{ textAlign: 'center' }}>0</Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

const classes = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileBadge: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  badgeItem: {
    marginHorizontal: 16,
    marginVertical: 32,
  },
});
