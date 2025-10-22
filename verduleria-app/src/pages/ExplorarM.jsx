import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import CardProducto from '../components/CardProducto';
import { getAllProducts } from '../data/productData'; // Importa la función de LECTURA (CRUD)

function ExplorarM() {
  // 1. ESTADO: Hook para guardar la lista de productos y el carrito de compras
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState(() => {
    // Inicializa el carrito leyendo desde el localStorage (para persistencia)
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. EFECTO: Hook para cargar los datos solo la primera vez (componentDidMount)
  useEffect(() => {
    // Lee los datos simulados de la fuente CRUD
    const data = getAllProducts(); 
    setProductos(data);
  }, []);

  // 3. EFECTO: Hook para guardar el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(carrito));
  }, [carrito]);


  // 4. FUNCIÓN: Maneja la lógica del botón "Agregar al carrito"
  const handleAddToCart = (productToAdd) => {
    // Lógica para actualizar el ESTADO del carrito (similar a tu JS antiguo)
    setCarrito(prevCart => {
      const existingItem = prevCart.find(item => item.id === productToAdd.id);

      if (existingItem) {
        // Si ya existe, actualiza la cantidad (Actualizar: U de CRUD simulado)
        return prevCart.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si no existe, añade el nuevo producto (Crear: C de CRUD simulado)
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };
  
  // Calcula el total de ítems para mostrar en el carrito (lo que antes hacía updateCartCount)
  const cartItemCount = carrito.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* El componente Nav ahora necesitaría saber cuántos ítems hay */}
      <Nav cartCount={cartItemCount} /> 
      
      <div className="container">
        <h1 className="text-center mt-3">Explorar Productos</h1>
        
        {/* Se usó el código de la sección de comentarios que ya habíamos transformado */}
        {/* Aquí puedes re-introducir el componente de Comentarios.jsx */}
        
        {/* SECCIÓN DE PRODUCTOS */}
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            {/* GRID de Bootstrap para el diseño responsivo */}
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              
              {/* Mapea los productos desde el ESTADO (Requisito: Lectura de datos) */}
              {productos.map(product => (
                <CardProducto 
                  key={product.id} // Clave única obligatoria para React
                  product={product} 
                  onAddToCart={handleAddToCart} // Pasamos la función del carrito como PROP
                />
              ))}

              {/* Si no hay productos, mostramos un mensaje condicional */}
              {productos.length === 0 && <p>No hay productos disponibles.</p>}

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ExplorarM;