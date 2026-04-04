import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { db } from './firebaseConnection';
import { deleteDoc, doc } from 'firebase/firestore';

export function UserList({ data }) {
  async function handleDeleteItem() {
    const docRef = doc(db, "users", data.id);
    await deleteDoc(docRef)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Nome: {data.nome} </Text>
        <Text style={styles.text}>Email: {data.email} </Text>
        <Text style={styles.text}>Cargo: {data.cargo} </Text>
        <Text style={styles.text}>Idade: {data.idade} </Text>
      </View>
      <View style={styles.deleteBox}>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteItem}>
          <Text style={{color: 'white'}} >Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d4d4d4',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    padding: 10,
    justifyContent: 'space-between'
  },
  text: {
    color: '#424242',
  },
  deleteBox: {
    justifyContent: 'center'
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8
  }
});
