import React from "react";

interface ButtonProps {
  onClickVisible: () => void;
}

function Button({onClickVisible}: ButtonProps) {
  return(
    <button onClick={onClickVisible}>Visualização</button>
  )
} 

export default Button;