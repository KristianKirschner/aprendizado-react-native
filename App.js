import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

export default function App() {

    const larAnimado =useRef (new Animated.Value(50)).current
  

useEffect(()=>{

  Animated.timing(larAnimado, {
    toValue: 500,
    duration: 2000,
    useNativeDriver: false
  }).start();

}, []);


  return (
    <View style={styles.container}>
      <Animated.View 
      style={{
        width: 300,
        height: larAnimado,
        backgroundColor: '#4169e1',
        justifyContent: 'center'
      }} >
        <Text style={{textAlign: 'center', fontSize: 22, color: '#FFFF'}} >Carregando...</Text>
      </Animated.View >

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
