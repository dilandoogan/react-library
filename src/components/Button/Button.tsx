import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  disabled?: boolean;
}

const Button = ({label,disabled=false}: ButtonProps) => {
  return <button disabled={disabled}>{label}</button>;
};

export default Button;
