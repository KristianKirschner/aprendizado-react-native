import notifee, {
  AndroidImportance,
  AuthorizationStatus,
  EventType,
  RepeatFrequency,
  TriggerType,
} from '@notifee/react-native';
import { Button, View } from 'react-native';
import { useEffect, useState } from 'react';
import { type } from 'firebase/firestore/pipelines';

export default function App() {
  const [statusNotification, setStatusNotification] = useState(false);

  //permisao
  useEffect(() => {
    async function getPermission() {
      const settings = await notifee.requestPermission();

      if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
        console.log('Permitido');
        setStatusNotification(true);
      } else {
        console.log('Usuário negou a permissão');
        setStatusNotification(false);
      }
    }

    getPermission();
  }, []);

  // evento em foreground
  useEffect(() => {
    const unsubscribe = notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('Usuário descartou a notificação');
          break;
        case EventType.PRESS:
          console.log('Usuário tocou na notificação');
          break;
      }
    });

    return unsubscribe;
  }, []);

  // criar canal (reutilizável)
  async function createChannel() {
    return await notifee.createChannel({
      id: 'lembrete',
      name: 'lembrete',
      vibration: true,
      importance: AndroidImportance.HIGH,
    });
  }

  // notificação imediata
  async function handleNotification() {
    if (!statusNotification) return;

    const channelId = await createChannel();

    await notifee.displayNotification({
      title: 'Estudar',
      body: 'Lembrete para estudar',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  // notificação agendada
  async function handleScheduleNotification() {
    if (!statusNotification) return;

    const channelId = await createChannel();

    const date = new Date();
    date.setSeconds(date.getSeconds() + 10); // 🔥 10 segundos pra teste

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    };

    await notifee.createTriggerNotification(
      {
        title: 'Lembrete estudo',
        body: 'Estudar para a prova',
        android: {
          channelId,
          pressAction: {
            id: 'default',
          },
        },
      },
      trigger,
    );
  }

  // cancelar notificação
  async function handleCancelNotification() {
    const ids = await notifee.getTriggerNotificationIds();

    if (ids.length > 0) {
      await notifee.cancelNotification(ids[0]);
      console.log('Notificação cancelada:', ids[0]);
    } else {
      console.log('Nenhuma notificação para cancelar');
    }
  }

  // listar notificações agendadas
  async function handleListNotification() {
    const ids = await notifee.getTriggerNotificationIds();
    console.log('IDs:', ids);
  }

  // notificação recorrente
  async function handleScheduleWeekly() {
    const date = new Date(Date.now());

    date.setSeconds(date.getSeconds() + 10);

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      repeatFrequency: RepeatFrequency.WEEKLY,
    };

    await notifee.createTriggerNotification(
      {
        title: 'lembrete semanal',
        body: 'ESTUDAR',
        android: {
          channelId: 'lembrete',
          importance: AndroidImportance.HIGH,
          pressAction: {
            id: 'default',
          },
        },
      },
      trigger,
    );
  }

  return (
    <View>
      <Button title="Mostrar notificação" onPress={handleNotification} />
      <Button
        title="Agendar notificação"
        onPress={handleScheduleNotification}
      />
      <Button title="Listar notificações" onPress={handleListNotification} />
      <Button title="Cancelar notificação" onPress={handleCancelNotification} />
      <Button title="Agendar semanal" onPress={handleScheduleWeekly} />
    </View>
  );
}
