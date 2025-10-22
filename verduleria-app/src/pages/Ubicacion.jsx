import React from 'react';
import Nav from '../components/Nav';

function Ubicacion() {
  return (
    <>
      <Nav />
      <div className="container my-5">
        <h1 className="text-center mb-4">Nuestra Ubicación</h1>
        
        <section className="p-4 border rounded shadow-sm">
          <h2>Cómo llegar</h2>
          <p>Visítanos en nuestra verdulería, aquí tienes el mapa:</p>
          
          {/* CRÍTICO: El iframe se inserta tal cual en JSX. */}
          <div style={{ height: '400px', width: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.060693512331!2d-70.64826878480164!3d-33.44888998076906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57b63f3d92b%3A0x64dd47cebb6a2b97!2sPlaza%20de%20Armas%20de%20Santiago!5e0!3m2!1ses!2scl!4v1691978249191!5m2!1ses!2scl"
              width="100%" 
              height="400" 
              style={{ border: 0 }} // Estilos inline en formato JS
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Verdulería Digital"
            >
            </iframe>
          </div>
        </section>
      </div>
    </>
  );
}

export default Ubicacion;
