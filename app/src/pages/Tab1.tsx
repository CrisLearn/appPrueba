import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonAvatar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon, IonList, IonChip } from '@ionic/react';
import { mailOutline, callOutline, locationOutline, briefcaseOutline, schoolOutline, americanFootball, footballOutline, gameController, film } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  const profilePicture = "/imagenes/imgperfil.jpg";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biografía Personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="4" className="avatar-col">
              <IonAvatar className="avatar">
                <img src={profilePicture} alt="Foto de perfil" />
              </IonAvatar>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem lines="none">
                <IonLabel>
                  <h2><strong>Información Personal</strong></h2>
                  <p>Nombre</p><h2><strong>Cristian Ermel Usiña Chulde</strong></h2>
                  <p>Fecha de Nacimiento</p><h2><strong>24 - 05 - 2000</strong></h2>
                  <p>Edad</p><h2><strong>24 años</strong></h2>
                  <p>Lugar de Nacimiento</p><h2><strong>Cristóbal Colón Carhi-Ecuador</strong></h2>
                  <p>Lugar de Residencia</p><h2><strong>Cotocollao Quito-Ecuador</strong></h2>
                </IonLabel>
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem lines="none">
                <IonLabel><h2><strong>Información de Contacto</strong></h2></IonLabel>
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

          {/* Educación */}
          <IonRow>
            <IonCol size="12">
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
                        <p>Escuela Politécnica Nacional (2022 - Presente)</p>
                      </IonLabel>
                    </IonItem>
                    <IonItem lines="none">
                      <IonLabel>
                        <h4>Bachiller Técnico Automotriz</h4>
                        <p>Institución Educativa Central Técnico (2012 - 2018)</p>
                      </IonLabel>
                    </IonItem>
                    <IonItem lines="none">
                      <IonLabel>
                        <h4>Educación Básica</h4>
                        <p>Escuela Fiscal Mixta "Galo Plaza Lasoo" (2006 - 2012)</p>
                      </IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Experiencia Profesional */}
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon icon={briefcaseOutline} slot="start" />
                    <IonLabel><h3>Información Profesional</h3></IonLabel>
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

          {/* Hobbies */}
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardContent>
                  <IonItem lines="none">
                    <IonIcon icon={americanFootball} slot="start" />
                    <IonLabel><h3>Hobbies</h3></IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonIcon icon={footballOutline} slot="start" />
                    <IonLabel>Fútbol</IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonIcon icon={gameController} slot="start" />
                    <IonLabel>VideoJuegos</IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonIcon icon={film} slot="start" />
                    <IonLabel>Películas</IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Habilidades */}
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardContent>
                  <IonLabel><h3>Habilidades de Software</h3></IonLabel>
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
