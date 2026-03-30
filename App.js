import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'
import Contato from './src/pages/Contato'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@react-native-vector-icons/feather';


const Tab = createBottomTabNavigator();

export default function App(){


  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#FFF',
            borderTopWidth: 0
          }
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => {
             return <Feather  name='home' color={color} size={size}/>
            }
          }}
        />
        <Tab.Screen
          name='Sobre'
          component={Sobre}
          options={{
            tabBarIcon: ({color, size}) => {
             return <Feather  name='file-text' color={color} size={size}/>
            }
          }}
        />
        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            tabBarIcon: ({color, size}) => {
             return <Feather  name='phone-call' color={color} size={size}/>
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )

}