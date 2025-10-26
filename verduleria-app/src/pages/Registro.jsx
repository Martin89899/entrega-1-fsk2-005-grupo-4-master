// src/pages/Registro.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mensaje, setMensaje] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje({ text: '', type: '' });

    if (!nombre.trim() || !correo.trim() || !password || !confirmPassword) {
      setMensaje({ text: 'Por favor, completa todos los campos.', type: 'danger' });
      return;
    }

    if (password !== confirmPassword) {
      setMensaje({ text: 'Las contraseñas no coinciden.', type: 'danger' });
      return;
    }

    if (!validarEmail(correo)) {
      setMensaje({ text: 'Por favor, ingresa un correo electrónico válido.', type: 'danger' });
      return;
    }

    setMensaje({ text: 'Registro exitoso. ¡Bienvenido a Carvelu!', type: 'success' });

    setTimeout(() => {
      setNombre('');
      setCorreo('');
      setPassword('');
      setConfirmPassword('');
      navigate('/login');
    }, 1500);
  };

  return (
    <main className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Registro de Usuario</h1>

          {mensaje.text && (
            <div className={`alert alert-${mensaje.type}`} role="alert">
              {mensaje.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <label htmlFor="nombreCompleto" className="form-label">Nombre Completo:</label>
              <input
                type="text"
                id="nombreCompleto"
                className="form-control"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

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

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña:</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">Registrarse</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Registro;
