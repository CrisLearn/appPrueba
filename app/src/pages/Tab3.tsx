import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonDatetime, IonButton, IonText } from '@ionic/react';
import React, { useState } from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [daysDifference, setDaysDifference] = useState<number | null>(null);

  const calculateDaysDifference = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const differenceInTime = end.getTime() - start.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setDaysDifference(differenceInDays);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="date-picker-container">
          <IonItem>
            <IonLabel>Fecha de inicio</IonLabel>
            <IonDatetime
              presentation='date'
              value={startDate}
              onIonChange={(e) => setStartDate(e.detail.value?.toString() || '')}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Fecha de fin</IonLabel>
            <IonDatetime
              presentation='date'
              value={endDate}
              onIonChange={(e) => setEndDate(e.detail.value?.toString() || '')}
            />
          </IonItem>
          <IonButton expand="full" onClick={calculateDaysDifference}>
            Calcular diferencia en días
          </IonButton>
          {daysDifference !== null && (
            <IonText className="result-text">
              Diferencia en días: {daysDifference} días
            </IonText>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
