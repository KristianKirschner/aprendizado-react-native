import React from "react";
import { Text, View, StyleSheet } from "react-native";


export default function Resultados(props){

if (!props.data) {
  return null;
} else {


    return(
        <View style={styles.container} >
            <Text style={styles.texto}>CEP: {props.data.cep} </Text>
            <Text style={styles.texto}>Logradouro: {props.data.logradouro}</Text>
            <Text style={styles.texto}>Bairro: {props.data.bairro}</Text>
            <Text style={styles.texto}>Cidade: {props.data.cidade}</Text>
            <Text style={styles.texto}>Estado: {props.data.uf}</Text>
        </View>
        
    )
}}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        paddingLeft: 70,
        paddingRight: 70
    },
    texto:{
        fontSize: 20,
        textAlign: 'center'
    }
})