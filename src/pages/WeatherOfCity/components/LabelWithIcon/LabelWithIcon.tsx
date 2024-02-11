import { FC } from "react";
import classes from "./LabelWithIcon.module.css";

type LabelWithIconProps = {
  label: string;
  icon: string;
};
/**
 * LabelWithIcon component
 * Show the icon with associated label
 * This component using a custom component css
 *
 * @component
 * @param {string} label - Label to show
 * @param {string} src - Image content, can be an URL an SVG
 * @returns {JSX.Element} The rendered LabelWithIcon component.
 *
 * @example
 * const timezone = -1800;
 * <LabelWithIcon timezone={label:'Nice',icon:'hhhtp://....'} />
 */
const LabelWithIcon: FC<LabelWithIconProps> = ({ label, icon }) => {
  return (
    <div className={`${classes.container}`}>
      <img src={icon} alt="" className={`${classes.icon}`} />
      <p>{label}</p>
    </div>
  );
};

export default LabelWithIcon;
