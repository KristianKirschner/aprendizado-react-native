import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity} from "react-native"

export default class App extends Component {
  render() {
    return (
          <View style={{backgroundColor: '#292929', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}} >

        <Image source={require('../images/gas.png')} />
            
            <Text style={{color: '#29B753', fontSize: 28, marginTop: 20, fontWeight: 'bold'}} >Compensa usar {this.props.decisao}</Text>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', marginTop: 35}} >Com os preços:</Text>
            <Text style={{color: '#b9b9b9', marginTop: 10, marginBottom: 10, fontSize: 18}} >Alcool: R$ {this.props.valoralcool}</Text>
            <Text style={{color: '#b9b9b9', marginTop: 10, marginBottom: 10, fontSize: 18, marginBottom: 20}} >Gasolina: R$ {this.props.valorgasolina} </Text>


            <TouchableOpacity style={{width: '50%', height: 30, borderWidth: 0.5, borderColor: '#FF512E', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}  title="sair" onPress={this.props.fechar} >
              <Text style={{color:'#FF512E', fontWeight: 'bold'}} >Calcular novamente</Text>
            </TouchableOpacity>
          </View>
    )
  }
}
