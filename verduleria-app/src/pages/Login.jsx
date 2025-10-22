import React, { useState } from 'react';
import Nav from '../components/Nav'; 
import { Link, useNavigate } from 'react-router-dom'; // Para redirigir

function Login() {
  // 1. Hook de Estado (useState): Creamos una variable de estado para cada input
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Hook para navegar entre páginas

  // 2. Función para manejar el envío (simulación de autenticación)
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // SIMULACIÓN DE LÓGICA DE AUTENTICACIÓN
    if (correo === 'test@carvelu.cl' && password === '1234') {
      alert('¡Inicio de sesión exitoso!');
      // Redirige al usuario a la página de productos (Explorar)
      navigate('/explorar'); 
    } else {
      setError('Credenciales incorrectas. Intenta con test@carvelu.cl / 1234');
    }
    
    // Limpieza de campos (opcional)
    setPassword('');
  };

  return (
    <>
      <Nav /> 
      
      <div className="container my-5">
        <h1 className="text-center mb-4">Iniciar Sesión</h1>
        
        {/* Mostrar mensaje de error si existe */}
        {error && (
          <div className="alert alert-danger" role="alert" style={{ maxWidth: '450px', margin: 'auto' }}>
            {error}
          </div>
        )}

        {/* 3. El formulario controlado: El envío es manejado por handleSubmit */}
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" style={{ maxWidth: '450px', margin: 'auto' }}>
          
          <div className="mb-3">
            <label htmlFor="correoElectronico" className="form-label">Correo Electrónico:</label>
            <input 
              type="email" 
              id="correoElectronico" 
              className="form-control" // Clase Bootstrap
              required 
              value={correo} // Enlazado al estado 'correo'
              onChange={(e) => setCorreo(e.target.value)} // Actualiza el estado
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input 
              type="password" 
              id="password" 
              className="form-control" // Clase Bootstrap
              required 
              value={password} // Enlazado al estado 'password'
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
            />
          </div>
          
          <button type="submit" className="btn btn-primary w-100 mb-3">Iniciar Sesión</button>
          
          <div className="text-center">
            <Link to="/registro">¿No tienes cuenta? Regístrate aquí.</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;