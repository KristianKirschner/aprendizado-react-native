import { Picker } from "@react-native-picker/picker";
import React, { Component } from "react";
import {View, StyleSheet, Text } from 'react-native'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Strogonoff', valor: 35.90},
        {key: 2, nome: 'Calabresa', valor: 59.90},
        {key: 3, nome: 'Quatro Queijos', valor: 35.90},
        {key: 4, nome: 'Brigadeiro', valor: 45.90},
        {key: 5, nome: 'Marguerita', valor: 40.90},        
      ]
    }
  }


  render(){

    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item  key={k} value={k} label={v.nome} />
    }) 

    return(
      <View style={styles.container} >

        <Text style={styles.logo} >Menu Pizza</Text>

        <Picker 
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}
        >
        {
          pizzasItem
        }

        </Picker>

        <Text style={styles.pizza} >Você escolheu: {this.state.pizzas[this.state.pizza].nome} </Text>
        <Text style={styles.pizza} >R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2).replace('.', ',')} </Text>



      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  pizza: {
    textAlign: 'center',
    fontSize: 25
  }



});
