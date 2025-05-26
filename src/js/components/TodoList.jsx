import React, { useState } from "react";

const ListaDeTareas = () => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [tareaHover, setTareaHover] = useState(null);

  const manejarCambio = (evento) => {
    setNuevaTarea(evento.target.value);
  };

  const manejarEnter = (evento) => {
    if (evento.key === "Enter" && nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  const eliminarTarea = (indiceAEliminar) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indiceAEliminar);
    setTareas(nuevasTareas);
  };

  return (
    <div className="contenedor-tareas">
      <h1 className="titulo">todos</h1>
      <input
        type="text"
        placeholder="Añadir una tarea"
        value={nuevaTarea}
        onChange={manejarCambio}
        onKeyDown={manejarEnter}
        className="entrada-tarea"
      />

      <ul>
        {tareas.length === 0 ? (
          <li className="mensaje-vacio">No hay tareas, añadir tareas</li>
        ) : (
          tareas.map((tarea, indice) => (
            <li
              key={indice}
              className="tarea-item"
              onMouseEnter={() => setTareaHover(indice)}
              onMouseLeave={() => setTareaHover(null)}
            >
              {tarea}
              {tareaHover === indice && (
                <button
                  className="boton-eliminar"
                  onClick={() => eliminarTarea(indice)}
                >
                  <i class="fas fa-times"></i>
                </button>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListaDeTareas;
