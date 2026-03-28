import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

export default function App() {
  const larAnimado = useRef(new Animated.Value(0)).current;
  const altAnimado = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.sequence([    
      Animated.timing(larAnimado, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }),
    Animated.timing(altAnimado, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false
    })
  ]).start(()=>{
    alert('Animacao finalizada')
  })

  }, []);

  let porcentagemLargura = larAnimado.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })

  let porcentagemAltura = altAnimado.interpolate({
    inputRange: [50, 100],
    outputRange: ['5%', '100%']
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: porcentagemLargura,
          height: porcentagemAltura,
          backgroundColor: '#4169e1',
          justifyContent: 'center',
        }}
      >
      </Animated.View>
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
