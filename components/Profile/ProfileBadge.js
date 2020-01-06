import React, { useState } from 'react';
import { Layout, Avatar, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const ProfileBadge = (props) => {
  const profile = props.profile;
  return (
    <Layout style={classes.wrapper}>
      <Avatar
        style={classes.avatar}
        shape='round'
        height={82}
        width={82}
        source={{ uri: profile.photoURL }}
      />
      <Text category='h4'>{`${profile.first_name} ${profile.last_name}`}</Text>
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
  avatar: {
    borderRadius: 128,
    marginBottom: 24,
  },
});
