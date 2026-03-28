import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity, Touchable } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function App() {
 
  const buttonRef = useRef(null);
  const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

  function handleClick(){
    buttonRef.current.bounce();
  }

  return (
    <View style={styles.container}>


      <ButtonAnimated
        style={styles.button}
        animation='pulse'
        ref={buttonRef}
        onPress={handleClick}
      >
        <Text
          style={{color: 'white'}}
        >Animar</Text>
      </ButtonAnimated>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width: '70%',
    height: 30,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }

});
