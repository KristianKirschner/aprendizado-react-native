import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Sobre(){

    return(
        <View style={styles.container}>
            <Text>Sobre</Text>
            <TextInput placeholder="Oi" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0000'
    }
})