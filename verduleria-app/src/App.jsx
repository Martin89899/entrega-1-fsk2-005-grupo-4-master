// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importamos los componentes de página que migramos
import Home from './pages/Home'; 
import Login from './pages/Login';
import Registro from './pages/Registro'; 
import ExplorarM from './pages/ExplorarM';
import Carrito from './pages/Carrito';
import Ubicacion from './pages/Ubicacion'; 

function App() {
  return ( // <- La sentencia return debe ir separada y al inicio
    // El Router permite la navegación entre las páginas sin recargar
    <Router>
      <Routes>
        {/* Rutas para todas las páginas de tu proyecto */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/explorar" element={<ExplorarM />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
      </Routes>
    </Router>
  ); // <- Fin de la función
}

export default App;

