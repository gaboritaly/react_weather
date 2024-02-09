import { InputHTMLAttributes, forwardRef } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ChildrenProps {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", children, ...props }: InputProps, ref) => {
    return (
      <input className={`input ${className}`} {...props} ref={ref}>
        {children}
      </input>
    );
  }
);

export default Input;
