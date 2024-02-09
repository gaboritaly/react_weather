import { ChildrenProps } from "../../types/ChildrenProps";

const Header = ({ children }: ChildrenProps) => {
  return <div className="header">{children}</div>;
};
export default Header;
