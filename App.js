import React, { Component } from "react";
import {View, StyleSheet, Text, Switch } from 'react-native'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      status: false
    }
  }


  render(){

    return(
      <View style={styles.container} >
        <Switch 
          value={this.state.status}
          onValueChange={(valorSelecionado) => this.setState({status: valorSelecionado}) }
          thumbColor='black'
        />
        <Text style={{textAlign: 'center', fontSize: 40}} >
          {(this.state.status) ? "True" : "False"}
        </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
