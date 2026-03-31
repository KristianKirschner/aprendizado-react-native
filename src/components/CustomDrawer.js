import { Image } from 'react-native';
import { View, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: '100%',
          height: 85,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 60
        }}
      >
        <Image
          source={require('../assets/perfil.png')}
          style={{
            height: 65,
            width: 65,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 17,
            marginBottom: 30,
          }}
        >
          Bem vindo
        </Text>
      </View>

          <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
