import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './src/firebaseConnection';
import { doc, getDoc, onSnapshot } from 'firebase/firestore'; 

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
 
  return(
    <View style={styles.container} >
      <Text style={{textAlign: 'center'}} >Olá {nome}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
})