import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomes: ["João", "Maria", "Carlos"],
      novoItem: ''
    }

    this.pegaNome = this.pegaNome.bind(this)
    this.adiciona = this.adiciona.bind(this)
    this.remover = this.remover.bind(this)

  }

  pegaNome(texto) {
    this.setState({ novoItem: texto })
  }

  adiciona() {
    if (this.state.novoItem.length === 0) {
      return;
    }
    this.setState({
      nomes: [...this.state.nomes, this.state.novoItem]
    })
  }

  remover(index) {
    this.setState(prevState => ({
      nomes: prevState.nomes.filter((_, i) => i !== index)
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#eaf0fa' }}>
        <View style={styles.container}>
          <View style={styles.inputbox}>
            <TextInput onChangeText={this.pegaNome} style={styles.input} placeholder="Digite um nome: " />
            <TouchableOpacity onPress={this.adiciona} style={styles.inputbutton}>
              <Text style={styles.inputbuttontext} > Adicionar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hr}></View>
        </View>
        <View style={styles.body}>
          {this.state.nomes.map((nome, index) =>
            <View style={{flexDirection: 'row'}}>
              <Text key={index} style={styles.listitem}>{'\u2022'} {nome}</Text>
              <TouchableOpacity style={styles.removerbutton} onPress={() => this.remover(index)}>
                <Text style={styles.removebuttontext}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputbox: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#222',
    padding: 10,
    fontSize: 15,
    marginRight: 10,
    backgroundColor: 'white'
  },
  inputbutton: {
    width: 110,
    height: 40,
    backgroundColor: '#2E68CC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  inputbuttontext: {
    color: 'white',
    fontSize: 15
  },
  hr: {
    marginTop: 25,
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderStyle: 'dashed',
    width: 320,
  },
  body: {
    alignItems: 'flex-start',
    marginLeft: 60,
    marginTop: 20
  },
  listitem: {
    fontSize: 20,
    fontWeight: '700'
  },  
  removebuttontext: {
    color: 'red',
    fontSize: 15,
  },
  
})

export default App;