import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity, Touchable } from 'react-native';
import feather, { Feather } from '@react-native-vector-icons/feather'

export default function App() {
 

  return (
    <View style={styles.container}>
      
    <Feather
      name='heart'
      size={40}
      color='#000'
    />
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
