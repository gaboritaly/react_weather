import { FC } from "react";
import Content from "./components/Content";
import { Link } from "react-router-dom";
import { paths } from "../router/appRoutes";
import Button from "../common/ui/Button";
import { ChildrenProps } from "../types/ChildrenProps";

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
