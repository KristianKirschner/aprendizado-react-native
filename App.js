import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text} from "react-native";
import Pessoa from './src/Pessoa'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      feed: [
        {id: '1', nome: 'Matheus', idade: 50, email: 'mat@gmail.com'},
        {id: '2', nome: 'Joao', idade: 15, email: 'jao@gmail.com'},
        {id: '3', nome: 'Kristian', idade: 20, email: 'kri@gmail.com'},
        {id: '4', nome: 'Jose', idade: 50, email: 'jose@gmail.com'},
        {id: '5', nome: 'Ana', idade: 21, email: 'ana@gmail.com'},
        
      ]

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.feed}
        keyExtractor={(item) => item.id }
        renderItem={ ({item}) => <Pessoa data={item} /> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
