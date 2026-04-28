import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function App() {
  const [photo, setPhoto] = useState(null);

  async function openCamera(){

    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    }
    const response = await launchCamera(options)

    setPhoto(response.assets[0].uri);

  }

  function openAlbum() {
    const options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 2,
    };

    launchImageLibrary(options, respose => {
      if (respose.didCancel) {
        console.log('CANCELADO');
      }

      console.log(respose.assets);
      setPhoto(respose.assets[0].uri);
    });
  }

  return (
    <View>
      <TouchableOpacity onPress={openCamera}>
        <Text>Abrir camera</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={openAlbum}>
        <Text>Abrir galeria</Text>
      </TouchableOpacity>
      {photo !== null && (
        <Image
          style={{
            width: '90%',
            height: 300,
            objectFit: 'cover',
          }}
          source={{ uri: photo }}
        />
      )}
    </View>
  );
}
