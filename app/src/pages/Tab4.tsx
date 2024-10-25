import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import './Tab4.css';

const Tab4: React.FC = () => {
  const [text, setText] = useState('');

  const saveTextToFile = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'texto.txt';
    a.click();
    URL.revokeObjectURL(url);
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
