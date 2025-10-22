let productos = [
  { 
    id: 1, 
    nombre: 'Lomo Vetado', 
    categoria: 'Carnes', 
    precio: 15990, 
    stock: 10, 
    isSale: false, 
    img: 'Lomo_Vetado.webp' 
  },
  { 
    id: 2, 
    nombre: 'Huachalomo', 
    categoria: 'Carnes', 
    precio: 8690, 
    originalPrice: 10990, 
    stock: 25, 
    isSale: true, 
    img: 'Huachalomo.webp' 
  },
  { 
    id: 3, 
    nombre: 'Tomate Fresco', 
    categoria: 'Verduras', 
    precio: 1490, 
    originalPrice: 1990, 
    stock: 100, 
    isSale: true, 
    img: 'tomate.jpg' 
  },
  { 
    id: 4, 
    nombre: 'Lechuga Romana', 
    categoria: 'Verduras', 
    precio: 1390, 
    stock: 50, 
    isSale: false, 
    img: 'lechuga.jpg' 
  },
  // Añade aquí más productos si deseas, siguiendo la misma estructura.
];

/**
 * Operación CRUD: Leer (Read) - Obtiene todos los productos.
 */
export const getAllProducts = () => {
  return productos;
};

/**
 * Operación CRUD: Crear (Create)
 */
export const addProduct = (nuevoProducto) => {
  const newId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
  const productWithId = { ...nuevoProducto, id: newId };
  productos.push(productWithId);
  return productWithId;
};

/**
 * Operación CRUD: Actualizar (Update)
 */
export const updateProduct = (id, updatedFields) => {
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos[index] = { ...productos[index], ...updatedFields };
    return productos[index];
  }
  return null;
};

/**
 * Operación CRUD: Eliminar (Delete)
 */
export const deleteProduct = (id) => {
  const initialLength = productos.length;
  productos = productos.filter(p => p.id !== id);
  return productos.length < initialLength;
};
