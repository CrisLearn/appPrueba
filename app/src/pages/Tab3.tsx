import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonDatetime, IonButton, IonText, IonCol, IonRow, IonGrid } from '@ionic/react';
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
          <IonTitle>Días de Diferencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Días de Diferencia</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid className="date-picker-container">
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonItem>
                <IonLabel position="stacked">Fecha de inicio</IonLabel>
                <IonDatetime
                  presentation="date"
                  value={startDate}
                  onIonChange={(e) => setStartDate(e.detail.value?.toString() || '')}
                />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonItem>
                <IonLabel position="stacked">Fecha de fin</IonLabel>
                <IonDatetime
                  presentation="date"
                  value={endDate}
                  onIonChange={(e) => setEndDate(e.detail.value?.toString() || '')}
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonButton expand="full" onClick={calculateDaysDifference}>
                Calcular diferencia en días
              </IonButton>
            </IonCol>
          </IonRow>

          {daysDifference !== null && (
            <IonRow>
              <IonCol size="12">
                <IonText className="result-text">
                  Diferencia en días: <strong>{daysDifference}</strong> días
                </IonText>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
