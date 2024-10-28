import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import './Tab4.css';

const Tab4: React.FC = () => {
  const [text, setText] = useState('');

  const saveTextToFile = async () => {
    try {
      // Guardar el archivo en el almacenamiento externo del dispositivo
      await Filesystem.writeFile({
        path: 'texto.txt',
        data: text,
        directory: Directory.External, // Cambiado a External para accesibilidad desde otras apps
        encoding: Encoding.UTF8,
      });
      alert('Archivo guardado correctamente en el dispositivo en almacenamiento externo');
    } catch (error) {
      console.error('Error al guardar el archivo:', error);
      alert('No se pudo guardar el archivo');
    }
  };

  const openFile = async () => {
    try {
      // Leer el archivo desde el almacenamiento externo
      const fileContent = await Filesystem.readFile({
        path: 'texto.txt',
        directory: Directory.External,
        encoding: Encoding.UTF8,
      });
      alert('Contenido del archivo:\n' + fileContent.data);
    } catch (error) {
      console.error('Error al leer el archivo:', error);
      alert('No se pudo leer el archivo');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Guardar un texto a archivo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="input-container">
          <IonItem>
            <IonLabel position="floating">Escribe tu texto</IonLabel>
            <IonInput
              value={text}
              onIonChange={(e) => setText(e.detail.value!)}
              placeholder="Ingresa algo..."
            />
          </IonItem>
          <IonButton expand="full" onClick={saveTextToFile}>
            Guardar en archivo
          </IonButton>
          <IonButton expand="full" color="secondary" onClick={openFile}>
            Leer archivo
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
