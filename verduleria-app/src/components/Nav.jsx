import React from 'react';
import { Link } from 'react-router-dom'; 

// CRÍTICO: El componente ahora recibe la prop 'cartCount'
function Nav({ cartCount }) {
  // Aseguramos que cartCount muestre 0 si no se ha pasado (valor por defecto)
  const count = cartCount || 0; 
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        
        {/* Usamos <Link> en lugar de <a> */}
        <Link className="navbar-brand" to="/explorar">Carvelu</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Menú centrado */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/explorar">Nuestros productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/registro">Registrarse</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/home">Sobre nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ubicacion">Ubicación</Link></li>
          </ul>

          {/* Botón de carrito */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/carrito" className="btn btn-outline-dark position-relative">
                <i className="bi-cart-fill me-1"></i> 
                Carrito
                {/* CRÍTICO: Aquí usamos la variable 'count' recibida por props */}
                <span className="badge bg-dark text-white ms-1 rounded-pill" id="cart-count">{count}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;