import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Switch, TouchableOpacity, Alert } from 'react-native'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      idade: '',
      sexo: 'Masculino',
      limite: 10,
      isEstudante: false,
    }

  };

  criarConta() {
    if (this.state.nome === '' || this.state.idade === '') {
      alert("Existem campos vazios!")
      return
    }

    alert(
      'Conta aberta com sucesso!! \n\n' +
      'Nome: ' + this.state.nome + '\n' +
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: ' + this.state.sexo + ' \n' +
      'Limite Conta: R$' + this.state.limite.toFixed(2) + '\n' +
      'Conta Estudante: ' + ((this.state.isEstudante) ? 'Ativo' : 'Inativo')
    );

  }



  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.logo} >Banco</Text>
        <View style={styles.areaFormulario} >
          <Text>Nome:</Text>
          <TextInput placeholder="Digite seu nome:" onChangeText={(valor) => this.setState({ nome: valor })} />
        </View>

        <View style={styles.areaFormulario} >
          <Text>Idade</Text>
          <TextInput placeholder="Digite sua idade" keyboardType="number-pad" onChangeText={(valor) => this.setState({ idade: valor })} />
        </View>

        <View style={styles.areaSexo} >
          <Picker
            style={styles.pickerSexo}
            selectedValue={this.state.sexo}
            onValueChange={(valor) => this.setState({ sexo: valor })}
          >
            <Picker.Item value={"Masculino"} label="Masculino" />
            <Picker.Item value={"Feminino"} label="Feminino" />
          </Picker>
        </View>

        <View style={styles.areaSlider} >
        <Text style={styles.textoSlider} >Defina o seu limite</Text>
        <Slider
          minimumTrackTintColor="#CF0000"
          minimumValue={250}
          maximumValue={2000}
          value={this.state.limite}
          step={100}
          onValueChange={(limite) => this.setState({ limite: limite })}
        />
        <Text style={styles.textoSlider}>{this.state.limite} R$ </Text>
      </View>

      <View style={styles.areaEstudante}>
        <Text>Você é estudante?</Text>
        <Switch
          value={this.state.isEstudante}
          onValueChange={(valor) => this.setState({ isEstudante: valor })}
        />
      </View>

      <View style={styles.areaBotao} >
        <TouchableOpacity style={styles.botao} onPress={() => this.criarConta()}>
          <Text style={styles.textoBotao}>Abrir conta</Text>
        </TouchableOpacity>
</View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center'
  },
  areaFormulario: {
    flexDirection: 'column',
    margin: 10,
  },
  areaSexo: {
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  pickerSexo: {
    flex: 1
  },
  areaSlider: {
    marginRight: 10,
    marginLeft: 10,
  },
  textoSlider: {
    textAlign: 'center'
  },
  areaEstudante: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginRight: 100,
    marginLeft: 100,
    marginTop: 20
  },
  areaBotao: {
    flex:1,
     justifyContent: 'center',

  },
botao:{
 height: 35,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#000000',
 borderRadius: 150,
 margin: 20
},
  textoBotao:{
   fontSize: 20,
   fontWeight: 'bold',
   color: '#FFFFFF'
},
});
