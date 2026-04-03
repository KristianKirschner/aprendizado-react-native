import { StyleSheet, Text, View } from "react-native";

export function UserList({data}){
    return(
        <View style={styles.container}>

            <Text style={styles.text} >Nome: {data.nome} </Text>
            <Text style={styles.text} >Email: {data.email} </Text>
            <Text style={styles.text} >Cargo: {data.cargo} </Text>
            <Text style={styles.text} >Idade: {data.idade} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d4d4d4',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        marginTop: 5,
        padding: 10
    },
    text: {
        color: '#424242'
    }

    
})