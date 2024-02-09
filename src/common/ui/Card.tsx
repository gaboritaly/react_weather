import { HTMLAttributes } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";

interface CardProps extends HTMLAttributes<HTMLDivElement>, ChildrenProps {}
const Card = ({ className = "", children, ...props }: CardProps) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};
export default Card;
