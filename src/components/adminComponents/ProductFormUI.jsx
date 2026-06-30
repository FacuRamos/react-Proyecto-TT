import { Link } from "react-router-dom";
import "./admin.css";

export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit
}) => {
  return (
    <div className="form-container">
      <h2 className="form-title">Cargar Nuevo Producto</h2>

      {errors.general && (
        <div className="form-error-general">
          {errors.general}
        </div>
      )}

      <form onSubmit={onSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">Nombre del Producto</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={onChange}
            disabled={loading}
            className="form-input"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={onChange}
            disabled={loading}
            min="0"
            step="0.01"
            className="form-input"
          />
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={onChange}
            disabled={loading}
            rows="4"
            className="form-textarea"
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="file">Imagen del Producto</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={onFileChange}
            disabled={loading}
            className="form-file-input"
          />
          {errors.file && <span className="error-message">{errors.file}</span>}
        </div>

        <div className="form-actions">
          <button
            type="submit"
            disabled={loading}
            className="btn-submit"
          >
            {loading ? "Cargando..." : "Crear Producto"}
          </button>
          
          <Link
            to="/admin/dashboard"
            className="btn-cancel"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};