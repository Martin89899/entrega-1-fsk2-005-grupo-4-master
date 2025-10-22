// src/Login.test.jsx

// 1. Importaciones necesarias de las librerías que instalaste
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, describe, it } from 'vitest';

// 2. Importación del componente Login.jsx (Asegúrate de que esta ruta es correcta)
import Login from './pages/Login'; 

// Función auxiliar para envolver el componente en el Router
const setup = () => {
  render(
    <BrowserRouter>
      {/* Necesitamos envolver el componente que usa Nav (con <Link>) en el Router */}
      <Login /> 
    </BrowserRouter>
  );
};

// 3. Inicio del bloque de pruebas (similar a Jasmine 'describe')
describe('Componente Login', () => {

  // PRUEBA 1: Verificar el renderizado básico
  it('Debe renderizar el título "Iniciar Sesión"', () => {
    setup();
    // Busca el texto exacto del h1
    const titleElement = screen.getByText('Iniciar Sesión'); 
    expect(titleElement).toBeInTheDocument();
  });

  // PRUEBA 2: Verificar la presencia de los campos de formulario
  it('Debe renderizar los campos de Correo Electrónico y Contraseña', () => {
    setup();
    
    // Busca los inputs por su etiqueta (más robusto que buscar por ID)
    const emailLabel = screen.getByLabelText(/Correo Electrónico/i);
    const passwordLabel = screen.getByLabelText(/Contraseña/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  // PRUEBA 3: Verificar que el botón de envío exista y contenga el texto
  it('Debe renderizar el botón "Iniciar Sesión"', () => {
    setup();
    // Busca el botón por su rol y nombre (texto)
    const buttonElement = screen.getByRole('button', { name: /Iniciar Sesión/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
