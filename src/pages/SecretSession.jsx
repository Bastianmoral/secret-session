import { useState } from 'react';
import './SecretSession.css';
import SmokeEffect from '../components/SmokeEffect'; // Importa el efecto de humo
import logosecret from '../assets/logo_secretsmoke.png';
import mapa from '../assets/csc estacionamientos.jpg'; // Importa el mapa

const SecretSession = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

  const closeModal = () => setShowModal(false);

  return (
    <div className="secret-session-container">
      <div className="left-column">
        <img src={logosecret} alt="Candado" className="logo-image" />
      </div>
      <div className="right-column">
        <div className="session-info">
          <p><i className="fas fa-calendar-alt"></i> Tu entrada a la Secret Session ha sido confirmada para este 15 de octubre.</p>
          <p>Prepárate para una experiencia privada, incomparable y llena de misterio.</p>

          <p><i className="fas fa-clock"></i> Horario de 16:00 a 22:00 hrs.</p>

          <p>
            <i className="fas fa-map-marked-alt"></i> 
            Lugar: Casa San Cristóbal, Av. Perú 631, Recoleta. Santiago RM. 
            <br></br>
            <a href="#!" onClick={() => setShowModal(true)}>Ver mapa estacionamiento.</a> {/* Modal para ambas versiones */}
          </p>

          <p><i className="fas fa-tshirt"></i> Dress code: Dress to impress.</p>

          <p><i className="fas fa-envelope"></i> Esta invitación es intransferible, recuerda que el acceso es únicamente con lista.</p>
        </div>
      </div>

      <SmokeEffect /> {/* Añadimos el efecto de humo */}

      {/* Modal para mostrar la imagen en dispositivos móviles y de escritorio */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={mapa} alt="Mapa de Estacionamientos" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SecretSession;
