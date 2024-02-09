import { ButtonHTMLAttributes } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ChildrenProps {}

const Button = ({ className = "", children, ...props }: ButtonProps) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
