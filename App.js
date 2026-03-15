import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";

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
      <View>
        <Text>{this.state.nome}</Text>
        <Button title="Entrar" onPress={() => this.entrar("Kristian")}/>

        <Text> {this.state.numero} </Text>
        <Button title="+" onPress={this.aumentar} />
        <Button title="-" onPress={this.diminuir} />
      </View>
    );
  }
}

export default App;