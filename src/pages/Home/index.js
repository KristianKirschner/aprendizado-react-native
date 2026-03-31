import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Home(){

    const navigation = useNavigation();

  function navegaDetalhes(){
    navigation.navigate('Detalhes')
  }

    return(
        <View style={styles.container} >
            <Text>Home</Text>
            <Button title="Ir para detalhes" onPress={navegaDetalhes} / >
            <Button title="Abrir drawer" onPress={() => navigation.openDrawer()} / >

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