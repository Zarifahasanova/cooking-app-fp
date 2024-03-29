// components/dashboard.js

import React, { Component } from 'react';
import styles from './styles';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../../data/firebase';

export default class Dashboard extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('title')
        };
      };
    
    
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}
