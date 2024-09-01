// components/BotonCancelar.tsx
import React from "react";

interface BotonCancelarProps {
  onClick: () => void;
}

const BotonCancelar: React.FC<BotonCancelarProps> = ({ onClick }) => {
  return (
    <button className="btn btn-cancel" onClick={onClick}>
      Cancelar
    </button>
  );
};

export default BotonCancelar;
