import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Nav() {
  const { totalItems } = useContext(CartContext); // 👈 cantidad dinámica del carrito

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-success" to="/">
          Carvelu
        </Link>

        {/* Botón colapsable (modo responsive) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú principal */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/explorar">
                Nuestros productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registro">
                Registrarse
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Iniciar Sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ubicacion">
                Ubicación
              </Link>
            </li>
          </ul>
        </div>

        {/* Carrito a la derecha */}
        <div className="d-flex align-items-center">
          <Link to="/carrito" className="btn btn-outline-dark position-relative">
            🛒 Carrito
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
              style={{ fontSize: "0.75rem" }}
            >
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
