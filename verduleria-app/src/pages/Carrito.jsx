import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

function Carrito() {
  const [carrito, setCarrito] = useState([]);

  // Cargar el carrito cuando el componente se monta
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCarrito(JSON.parse(savedCart));
    }
  }, []);

  // Guarda el carrito en localStorage cada vez que cambia (persistencia)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(carrito));
  }, [carrito]);


  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Función para eliminar un ítem del carrito
  const removeItem = (idToRemove) => {
    setCarrito(prevCart => {
      return prevCart.filter(item => item.id !== idToRemove);
    });
  };

  // Calcula el total general y el contador de ítems
  const totalGeneral = carrito.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = carrito.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <>
      <Nav cartCount={cartItemCount} /> 

      <div className="cart-container" style={{ 
        backgroundColor: '#ffffff', 
        padding: '20px', 
        borderRadius: '10px', 
        margin: '30px auto', 
        maxWidth: '900px'
      }}>
        
        <h1 style={{ color: '#000000' }}>Mi Carrito</h1>
        
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {carrito.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  Tu carrito está vacío. <Link to="/explorar">Ir a productos</Link>
                </td>
              </tr>
            ) : (
              carrito.map(item => (
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
              ))
            )}
          </tbody>
          <tfoot>
            <tr className="total-row">
              <td colSpan="3" className="text-end">Total General:</td>
              <td colSpan="2">{formatPrice(totalGeneral)}</td>
            </tr>
          </tfoot>
        </table>

        <div className="text-end">
          <Link to="/checkout" className="btn btn-success">Comprar</Link>
        </div>
      </div>
    </>
  );
}

export default Carrito;