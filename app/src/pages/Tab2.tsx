import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const profilePicture = "/imagenes/imgperfil.jpg";
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorio de GitGub</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="image-container">
          <img src={profilePicture} alt="Foto de perfil" className="profile-image" />
        </div>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorio de GitGub</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Para Ingresar al Repositorio ingresar al siguiente enlace:" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
