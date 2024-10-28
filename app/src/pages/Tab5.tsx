import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/react';

const Tab5: React.FC = () => {
  const [a, setA] = useState<number | undefined>();
  const [b, setB] = useState<number | undefined>();
  const [c, setC] = useState<number | undefined>();
  const [roots, setRoots] = useState<string | null>(null);

  const calculateRoots = () => {
    if (a === undefined || b === undefined || c === undefined) {
      setRoots("Por favor ingrese todos los valores");
      return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setRoots(`Raíces reales: x1 = ${root1}, x2 = ${root2}`);
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      setRoots(`Raíz doble: x = ${root}`);
    } else {
      setRoots("Raíces complejas (no reales)");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora de raíces cuadráticas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Coeficiente a</IonLabel>
          <IonInput type="number" value={a} onIonChange={(e) => setA(parseFloat(e.detail.value!))}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Coeficiente b</IonLabel>
          <IonInput type="number" value={b} onIonChange={(e) => setB(parseFloat(e.detail.value!))}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Coeficiente c</IonLabel>
          <IonInput type="number" value={c} onIonChange={(e) => setC(parseFloat(e.detail.value!))}></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={calculateRoots}>
          Calcular Raíces
        </IonButton>
        {roots && (
          <IonText color="primary">
            <p>{roots}</p>
          </IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
