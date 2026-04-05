import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { auth } from './src/firebaseConnection'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {FormUsers} from './src/FormUsers'

export default function App() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("")
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user){
        setAuthUser({
          email: user.email,
          uid: user.uid
        })
        setLoading(false)
        return
      }
      setAuthUser(null)
      setLoading(false)
    })
  },[])

  async function handleCreateUser(){
   const user = await createUserWithEmailAndPassword(auth, email, senha)
   console.log(user);
  }

  async function handleLogout() {
    await signOut(auth);
    setAuthUser(null)
  }

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, senha)
    .then((user) => {
      console.log(user)
      setAuthUser({
        email: user.user.email,
        uid: user.user.uid
      })
    })
    .catch(err => {
      if (err.code === "auth/missing-password"){
        alert("A senha é obrigatoria")
      }
      if (err.code === "auth/invalid-credential"){
        alert("As credenciais são invalida")
      }
      console.log(err.code)
    })

  }

  if (authUser) {
    return(<FormUsers/>)
  }

 return (
  <View style={styles.container}>

    {loading && <Text>Carregando informações</Text>}

    <Text style={{ marginLeft: 8, fontSize: 18, color: "#000" }}>Email:</Text>
    <TextInput
      style={styles.input}
      value={email}
      placeholder="Digite seu email..."
      onChangeText={(valor) => setEmail(valor)}
    />

    <Text style={{ marginLeft: 8, fontSize: 18, color: "#000" }}>Senha:</Text>
    <TextInput
      value={senha}
      style={styles.input}
      placeholder="Digite sua senha..."
      onChangeText={(valor) => setSenha(valor)}
      secureTextEntry={true}
    />

    <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
      <Text style={styles.buttonText}>Criar uma conta</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.button, {marginTop: 8,}]} onPress={handleLogin}>
      <Text style={styles.buttonText}>Fazer login</Text>
    </TouchableOpacity>

    { authUser && (
    <TouchableOpacity style={[styles.button, {marginTop: 8,}]} onPress={handleLogout}>
      <Text style={styles.buttonText}>Deslogar</Text>
    </TouchableOpacity>
    )
    }
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    paddingTop: 40
  },
  input:{
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    marginBottom: 14,
  },
  button:{
    backgroundColor: "#000",
    marginRight: 8,
    marginLeft: 8,
    padding: 8
  },
  buttonText: {
    color: "#FFF",
    textAlign: 'center'
  }
})