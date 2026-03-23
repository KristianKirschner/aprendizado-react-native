import React, { useState, useEffect, useMemo } from "react";
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
    
    
    const letrasNome = useMemo(() => {
      console.log("Mudou a letra")
      return nome.length
      
    }, [nome]);


    return (
      <View style={styles.container} >

        <Text style={styles.texto} > {nome} </Text>
        <Text style={styles.texto} > {letrasNome} </Text>

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