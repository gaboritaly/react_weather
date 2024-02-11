import { InputHTMLAttributes, forwardRef } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ChildrenProps {}

/**
 * Input component  extended by InputHTMLAttributes<HTMLInputElement>,
 * in this case you can add a default input properties
 *
 * @component
 * @param {string} className - Can you add an extra class, default value is ""
 * @param {InputHTMLAttributes<HTMLInputElement>} inputProps - Can add a deafult input properties.
 * @returns {JSX.Element} The rendered Input component.
 *
 * @example
 * const inputRef = useRef<HTMLInputElement | null>(null);
 * <InputRef ref={inputRef} type="password"/>;
 */
const InputRef = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...inputProps }: InputProps, ref) => {
    return <input className={`${className}`} {...inputProps} ref={ref}></input>;
  }
);

export default InputRef;
