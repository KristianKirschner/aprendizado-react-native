import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Text, TextInput, TouchableOpacity } from "react-native"
import {PickerMoeda} from './src/PickerMoeda'
import {api} from './src/services/api'

export default function App() {
  const [moedas, setMoedas] = useState([])
  const [loading, setLoading] = useState(true)
  const [moedaSelecionada, setmoedaSelecionada] = useState(null)

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get("latest")

      let arrayMoedas = [];
      Object.keys(response.data.rates).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        })
      })
      setMoedas(arrayMoedas)
      setmoedaSelecionada(arrayMoedas[0])
      setLoading(false)
    }
    loadMoedas();
  }, [])

  if (loading) {
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}} >
          <ActivityIndicator color="#121212" size={45} />
          <Text>Carregando...</Text>
      </View>
    )
  } else {
    return (
    <View style={styles.container} >
      <View style={styles.card} >
        <View style={styles.areaInput} >
        <Text style={styles.titulo} >Selecione sua moeda</Text>

        <PickerMoeda
          moedas={moedas}
          moedaSelecionada={moedaSelecionada}
          onChange={(moeda) => setmoedaSelecionada(moeda) }
        />
        
        <Text style={styles.titulo} >Digite um valor para converter em (R$)</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="EX: 1.5"
        />
        </View>
        <TouchableOpacity style={styles.botao}> 
          <Text >Converter</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center'
  },
  titulo: {
    color: '#0000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  card:{
    backgroundColor: '#FFF',
    marginTop: 30,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  botao:{
    height: 45,
    backgroundColor: 'red',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  areaInput: {
    padding: 20,
  },



})