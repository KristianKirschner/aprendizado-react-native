import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stackRoutes'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@react-native-vector-icons/feather';


const Tab = createBottomTabNavigator();

export default function Routes(){


  return(
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle: {
            backgroundColor: '#FFF',
            borderTopWidth: 0,
            alignItems: 'center',
          },
        }}
      >
        <Tab.Screen
          name='HomeStack'
          component={StackRoutes}
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
  )

}