// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔹 Componentes
import Nav from "./components/Nav";

// 🔹 Páginas principales
import Home from "./pages/Home";
import ExplorarM from "./pages/ExplorarM";
import Carrito from "./pages/Carrito";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Ubicacion from "./pages/Ubicacion";

// 🔹 Nuevas vistas de la rúbrica
import Categorias from "./pages/Categorias";
import Ofertas from "./pages/Ofertas";
import Checkout from "./pages/Checkout";
import CompraExitosa from "./pages/CompraExitosa";
import CompraFallida from "./pages/CompraFallida";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<ExplorarM />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ubicacion" element={<Ubicacion />} />

        {/* Rutas nuevas de la rúbrica */}
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compra-exitosa" element={<CompraExitosa />} />
        <Route path="/compra-fallida" element={<CompraFallida />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
