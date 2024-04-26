// import React from 'react'

interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning";
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
