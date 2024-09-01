// components/BotonBuscar.tsx
import React from "react";

interface BotonBuscarProps {
  onClick: () => void;
}

const BotonBuscar: React.FC<BotonBuscarProps> = ({ onClick }) => {
  return (
    <button className="btn btn-search" onClick={onClick}>
      Buscar
    </button>
  );
};

export default BotonBuscar;
