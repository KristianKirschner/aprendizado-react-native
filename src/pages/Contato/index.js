import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation, StackActions } from "@react-navigation/native";

export default function Contato(){

    return(
        <View style={styles.container} >
            <Text>Pagina contato</Text>
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