import { ChildrenProps } from "../../types/ChildrenProps";
/**
 * Example Content warpper component, you can customize how you want
 *
 * @component
 * @param {ReactNode} children - Any type what ReactNode include string|JSX.Element| etc..
 * @returns {JSX.Element} The rendered Content component.
 *
 * @example
 * <Content>
      <CustomForm />
  </Content>;
 */
const Content = ({ children }: ChildrenProps) => {
  return <div className="content">{children}</div>;
};

export default Content;
