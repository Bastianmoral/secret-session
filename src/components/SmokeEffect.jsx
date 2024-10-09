import { useEffect } from 'react';
import './SmokeEffect.css'; // Creamos este archivo también

const SmokeEffect = () => {
  useEffect(() => {
    const createSmoke = (e) => {
      const smoke = document.createElement('div');
      smoke.className = 'smoke';
      document.getElementById('smoke-container').appendChild(smoke);

      // Posicionar la partícula de humo en la ubicación del cursor
      smoke.style.left = `${e.clientX}px`;
      smoke.style.top = `${e.clientY}px`;

      // Eliminar la partícula de humo después de que la animación termine
      smoke.addEventListener('animationend', () => {
        smoke.remove();
      });
    };

    window.addEventListener('mousemove', createSmoke);

    // Cleanup para eliminar el evento cuando se salga del componente
    return () => {
      window.removeEventListener('mousemove', createSmoke);
    };
  }, []);

  return <div id="smoke-container"></div>;
};

export default SmokeEffect;
