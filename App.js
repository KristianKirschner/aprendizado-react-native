import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      nome: 'Kristian'

    };

    this.gravaNome = this.gravaNome.bind(this)
  }

  gravaNome(){
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com sucesso');
    Keyboard.dismiss();
  }

  // Quando o componente é montado na tela
  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((valor)=> {
      this.setState({
        nome: valor
      })
    })
  }

  // Quando um state é atualizado fazer algo...
  async componentDidUpdate(_, prevState){
    const nome = this.state.nome;
    if (prevState !== this.state){
    await  AsyncStorage.setItem('nome', nome)
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.viewInput} >
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={(valor) => this.setState({input: valor})}
            underlineColorAndroid="transparent"
            />

          <TouchableOpacity onPress={this.gravaNome} >
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>

        </View>
        <Text>{this.state.nome} </Text>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 350,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  botao:{
    backgroundColor: 'black',
    color: 'white',
    height: 40,
    padding: 10
  },
  nome: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15
  }


});
