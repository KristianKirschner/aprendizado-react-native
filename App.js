import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Modal, Image, TextInput, TouchableOpacity } from "react-native"
import Calculo from './src/components/Calculo'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      valorgasolina: 7.3,
      valoralcool: 4.6,
      recomendacao: '',
      modalVisible: false
    }
    this.sair = this.sair.bind(this)
    this.calculo = this.calculo.bind(this)
  }

  sair(status){
    this.setState({
      modalVisible: status
    })
  }

  calculo(){
    let divisao = this.state.valoralcool / this.state.valorgasolina
    if (divisao < 0.7) {
      this.setState({
        recomendacao: 'Álcool'
      })
    } else{
      this.setState({
        recomendacao: 'Gasolina'
      })
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <Image source={require('./src/images/logo.png')} />
        <Text style={styles.textLogo} >Qual melhor opção?</Text>

        <View style={styles.inputs} >
          <Text style={styles.text} >Álcool (preço por litro)</Text>
          <TextInput onChangeText={(valor) => {this.setState({valoralcool: valor})}} style={styles.inputText} />      
          <Text style={styles.text}>Gasolina (preço por litro)</Text>
          <TextInput onChangeText={(valor) => {this.setState({valorgasolina: valor})}} style={styles.inputText} />
          <TouchableOpacity onPress={() => this.setState({modalVisible: true}, this.calculo())} style={styles.btn} >
            <Text style={styles.btnText} >Calcular</Text>
          </TouchableOpacity>
        </View>

        <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Calculo valorgasolina={this.state.valorgasolina} valoralcool={this.state.valoralcool} decisao={this.state.recomendacao} fechar={ () => this.sair(false)  } />
          </View>
        </Modal>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLogo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFF',
    marginTop: 20
  },
  inputs: {
    marginTop: 60,
    width: '90%',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  inputText: {
    height: 35,
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 5,
    padding: 0,
    paddingLeft: 15,
    alignItems: 'center',
    fontSize: 20,
    color: 'black'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
  btn: {
    width: '100%',
    backgroundColor: '#FF512E',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
    marginTop: 10
  }


}
);
