import React from 'react';

import StackRoutes from './stackRoutes'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator();

export default function Routes(){


  return(
    <Drawer.Navigator
    drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        drawerStyle:{
          backgroundColor: 'white',
        },
        drawerActiveBackgroundColor: '#1b7c80',
        drawerActiveTintColor: 'white',
        drawerInactiveBackgroundColor: '#e7e7e7',
        drawerItemStyle:{
          borderRadius: 7,
          marginTop: 10
        }
      }}
    >
      <Drawer.Screen
        name='HomeStack'
        component={StackRoutes}
      />

      <Drawer.Screen
      name='Sobre'
      component={Sobre}
      />

      <Drawer.Screen
      name='Contato'
      component={Contato}
      />
    </Drawer.Navigator>
  )

}