// components/BotonLimpiar.tsx
import React from "react";

interface BotonLimpiarProps {
  onClick: () => void;
}

const BotonLimpiar: React.FC<BotonLimpiarProps> = ({ onClick }) => {
  return (
    <button className="btn btn-clear" onClick={onClick}>
      Limpiar
    </button>
  );
};

export default BotonLimpiar;
