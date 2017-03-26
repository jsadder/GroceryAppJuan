/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//Imports
import React, {Component} from 'react';
import ReactNative from 'react-native';
import { AppRegistry, Text, ListView, View } from 'react-native';
import * as firebase from 'firebase';
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const styles = require('./styles.js');



// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAeFTCkxY-fMQnFTzXgnVW4KtuJub6JxAM",
    authDomain: "gafb-9b043.firebaseapp.com",
    databaseURL: "https://gafb-9b043.firebaseio.com",
    storageBucket: "gafb-9b043.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


class GroceryApp extends Component 
{
	_renderItem(item) {
	    return (
	      <ListItem item={item} onPress={() => console.log("ListItem tapped!")} />
	    );
	  }

	  render() {
	    return (
	      <View style={styles.container}>

	        <StatusBar title="Grocery List"/>

	        <ListView datasource={this.state.dataSource}
			renderrow={this._renderItem.bind(this)}
			style={styles.listview} />

	        <ActionButton title="Add" onPress={() => console.log("Button tapped!")} />

	      </View>
	    );
	  }
	  
	//constructor for the root component, GroceryApp. 
	  constructor(props) {
	    super(props);
	    this.state = {
	      dataSource: new ListView.DataSource({
	        rowHasChanged: (row1, row2) => row1 !== row2,
	      })
	    };
	  }
	  
	//When the component has first been rendered, componentDidMount() is called. This is where we want set any initial state of the app.  
	  componentDidMount() {
	      this.setState({
	        dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
	      })
	    }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
