import React, { Component } from 'react';
import { View } from 'native-base';
import { Provider } from 'react-redux';
// import { StyleSheet, Text } from 'react-native';
import { store } from './store';
import Navigator from './Navigation';
import { setLocalNotification } from './utils/notifications';

export default class App extends Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, paddingTop: 22 }}>
          <Navigator />
        </View>
      </Provider>
    )
  }
  
}
