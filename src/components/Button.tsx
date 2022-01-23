import React from "react";

interface ButtonProps {
  onClickVisible: () => void;
}

function Button({onClickVisible}: ButtonProps) {
  return(
    <button onClick={onClickVisible}>Desabilitar Visualização</button>
  )
} 

export default Button;