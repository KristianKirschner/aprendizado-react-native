import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={styles.container} >
            <Text>Home</Text>
            <Button title="Ir para sobre" onPress={() => navigation.navigate('Sobre')} / >
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