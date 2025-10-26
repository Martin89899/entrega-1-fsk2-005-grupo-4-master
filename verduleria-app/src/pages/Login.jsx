import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (correo === 'test@carvelu.cl' && password === '1234') {
      alert('¡Inicio de sesión exitoso!');
      navigate('/explorar');
    } else {
      setError('Credenciales incorrectas. Intenta con test@carvelu.cl / 1234');
    }
    setPassword('');
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Iniciar Sesión</h1>

      {error && (
        <div className="alert alert-danger" role="alert" style={{ maxWidth: '450px', margin: 'auto' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" style={{ maxWidth: '450px', margin: 'auto' }}>
        <div className="mb-3">
          <label htmlFor="correoElectronico" className="form-label">Correo Electrónico:</label>
          <input 
            type="email"
            id="correoElectronico"
            className="form-control"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input 
            type="password"
            id="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">Iniciar Sesión</button>
        
        <div className="text-center">
          <Link to="/registro">¿No tienes cuenta? Regístrate aquí.</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
