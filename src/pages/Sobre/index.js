import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Sobre(){

    const navigation = useNavigation();
    const route = useRoute();
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Pagina Sobre' : route.params?.nome
        })
    },[navigation])

    return(
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button title="Tela contatos" onPress={() => navigation.navigate('Contato')} />
            <Button title="Voltar tela" onPress={() => navigation.goBack()} / >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})