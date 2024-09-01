import React, { useState } from "react";
import BotonBuscar from "../Components/BotonBuscar";
import BotonLimpiar from "../Components/BotonLimpiar";
import BotonCancelar from "../Components/BotonCancelar";
import "../App.css";

const ConsumoApi: React.FC = () => {
  const [carnet, setCarnet] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [estudiante, setEstudiante] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [seccion, setSeccion] = useState<string>("");

  const normalizeString = (str: string) => str.replace(/\s+/g, "");

  const handleSearch = () => {
    console.log("Buscando datos para el carnet:", carnet); // Debugging

    fetch(`https://test-deploy-12.onrender.com/estudiantes/`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos:", data); // Debugging

        // Normaliza el carnet ingresado
        const carnetNormalizado = normalizeString(carnet);

        // Encuentra el estudiante que coincide con el carnet normalizado
        const estudianteEncontrado = data.find(
          (item: any) => normalizeString(item.Carnet) === carnetNormalizado
        );

        if (estudianteEncontrado) {
          setId(estudianteEncontrado._id || "No disponible");
          setEstudiante(estudianteEncontrado.Estudiante || "No disponible");
          setEmail(estudianteEncontrado.Email || "No disponible");
          setSeccion(estudianteEncontrado.Seccion || "No disponible");
        } else {
          // Manejar el caso en el que no se encuentra el estudiante
          setId("No disponible");
          setEstudiante("No disponible");
          setEmail("No disponible");
          setSeccion("No disponible");
        }
      })
      .catch((error) => {
        console.error("Error al buscar el estudiante:", error);
        setId("Error al buscar");
        setEstudiante("Error al buscar");
        setEmail("Error al buscar");
        setSeccion("Error al buscar");
      });
  };

  const handleClear = () => {
    setCarnet("");
    setId("");
    setEstudiante("");
    setEmail("");
    setSeccion("");
  };

  const handleCancel = () => {
    console.log("Operación cancelada");
  };

  return (
    <div className="form-container">
      <h1>Consulta de alumnos</h1>
      <div className="form-group">
        <label>Carnet:</label>
        <input
          type="text"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>ID:</label>
        <input type="text" value={id} disabled />
      </div>
      <div className="form-group">
        <label>Estudiante:</label>
        <input type="text" value={estudiante} disabled />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" value={email} disabled />
      </div>
      <div className="form-group">
        <label>Sección:</label>
        <input type="text" value={seccion} disabled />
      </div>
      <div className="button-group">
        <BotonBuscar onClick={handleSearch} />
        <BotonLimpiar onClick={handleClear} />
        <BotonCancelar onClick={handleCancel} />
      </div>
    </div>
  );
};

export default ConsumoApi;
