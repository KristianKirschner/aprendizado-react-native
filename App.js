import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);

  }

  vai(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'VAI'})
    } else {
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.01})
      }, 1);
      this.setState({botao: 'PAUSAR'})
    }


  }

  limpar(){

    if (this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.state.numero != 0){
    this.setState({ultimo: this.state.numero.toFixed(2), numero: 0, botao: 'VAI'})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')}
          style={styles.cronometro} />

        <Text style={styles.timer} > {this.state.numero.toFixed(2)} </Text>

        <View style={styles.btnArea} >
          <TouchableOpacity style={styles.btn} 
          onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} 
          onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>


        </View>

          <View style={styles.areaUltimo} >
            <Text style={styles.textoCorrida} > Ultimo Tempo : {this.state.ultimo} </Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 75,
    height: 40
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    color: '#00aeef',
    fontWeight: 'bold'
  },
  areaUltimo: {
    marginTop: 50,
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white'
  }

})

export default App;