import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CardProducto({ product }) {
  const { addToCart } = useContext(CartContext);

  const formatPrice = (price) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);

  const getImageUrl = (imgName) => `/img/${imgName}`;
  const isSale = product.isSale;

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {isSale && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            ¡Oferta!
          </div>
        )}

        <img
          className="card-img-top"
          src={getImageUrl(product.img)}
          alt={product.nombre}
        />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.nombre}</h5>
            {isSale ? (
              <>
                <span className="text-muted text-decoration-line-through">
                  {formatPrice(product.originalPrice)}
                </span>{" "}
                {formatPrice(product.price)}
              </>
            ) : (
              formatPrice(product.price)
            )}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => addToCart(product)}
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
