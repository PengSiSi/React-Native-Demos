/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationIOS
} from 'react-native';

import DialogView from './App/Components/DialogView';
import CarouselDemo from './App/Components/CarouselDemo';

// export default class DialogDemo extends Component {

  /**
   * Creates an instance of DialogDemo.
   * @param {any} props 
   * @memberof DialogDemo
   * constructor(props) {
    super(props);
    this.state = {
      visible: false,
      show: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.modalAction.bind(this)}>
          点击弹出DialogView
        </Text>
        <Text style={styles.welcome} onPress={this.modalAction1.bind(this)}>
          跳转
        </Text>
        <DialogView isShow = {this.state.visible} title={"已同意审核请求"}
                    imageName = {require('./App/imgs/account.png')}
                    onPress = {this.sureAction.bind(this)} >
        </DialogView>
      </View>
    );
  }

  sureAction() {
    // alert('确定');
    this.setState({
      visible: !this.state.visible,
    })
  }

  cancleAction() {
    show: !this.state.show    
  }

  modalAction() {
    // alert('弹出');
    this.setState({
      visible: !this.state.visible
    })
  }

  modalAction1() {
    // alert('弹出');
    this.setState({
      show: !this.state.show
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
   */

AppRegistry.registerComponent('DialogDemo', () => CarouselDemo);
