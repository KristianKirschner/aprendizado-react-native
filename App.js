import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App () {

  const [nome, setNome] = useState("")
  const [input, setInput] = useState('')

    // ComponenteDidMount
    useEffect(()=>{
        async function getStorage() {
          const nomeStorage = await AsyncStorage.getItem("nomes");
            if (nomeStorage !== null) {
              setNome(nomeStorage);
            }
          }

        getStorage();
    }, [])

    // ComponentDidUpdate
    useEffect(()=>{
      async function saveStorage() {
        await AsyncStorage.setItem('nomes', nome)
      }

      saveStorage();
    }, [nome])

    return (
      <View style={styles.container} >

        <Text style={styles.texto} > {nome} </Text>

        <TextInput
          value={input}
          placeholder="digite o nome"
          onChangeText={(texto) => {setInput(texto)}}
        />

        <TouchableOpacity onPress={()=> 
          {setNome(input) 
          setInput('')}} >
          <Text>Altera text</Text>
        </TouchableOpacity>





      </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30
  },
  texto: {
    color: '#000',
    fontSize: 35
  }


})