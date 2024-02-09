import { ChildrenProps } from "../../types/ChildrenProps";

const Content = ({ children }: ChildrenProps) => {
  return <div className="content">{children}</div>;
};

export default Content;
