import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { global } from '../../styles/global';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Layout style={global.containerCenter}>
        <Text>Home Page</Text>
      </Layout>
    );
  }
}
