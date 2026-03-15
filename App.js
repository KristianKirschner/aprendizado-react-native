import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      nome: "Joao",
      numero: 10
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  aumentar(){
    this.setState((prevState) => ({
      numero: prevState.numero + 1
    }));
  }

  diminuir(){
    this.setState((prevState) => ({
      numero: prevState.numero - 1
    }));
  }

  entrar(nome){
    this.setState({
      nome: nome,
    })
  }
    render() {
    return (
      <View style={styles.area}>
        <Text>{this.state.nome}</Text>
        <Button title="Entrar" onPress={() => this.entrar("Joao")}/>

        <Text> {this.state.numero} </Text>
        <Button title="+" onPress={this.aumentar} />
        <Button title="-" onPress={this.diminuir} />

        <Text style={[styles.texto1, styles.alinhaTexto]}>Eu sou o texto 1</Text>
        <Text style={styles.alinhaTexto}>Eu sou o texto 2</Text>
        <Text>Eu sou o texto 3</Text>
        <Text>Eu sou o texto 4</Text>
        <Text style={styles.texto1}>Eu sou o texto 5</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  area:{
    marginTop: 20
  },
  texto1:{
    color: 'red',
    fontSize: 20
  },
  alinhaTexto:{
    textAlign: 'center'
  }
});

export default App;