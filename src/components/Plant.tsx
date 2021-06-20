import { useEffect, useState } from "react";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

type PlantProps = {
  name: string;
  qty: number;
  color: string;
  nickname: string;
  height: string;
  link: string;
  track: (name: string) => void;
}

type PlantModalProps = {
  modalIsOpen: boolean;
  closeModal: any;
  plant: PlantProps;
}

const PlantModal: React.FC<PlantModalProps> = ({ modalIsOpen, closeModal, plant }) => {
  const { name } = plant;
  
  return (<Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <button onClick={closeModal}>close</button>

    <h2>{name}</h2>

    <dl>
      {Object.keys(plant).map(key => (
        <>
          <dt>{key}</dt>
          <dd>{plant[key as keyof PlantProps]}</dd>
        </>
      ))}
  </dl>
  </Modal>);
};

const Plant: React.FC<PlantProps> = (props) => {
  const { name, track } = props;

  const trackPlant = () => {
    track(name);
  };

  useEffect(() => {
    trackPlant();
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="tile">
      <button className="tile plant-button" type="button" onClick={openModal}>
        <span className="plant-button__name">{name}</span>
      </button>

      <PlantModal modalIsOpen={modalIsOpen} closeModal={closeModal} plant={props} />
    </div>
  );
};

export default Plant;
