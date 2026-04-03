import { cloneElement, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import { db } from './src/firebaseConnection';
import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  collection,
  addDoc,
  getDocs,
} from 'firebase/firestore';
import { UserList } from './src/users';

export default function App() {
  const [nome, setNome] = useState('Carregando...');
  const [showForm, setShowForm] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      const usersRef = collection(db, 'users');

      getDocs(usersRef)
        .then(snapshot => {
          let list = [];
          snapshot.forEach(doc => {
            list.push({
              id: doc.id,
              nome: doc.data().nome,
              email: doc.data().email,
              cargo: doc.data().cargo,
              idade: doc.data().idade,
            });
          });
          setUsers(list);
          setNome(users[0]?.nome)
        })
        .catch(erro => {
          console.log(erro);
        });
    }
    getData();
  }, []);

  async function handleRegistro() {
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
    await addDoc(collection(db, 'users'), {
      nome: pessoa.nome,
      email: pessoa.email,
      cargo: pessoa.cargo,
      idade: pessoa.idade,
    })
      .then(() => {
        setPessoa({
          nome: '',
          email: '',
          cargo: '',
          idade: '',
        }),
          console.log('CADASTRADO');
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  const [pessoa, setPessoa] = useState({
    nome: '',
    email: '',
    idade: '',
    cargo: '',
  });

  return (
    <View style={styles.container}>
      {showForm && (
        <View style={{ width: '100%' }}>
          <Text style={styles.nomeTitulo}>Olá {nome}!</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={pessoa.nome}
            onChangeText={valor => {
              setPessoa({ ...pessoa, nome: valor });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={pessoa.email}
            onChangeText={valor => {
              setPessoa({ ...pessoa, email: valor });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Cargo"
            value={pessoa.cargo}
            onChangeText={valor => {
              setPessoa({ ...pessoa, cargo: valor });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Idade"
            value={pessoa.idade}
            onChangeText={valor => {
              setPessoa({ ...pessoa, idade: valor });
            }}
          />

          <TouchableOpacity
            onPress={handleRegistro}
            style={styles.buttonSubmit}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        onPress={() => {
          setShowForm(!showForm);
        }}
      >
        <Text> {showForm ? 'Fechar formulário' : 'Abrir formulário'} </Text>
      </TouchableOpacity>

        <Text style={{ marginTop: 10, fontSize: 20, marginBottom: 5 }}>
          Usuarios
        </Text>
        <FlatList
          style={{width: '100%'}}
          data={users}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <UserList data={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    flex: 1
  },
  nomeTitulo: {
    fontSize: 28,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    height: 45,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
  },
  buttonSubmit: {
    marginTop: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#000',
    marginLeft: 10,
    marginRight: 10,
    height: 45,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
  },
});
