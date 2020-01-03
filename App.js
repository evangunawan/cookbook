import React from 'react';
import firebase from 'firebase';
import { createAppContainer } from 'react-navigation';
import { firebaseConfig } from './config/Firebase';
import MainNavigator from './navigations/MainNavigator';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const RoutedApp = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <RoutedApp />
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}
