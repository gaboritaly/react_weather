import { FC } from "react";
import Content from "./components/Content";
import { Link } from "react-router-dom";
import { paths } from "../router/appRoutes";
import Button from "../common/ui/Button";
import { ChildrenProps } from "../types/ChildrenProps";

/**
 * Layout component, with back button
 *
 * @component
 * @param {ReactNode} children - Any type what ReactNode include string|JSX.Element| etc..
 * @returns {JSX.Element} The rendered LayoutWithBackButton component.
 *
 * @example
 * <LayoutWithBackButton>
      <CustomContent />
  </LayoutWithBackButton>;
 */
const LayoutWithBackButton: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <div className="column header">
        <Link to={paths.home}>
          <Button className="back-button" />
        </Link>
      </div>
      <Content>{children}</Content>
    </>
  );
};

export default LayoutWithBackButton;
