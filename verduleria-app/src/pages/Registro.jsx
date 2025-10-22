import React, { useState } from 'react';
import Nav from '../components/Nav'; 
import { useNavigate } from 'react-router-dom';

function Registro() {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Estado para manejar mensajes de error/éxito en la UI
  const [mensaje, setMensaje] = useState({ text: '', type: '' }); // type: 'danger' o 'success'
  const navigate = useNavigate();

  // Función de validación de email (tomada de tu JS original)
  const validarEmail = (email) => {
    // Expresión regular para email básico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setMensaje({ text: '', type: '' }); // Limpiamos mensajes

    // 1. Validación de campos vacíos (reforzamos)
    if (!nombre.trim() || !correo.trim() || !password || !confirmPassword) {
      setMensaje({ text: "Por favor, completa todos los campos.", type: 'danger' });
      return;
    }

    // 2. Validación de Contraseñas (Lógica de tu JS)
    if (password !== confirmPassword) {
      setMensaje({ text: "Las contraseñas no coinciden.", type: 'danger' });
      return;
    }
    
    // 3. Validación de Email (Lógica de tu JS)
    if (!validarEmail(correo)) {
      setMensaje({ text: "Por favor, ingresa un correo electrónico válido.", type: 'danger' });
      return;
    }
    
    // Si todo es válido: Simulación de registro exitoso
    setMensaje({ text: "Registro exitoso. ¡Bienvenido a Carvelu!", type: 'success' });
    
    // Limpieza de campos y redirección después de un breve delay
    setTimeout(() => {
        setNombre('');
        setCorreo('');
        setPassword('');
        setConfirmPassword('');
        navigate('/login'); // Redirigimos al usuario a iniciar sesión
    }, 1500);
  };

  return (
    <>
      <Nav /> 
      
      <div className="container my-5">
        <h1 className="text-center mb-4">Registro de Usuario</h1>
        
        {/* Renderizado Condicional de Mensajes (Error o Éxito) */}
        {mensaje.text && (
          <div className={`alert alert-${mensaje.type}`} role="alert" style={{ maxWidth: '450px', margin: 'auto', marginBottom: '1rem' }}>
            {mensaje.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" style={{ maxWidth: '450px', margin: 'auto' }}>
          
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
    </>
  );
}

export default Registro;
