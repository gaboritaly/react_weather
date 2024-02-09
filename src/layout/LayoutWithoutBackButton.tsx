import { FC } from "react";
import Content from "./components/Content";
import { ChildrenProps } from "../types/ChildrenProps";

const LayoutWithoutBackButton: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Content>{children} </Content>
    </>
  );
};

export default LayoutWithoutBackButton;
