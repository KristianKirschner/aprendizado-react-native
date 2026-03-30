import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'

const Stack = createNativeStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home' component={Home} 
        options={{
          title:'Início',
          headerStyle:{
            backgroundColor: '#000'
          },
          headerTintColor: '#fff'
        }}
        />
        <Stack.Screen 
        name='Sobre' component={Sobre}
        options={{
          headerShown: false
        }}
        />        
      </Stack.Navigator>

    </NavigationContainer>
  )

}