import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Detalhes( props ) {


    return (
        <View style={styles.container} >
            <View style={styles.modalContainer} >
                <TouchableOpacity  
                style={styles.btnVoltar}
                onPress={props.voltar}
                >
                    <Text style={{ color: '#FFF', fontSize: 16 }} >Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}> {props.data.nome} </Text>
                <Text style={styles.sinopse} >Sinopse:</Text>
                <Text style={styles.descricao} >{props.data.sinopse}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContainer: {
        width: '90%',
        height: '45%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    btnVoltar: {
        backgroundColor: '#E52240',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },
    sinopse: {
        color: 'white',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10
    },
    descricao: {
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
    }
})