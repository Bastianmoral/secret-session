import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LockPage from './components/LockPage';
import SecretSession from './pages/SecretSession';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LockPage />} />
        <Route path="/session" element={<SecretSession />} />
      </Routes>
    </Router>
  );
}

export default App;
