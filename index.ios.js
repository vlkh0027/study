

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './components/App';

export default class LiveStreamingSoccer extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('LiveStreamingSoccer', () => LiveStreamingSoccer);
