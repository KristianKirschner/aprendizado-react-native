import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation, StackActions } from "@react-navigation/native";

export default function Contato(){

    const navigation = useNavigation();

  function navegaSobre(){
    navigation.goBack();
  }

    return(
        <View style={styles.container} >
            <Text>Pagina contato</Text>
            <Button title="Voltar" onPress={navegaSobre} / >
            <Button title="Voltar tudo" onPress={() => navigation.dispatch(StackActions.popToTop)} / >

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