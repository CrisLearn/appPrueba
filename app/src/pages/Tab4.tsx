import React, { useState } from 'react';
import { IonButton, IonContent, IonInput, IonPage, IonText, IonTextarea } from '@ionic/react';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const Tab4: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const saveTextToFile = async () => {
    try {
      await Filesystem.writeFile({
        path: 'myTextFile.txt', // Nombre del archivo
        data: text,
        directory: Directory.Documents, // Directorio donde se guardará
        encoding: Encoding.UTF8,
      });
      setStatus('Archivo guardado exitosamente');
    } catch (e) {
      setStatus('Error al guardar el archivo');
      console.error(e);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText color="primary">
          <h2>Guardar Texto en Archivo</h2>
        </IonText>
        <IonTextarea
          placeholder="Ingresa tu texto aquí"
          value={text}
          onIonChange={(e) => setText(e.detail.value!)}
        />
        <IonButton expand="full" onClick={saveTextToFile}>
          Guardar en Archivo
        </IonButton>
        {status && <p>{status}</p>}
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
