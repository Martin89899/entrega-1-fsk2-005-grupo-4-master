// src/components/CardProducto.jsx

import React from 'react';

// El componente recibe 'product' y una función 'onAddToCart' como PROPS
function CardProducto({ product, onAddToCart }) {
  // Función para formatear el precio a moneda local (opcional, pero útil)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Reemplazamos las URL externas por las de la carpeta public si tienes las imágenes locales
  const getImageUrl = (imgName) => `/img/${imgName}`; 

  // La lógica de "Oferta" se basa en una propiedad del objeto 'product'
  const isSale = product.isSale; 

  return (
    // ¡Recuerda, todas las clases se cambian a 'className'!
    <div className="col mb-5">
      <div className="card h-100">
        
        {/* Lógica de Renderizado Condicional: Muestra la etiqueta de oferta solo si existe 'isSale' */}
        {isSale && (
          <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
            ¡Oferta!
          </div>
        )}
        
        {/* La imagen usa la URL de la prop, no una URL fija */}
        <img className="card-img-top" src={getImageUrl(product.img)} alt={product.nombre} /> 
        
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.nombre}</h5>
            
            {/* Manejo de Precios y Descuentos */}
            {isSale ? (
              <>
                <span className="text-muted text-decoration-line-through">{formatPrice(product.originalPrice)}</span>
                {' '}
                {formatPrice(product.price)}
              </>
            ) : (
              formatPrice(product.price)
            )}
          </div>
        </div>
        
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {/* El evento onClick llama a la función pasada por PROP */}
            <button 
              className="btn btn-outline-dark mt-auto" 
              onClick={() => onAddToCart(product)} // Llama a la función del carrito
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProducto;