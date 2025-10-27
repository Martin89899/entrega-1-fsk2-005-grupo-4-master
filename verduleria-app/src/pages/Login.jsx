import React from "react";

function Login() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Iniciar Sesión</h2>

      <form className="card p-4 mx-auto shadow" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico:
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            required
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
