import React from "react";

const EditProduct = ({ newProduct, handleChange }) => {
  return (
    <div>
      <form method="POST" onSubmit={newProduct}>
        <label>Nombre:</label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Peso:</label>
        <input type="number" name="weight" onChange={handleChange} />
        <label>Precio:</label>
        <input type="number" name="price" onChange={handleChange} />
        <label>Categoría:</label>
        <select name="category" onChange={handleChange}>
          <option value="Sabores">Sabores</option>
          <option value="Colores">Colores</option>
          <option value="Materias Primas">Materias Primas</option>
        </select>
        <label>Imagen:</label>
        {/* <img /> */}
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default EditProduct;
