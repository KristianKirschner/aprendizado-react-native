import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { api } from './src/services/api';
import Results from './src/Results';

export default function App() {
  const [input, setInput] = useState('19907190');
  const [cep, setCep] = useState(null);
  const [cepSelecionado, setCepSelecionado] = useState(null);
  const [loading, setLoading] = useState(false);

  function renderResultado() {
    if (loading) {
      return <ActivityIndicator size={45} color={'blue'} />;
    } else {
      return(
        <Results data={cepSelecionado}/>
      )
    }
  }

  useEffect(() => {
    async function loadCep() {
      if (!cep) return;
      let numeroCep = cep;
      const response = await api.get(`ws/${numeroCep}/json/`);
      setCepSelecionado({
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        uf: response.data.uf,
        cep: response.data.cep,
      });
          
    setLoading(false)
    Keyboard.dismiss();
    }
    loadCep();
    
  }, [cep]);

  function buscar() {
    setCep(input);
    setLoading(true)
  }

  function limpar() {
    setCep('');
    setInput('');
    setCepSelecionado(null);
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.titulo}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.inputText}
          placeholder="a"
          onChangeText={valor => setInput(valor)}
          value={input}
        />

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.btnBuscar} onPress={buscar}>
            <Text style={styles.btnTexto}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLimpar} onPress={limpar}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {renderResultado()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
  inputBox: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  inputText: {
    marginTop: 20,
    padding: 12,
    width: '90%',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#00000050',
    marginBottom: 20,
    borderRadius: 8,
  },
  buttonArea: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
  },
  btnBuscar: {
    width: 80,
    backgroundColor: '#1371D2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 8,
  },
  btnLimpar: {
    width: 80,
    backgroundColor: '#DA4918',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 8,
  },
  btnTexto: {
    color: '#FFF',
    fontSize: 18,
  },
});
