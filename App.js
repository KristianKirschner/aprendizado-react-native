import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [pessoas, setPessoas] = useState(10);
  const [limiteSup, setLimiteSup] = useState(false);
  const [limiteInf, setLimiteInf] = useState(false);

  useEffect(() => {
    function checarNumeros() {
      if (pessoas >= 10) {
        setLimiteSup(true);
      } else {
        setLimiteSup(false)
      };
      if (pessoas <= 0) {
        setLimiteInf(true)
      } else {
        setLimiteInf(false)
      }
    }
    checarNumeros();
  }, [pessoas]);

  function renderizarLimite(){
    if (limiteSup) {
      return(
        <Text style={{backgroundColor: 'yellow'}} >Restaurante está no seu limite de pessoas</Text>
      )
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginBottom: 10 }}>
        Pessoas no restaurante
      </Text>

      <View style={styles.caixaNumero}>
        <Text style={{ color: 'white', fontSize: 40 }}> {pessoas} </Text>
      </View>

      {limiteSup &&
        <Text style={{margin: 10, padding: 2, backgroundColor: '#F6B136'}} >Restaurante está no limite de pessoas</Text>
      }

      <View style={styles.caixaInput}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setPessoas(pessoas + 1)}
          disabled={limiteSup}
        >
          <Text style={{ color: 'white' }}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPessoas(pessoas - 1)}
          style={styles.botao}
          disabled={limiteInf}
        >
          <Text style={{ color: 'white' }}>Remover</Text>
        </TouchableOpacity>
    
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixaNumero: {
    fontSize: 30,
    backgroundColor: 'black',
    width: 90,
    height: 90,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    textAlign: 'centers',
  },
  caixaInput: {
    flexDirection: 'row',
  },
  botao: {
    backgroundColor: '#007AFE',
    borderRadius: 8,
    width: 80,
    height: 35,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
