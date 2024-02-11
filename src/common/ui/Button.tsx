import { ButtonHTMLAttributes } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ChildrenProps {}

/**
 * A simple button component extended by ButtonHTMLAttributes<HTMLButtonElement>,
 * in this case you can add a default button properties
 *
 * @component
 * @param {string} className - Can you add an extra class, default value is ""
 * @param {ReactNode} children - Any type what ReactNode include string|JSX.Element| etc..
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} buttonProps - Can add a deafult button properties.
 * @returns {JSX.Element} The rendered Button component.
 *
 * @example
 * // in this case we can set a deafult button property
 * const isButtonDisabled = false;
 * <Button onClick={() => console.log("Button clicked!")} disabled={isButtonDisabled}>Button label</Button>
 */
const Button = ({ className = "", children, ...buttonProps }: ButtonProps) => {
  return (
    <button className={`button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
