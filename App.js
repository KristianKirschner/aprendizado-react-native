import notifee, { AndroidImportance, AuthorizationStatus, EventType } from '@notifee/react-native';
import { Button, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [statusNotification, setStatusNotification] = useState(true);

  useEffect(() => {
    async function getPermission() {
      const settings = await notifee.requestPermission();

      if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
        console.log('Permitido', AuthorizationStatus.AUTHORIZED);
        setStatusNotification(true);
      } else {
        console.log('Usuário negou a permissão');
        setStatusNotification(false);
      }
    }
    getPermission();
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent((type, detail) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('Usuario descartou a notificação');
          break;
        case EventType.PRESS:
          console.log("Tocou ", detail.notification )

      }
    });
  }, []);

  async function handleNotification() {
    if(!statusNotification){
      return
    };

    const channelId = await notifee.createChannel({
      id: 'lembrete',
      name: 'lembrete',
      vibration: true,
      importance: AndroidImportance.HIGH
    })

    await notifee.displayNotification({
      id: 'lembrete',
      title: 'Estudar',
      body: 'Lembrete para estudar fodase',
      android: {
        channelId,
        pressAction: {
          id: 'default'
        }
      }
    })
  }

  return (
    <View>
      <Button
      title="Mostrar notificação"  
      onPress={handleNotification}
      />
    </View>
  );
}
