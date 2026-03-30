import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Sobre(){

    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Button title="Voltar" onPress={() => navigation.navigate('Home')} / >
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