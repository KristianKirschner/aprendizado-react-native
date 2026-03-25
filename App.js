import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Text, TextInput, Keyboard , TouchableOpacity } from "react-native"
import { PickerMoeda } from './src/PickerMoeda'
import { api } from './src/services/api'

export default function App() {
  const [moedas, setMoedas] = useState([])
  const [loading, setLoading] = useState(true)
  const [moedaSelecionada, setmoedaSelecionada] = useState(null)
  const [valorMoeda, setValorMoeda] = useState(null)
  const [valorConvertido, setValorConvertido] = useState(0)
  const [moedaBValor, setMoedaBValor] = useState("")

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
      setmoedaSelecionada(arrayMoedas[0].value)
      setLoading(false)
    }
    loadMoedas();
  }, [])

  async function converter(){
    if(!moedaBValor || moedaSelecionada === null){
      return
    } else {}
    const response = await api.get(`convert?from=${moedaSelecionada}&to=BRL`);

    let resultado = (response.data.result * parseFloat(moedaBValor) )
    setValorConvertido(`${resultado.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`)
    setValorMoeda(moedaBValor)
    Keyboard.dismiss()
    
  }

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
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
              onChange={(moeda) => setmoedaSelecionada(moeda)}
            />

            <Text style={styles.titulo} >Digite um valor para converter em (R$)</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="EX: 1.5"
              value={moedaBValor}
              onChangeText={(valor) => setMoedaBValor(valor)}
            />
          </View>
          <TouchableOpacity
          onPress={converter}
          style={styles.botao}
          >
            <Text >Converter</Text>
          </TouchableOpacity>

        </View>

        {valorConvertido !== 0 && (
          <View style={styles.areaResultado} >
            <Text style={styles.valorConvertido}>{valorMoeda} {moedaSelecionada} </Text>
            <Text style={{ fontSize: 18, margin: 8, fontWeight: '500' }}>coresponde a</Text>
            <Text style={styles.valorConvertido}>{valorConvertido}</Text>
          </View>
        )}
      </View>
    )
  }
}


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
  card: {
    backgroundColor: '#FFF',
    marginTop: 30,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: '90%'
  },
  botao: {
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
  areaResultado: {
    width: '90%',
    backgroundColor: 'white',
    marginTop: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  valorConvertido: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold'
  }



})