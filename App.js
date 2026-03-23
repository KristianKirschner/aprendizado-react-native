import React, { Component } from "react";
import { View, StyleSheet, Text,  Button, Modal} from "react-native"
import Entrar from './src/Entrar'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false

    };
    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
  }

  entrar(){
    this.setState({
      modalVisible: true,
    })
  }

  sair(status){
    this.setState({
      modalVisible: status
    })
  }


  render() {
    return (
      <View style={styles.container} >
        <Button title="entrar" onPress={this.entrar} />
        <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Entrar fechar={() => {this.sair(false)}} />
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD'
  },
}
);
