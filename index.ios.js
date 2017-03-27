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
	      <ListItem item={item}
                    onPress={() => console.log("ListItem tapped!")} />
	    );
	  }

	  render() {
	    return (
	      <View style={styles.container}>

	        <StatusBar title="Grocery List ONE"/>

	        <ListView dataSource={this.state.dataSource}
			renderRow={this._renderItem.bind(this)}
			style={styles.listview} />

              <ActionButton title="Add" onpress={this._addItem.bind(this)}>
              </ActionButton>

	      </View>
	    );
	  }

    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {

            // get children as an array
            var items = [];
            snap.forEach((child) => {
                items.push({
                    title: child.val().title,
                    _key: child.key
                });
            });

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            });

        });
    }

    //When the ActionButton is tapped, an alert should pop up
    //prompting the user to enter an item.
    _addItem() {
        AlertIOS.prompt(
            'Add New Item',
            null,
            [
                {
                    text: 'Add',
                    onPress: (text) => {
                        this.itemsRef.push({ title: text })
                    }
                },
            ],
            'plain-text'
        );
    }
	  
	//constructor for the root component, GroceryApp. 
	  constructor(props) {
	    super(props);
	    this.state = {
	      dataSource: new ListView.DataSource({
	        rowHasChanged: (row1, row2) => row1 !== row2
	      })
	    };
	    this.itemsRef = firebaseApp.database().ref();
	  }

    componentDidMount() {
        this.listenForItems(this.itemsRef);
    }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
