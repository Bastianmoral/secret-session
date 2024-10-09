import './SecretSession.css';
import SmokeEffect from '../components/SmokeEffect'; // Importa el efecto de humo
import logosecret from '../assets/logo_secretsmoke.png';
import { useState } from 'react'; // Importamos el hook de estado

const SecretSession = () => {
  const [showModal, setShowModal] = useState(false);

  const isMobile = window.innerWidth <= 768; // Detectar si es un dispositivo móvil

  return (
    <div className="secret-session-container">
      <div className="left-column">
        <img src={logosecret} alt="Candado" className="logo-image" />
      </div>
      <div className="right-column">
        <div className="session-info">
          <p><i className="fas fa-calendar-alt"></i> Tu entrada a la Secret Session ha sido confirmada para este 15 de octubre</p>
          <p>Prepárate para una experiencia privada, incomparable y llena de misterio.</p>
          
          <p><i className="fas fa-clock"></i>Horario de 16:00 a 22:00 hrs</p>
          
          <p>
            <i className="fas fa-map-marked-alt"></i> 
            Lugar: Casa San Cristóbal, Av. Perú 631, Recoleta. Santiago RM. 
            <br></br>
            {isMobile ? (
              // Si es un dispositivo móvil, mostrar el botón para abrir el modal con la imagen
              <a href="#!" onClick={() => setShowModal(true)}>Ver mapa</a>
            ) : (
              // Si es un dispositivo no móvil, descargar el archivo
              <a href="src/assets/csc estacionamientos.jpg" download>Descargar mapa</a>
            )}
          </p>
          
          <p><i className="fas fa-tshirt"></i> Dress code: Dress to impress</p>
          
          <p><i className="fas fa-envelope"></i> Esta invitación es intransferible, recuerda que el acceso es únicamente con lista.</p>
        </div>
      </div>

      <SmokeEffect /> {/* Añadimos el efecto de humo */}

      {/* Modal para mostrar la imagen en dispositivos móviles */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content">
            <img src="src/assets/csc estacionamientos.jpg" alt="Mapa de estacionamientos" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SecretSession;
