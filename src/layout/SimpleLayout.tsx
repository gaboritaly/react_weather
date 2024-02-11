import { FC } from "react";
import Content from "./components/Content";
import { ChildrenProps } from "../types/ChildrenProps";

/**
 * Layout component
 *
 * @component
 * @param {ReactNode} children - Any type what ReactNode include string|JSX.Element| etc..
 * @returns {JSX.Element} The rendered SimpleLayout component.
 *
 * @example
 * <SimpleLayout>
    <>
      <Header />
      <CustomContent />
    </>
  </SimpleLayout>;
 */
const SimpleLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Content>{children} </Content>
    </>
  );
};

export default SimpleLayout;
