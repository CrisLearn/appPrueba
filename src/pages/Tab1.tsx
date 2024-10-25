import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonAvatar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon, IonList, IonChip } from '@ionic/react';
import { mailOutline, callOutline, locationOutline, briefcaseOutline, schoolOutline } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  // Ruta de la imagen almacenada en el directorio 'public'
  const profilePicture = "/imagenes/imgperfil.jpg"; // Ruta relativa a 'public', sin necesidad de usar .env

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Curriculum Vitae</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {/* Foto de Perfil */}
            <IonCol size="4">
              <IonAvatar className="avatar">
                <img src={profilePicture} alt="Foto de perfil" />
              </IonAvatar>
            </IonCol>
            {/* Información personal */}
            <IonCol size="8">
              <IonItem lines="none">
                <IonLabel>
                  <h2><strong>Cristian Ermel Usiña Chulde</strong></h2>
                  <p>Tecnólogo Superior en Desarrollo de Software</p>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonIcon icon={mailOutline} slot="start" />
                <IonLabel>cusinac@ducech.com</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonIcon icon={callOutline} slot="start" />
                <IonLabel>+593 969338189</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonIcon icon={locationOutline} slot="start" />
                <IonLabel>Quito, Ecuador</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>

          {/* Experiencia Profesional */}
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon icon={briefcaseOutline} slot="start" />
                    <IonLabel><h3>Experiencia Profesional</h3></IonLabel>
                  </IonItem>
                  <IonList>
                    <IonItem lines="none">
                      <IonLabel>
                        <h4>Desarrollador Junior</h4>
                        <p>Compañía CVP (2021 - Presente)</p>
                        <p>Responsable del desarrollo de aplicaciones web y sistemas</p>
                      </IonLabel>
                    </IonItem>
                    <IonItem lines="none">
                      <IonLabel>
                        <h4>Sistemas de la Información</h4>
                        <p>Manta Hills S.C.C. (2022 - Presente)</p>
                        <p>Control de inventario electrónico</p>
                      </IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Educación */}
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon icon={schoolOutline} slot="start" />
                    <IonLabel><h3>Educación</h3></IonLabel>
                  </IonItem>
                  <IonList>
                    <IonItem lines="none">
                      <IonLabel>
                        <h4>Tecnología Superior en Desarrollo de Software</h4>
                        <p>Escuela Politéctica Nacional (2022 - Presente)</p>
                      </IonLabel>
                    </IonItem>
                  </IonList>
                  <IonList>
                    <IonItem lines="none">
                      <IonLabel>
                        <h4>Bachiller Técnico Automotriz</h4>
                        <p>Institución Educativa Central Técnico (2012 - 2018)</p>
                      </IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Habilidades */}
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <IonLabel><h3>Habilidades</h3></IonLabel>
                  <IonChip color="primary">
                    <IonLabel>JavaScript</IonLabel>
                  </IonChip>
                  <IonChip color="secondary">
                    <IonLabel>React</IonLabel>
                  </IonChip>
                  <IonChip color="tertiary">
                    <IonLabel>Node.js</IonLabel>
                  </IonChip>
                  <IonChip color="success">
                    <IonLabel>Ionic</IonLabel>
                  </IonChip>
                  <IonChip color="warning">
                    <IonLabel>HTML/CSS</IonLabel>
                  </IonChip>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
