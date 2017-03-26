/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAeFTCkxY-fMQnFTzXgnVW4KtuJub6JxAM",
    authDomain: "gafb-9b043.firebaseapp.com",
    databaseURL: "https://gafb-9b043.firebaseio.com",
    storageBucket: "gafb-9b043.appspot.com",,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class GroceryApp extends Component {
  render() {
    return (
		<View style="{styles.container}">
			I’m a container lol!
		</View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
});

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
