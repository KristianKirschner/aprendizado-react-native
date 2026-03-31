import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { db } from './src/firebaseConnection';
import { doc, getDoc, onSnapshot, setDoc, collection, addDoc } from 'firebase/firestore'; 

export default function App(){

  const [nome, setNome] = useState("Carregando...")
  
  useEffect(()=>{
    async function getData() {

      // busca no banco apenas uma vez
/*    const docref = doc(db, "users", "1")
      getDoc(docref)
      .then((snapshot)=>{
        console.log(snapshot.data())
        setNome(snapshot.data()?.nome)
      })
      .catch ((erro) => {
        console.log(erro)
      })  */

      // busca no banco em tempo real
      onSnapshot(doc(db, "users", "1"), (doc) => {
        setNome(doc.data()?.nome)
      })


    }
    getData();
  }, [])

  async function handleRegistro(){
    // setar manualmente o usuario
/*     await setDoc(doc(db, "users", "3"), {
      nome: "Jose",
      idade: "30",
      cargo: "Backend"
    })
    .then(()=>{
      console.log("Cadastrado com sucesso!")
    })
    .catch((erro) => {
      console.log("Erro" + erro)
    }) */

      //adicionar dinamicamente o usuario
  await addDoc(collection(db,"users"), {
      nome: pessoa.nome,
      idade: pessoa.email,
      cargo: pessoa.cargo,
  })
  }
  
  const [pessoa,setPessoa] = useState({nome: '', email: '', idade: '', cargo: ''})

  return(
    <View style={styles.container} >
      <Text style={{textAlign: 'center'}} >Olá {nome}!</Text>

      <TextInput placeholder='Nome' value={pessoa.nome} onChangeText={(valor) => {setPessoa({...pessoa, nome: valor})}} />
      <TextInput placeholder='Email' value={pessoa.email} onChangeText={(valor) => {setPessoa({...pessoa, email: valor})}}  />
      <TextInput placeholder='Cargo'  value={pessoa.cargo} onChangeText={(valor) => {setPessoa({...pessoa, cargo: valor})}}  />

      <TouchableOpacity style={styles.button}
        onPress={handleRegistro}
      >
        <Text style={styles.buttonText} >Adicionar</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  button: {
    backgroundColor: 'black',
    alignSelf: 'flex-start'
  }, 
  buttonText: {
    padding: 8,
    color: 'white'
  }
})