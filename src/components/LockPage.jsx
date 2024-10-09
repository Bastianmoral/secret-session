import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LockPage.css';
import SmokeEffect from '../components/SmokeEffect'; // Importa el efecto de humo
import Countdown from '../components/Countdown'; // Importa el countdown
import candadoImage from '../assets/candado mery.png';

const LockPage = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === 'secretsession2024') {
      navigate('/session');
    } else {
      alert('Código incorrecto');
    }
  };

  return (
    <div className="lock-page-container">
      <div className="left-column">
        <img src={candadoImage} alt="Candado" className="lock-image" />
      </div>
      <div className="right-column">
        <p className='invit-title'>Ingresa el código para acceder a la sesión secreta</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Ingresa el código"
            className="input-code"
          />
          <button type="submit" className="submit-button">Ingresar</button>
        </form>
      </div>
      <SmokeEffect /> {/* Añadimos el efecto de humo */}
      <Countdown /> {/* Añadimos el countdown */}
    </div>
  );
};

export default LockPage;
