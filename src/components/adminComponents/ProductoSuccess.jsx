import { Link, useParams } from "react-router-dom";
import "./admin.css";

export const ProductSucces = () => {
  const { id } = useParams();

  return (
    <div className="success-container">
      <div className="success-icon">✓</div>
      <h2 className="success-title">¡Producto Creado con Éxito!</h2>
      <p className="success-message">
        El producto ha sido guardado correctamente en la base de datos con el ID: <br />
        <span className="product-id-badge">{id}</span>
      </p>

      <div className="success-actions">
        <Link
          to="/admin/products/new"
          className="btn-success-action"
        >
          Cargar Otro Producto
        </Link>
        <Link
          to="/admin/dashboard"
          className="btn-success-secondary"
        >
          Volver al Panel de Control
        </Link>
      </div>
    </div>
  );
};