import React from "react";

const NewProduct = ({ newProduct, handleText, handleImage }) => {
  return (
    <div>
      <form method="POST" onSubmit={newProduct}>
        <label>Nombre:</label>
        <input type="text" name="name" onChange={handleText} />
        <label>Peso:</label>
        <input type="number" name="weight" onChange={handleText} />
        <select name="measure" onChange={handleText}>
          <option value="gr">gr</option>
          <option value="ml">ml</option>
        </select>
        <label>Precio:</label>
        <input type="number" name="price" onChange={handleText} />
        <label>Categoría:</label>
        <select name="category" onChange={handleText}>
          <option value="Sabores">Sabores</option>
          <option value="Colores">Colores</option>
          <option value="Materias Primas">Materias Primas</option>
        </select>
        <label>Imagen:</label>
        <input type="file" onChange={handleImage} name="photo" />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default NewProduct;
