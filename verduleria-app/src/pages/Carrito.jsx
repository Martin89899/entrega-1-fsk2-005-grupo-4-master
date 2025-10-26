import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Carrito() {
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCarrito(JSON.parse(savedCart));
      } catch {
        console.error("Error al leer el carrito desde localStorage");
      }
    }
  }, []);

  // Guardar cambios automáticamente
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(carrito));
  }, [carrito]);

  // Función para formatear precio
  const formatPrice = (price) => {
    if (!price || isNaN(price)) return "$0";
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Eliminar producto del carrito
  const removeItem = (id) => {
    const updated = carrito.filter(item => item.id !== id);
    setCarrito(updated);
  };

  // Calcular total
  const totalGeneral = carrito.reduce((sum, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 1);
    return sum + itemTotal;
  }, 0);

  // Calcular cantidad total
  const cartItemCount = carrito.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <div className="cart-container" style={{
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '10px',
      margin: '100px auto',
      maxWidth: '900px'
    }}>
      <h1 className="text-center mb-4" style={{ color: '#198754' }}>
        🛒 Mi Carrito ({cartItemCount} producto{cartItemCount !== 1 ? 's' : ''})
      </h1>

      {carrito.length === 0 ? (
        <div className="text-center my-5">
          <p className="fs-5">Tu carrito está vacío.</p>
          <Link to="/explorar" className="btn btn-success">Ir a productos</Link>
        </div>
      ) : (
        <table className="table table-bordered align-middle text-center">
          <thead className="table-success">
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map(item => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{formatPrice(item.price)}</td>
                <td>{item.quantity}</td>
                <td>{formatPrice(item.price * item.quantity)}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="fw-bold">
            <tr>
              <td colSpan="3" className="text-end">Total General:</td>
              <td colSpan="2">{formatPrice(totalGeneral)}</td>
            </tr>
          </tfoot>
        </table>
      )}

      {carrito.length > 0 && (
        <div className="text-end mt-4">
          <Link to="/checkout" className="btn btn-success">
            Finalizar compra
          </Link>
        </div>
      )}
    </div>
  );
}

export default Carrito;
