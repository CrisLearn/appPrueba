import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore Project <a target="_blank" rel="noopener noreferrer" href="https://github.com/CrisLearn/appPrueba.git">Cristian Usiña</a></p>
    </div>
  );
};

export default ExploreContainer;
