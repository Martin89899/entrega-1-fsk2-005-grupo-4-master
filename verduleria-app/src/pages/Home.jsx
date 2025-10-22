import React from 'react';
import Nav from '../components/Nav';

function Home() {
  return (
    <>
      {/* 1. Navbar Reutilizable */}
      <Nav />
      <div className="container my-5">
        <h1 className="text-center mb-4">Verdulería Digital</h1>
        
        {/* 2. Contenido migrado de 'Sobre Nosotros' */}
        <section className="p-4 border rounded shadow-sm">
          <h2>Bienvenido a Carvelu</h2>
          <p>
            Carvelu nació en 2010, en el corazón de Los Pinos, Quilpué, Chile, como un pequeño emprendimiento familiar con un solo objetivo: llevar lo mejor del campo directamente a la mesa de nuestros vecinos.
          </p>
          <p>
            Comenzamos con un pequeño local de barrio, ofreciendo frutas y verduras frescas cosechadas por agricultores locales. Con el tiempo, fuimos creciendo gracias a la confianza de nuestros clientes y sumamos un área de carnicería, siempre manteniendo nuestro compromiso con la calidad y la frescura.
          </p>
          <p>
            Hoy, Carvelu es más que una tienda: somos un puente entre el trabajo de los agricultores y ganaderos de la zona y las familias que buscan alimentos frescos, sabrosos y a un precio justo.
          </p>
        </section>
        
        {/* Aquí puedes añadir más secciones de Bootstrap, como carruseles o tarjetas, para hacerlo más visual */}
        
      </div>
    </>
  );
}

export default Home;
