import React, { Component } from "react";
import { View, Text,  Button, Modal} from "react-native"

export default class App extends Component {


  render() {
    return (
          <View style={{backgroundColor: '#292929', width:'70%', height: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 15}} >
            <Text style={{color: '#FFF', fontSize: 28}} >Você entrou</Text>
            <Button  title="sair" onPress={this.props.fechar} />
          </View>
    )
  }
}
