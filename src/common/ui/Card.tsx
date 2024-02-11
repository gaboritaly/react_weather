import { HTMLAttributes } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";

interface CardProps extends HTMLAttributes<HTMLDivElement>, ChildrenProps {}
/**
 * Card wrapper component extended by HTMLAttributes<HTMLDivElement>,
 * in this case you can add a default div properties
 *
 * @component
 * @param {string} className - Can you add an extra class, default value is ""
 * @param {ReactNode} children - Any type what ReactNode include string|JSX.Element| etc..
 * @param {HTMLAttributes<HTMLDivElement>} divProps - Can add a deafult button properties.
 * @returns {JSX.Element} The rendered Card component.
 *
 * @example
 * const cardId = "1234";
 * const customClass = "red-background";
 * <Card id={cardId} className={customClass}><h1> content</h1></Card>
 */
const Card = ({ className = "", children, ...divProps }: CardProps) => {
  return (
    <div className={`card ${className}`} {...divProps}>
      {children}
    </div>
  );
};

export default Card;
