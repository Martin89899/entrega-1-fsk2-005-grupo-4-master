// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ExplorarM from "./pages/ExplorarM";
import Carrito from "./pages/Carrito";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Ubicacion from "./pages/Ubicacion";

function App() {
  return (
    <Router>
      {/* 🔹 Navbar fijo en todas las páginas */}
      <Nav />

      {/* 🔹 Contenedor principal con margen superior */}
      <main className="container mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<ExplorarM />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
