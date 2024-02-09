import { FC } from "react";
import classes from "./LabelWithIcon.module.css";

type LabelWithIconProps = {
  label: string;
  icon: string;
};
const LabelWithIcon: FC<LabelWithIconProps> = ({ label, icon }) => {
  return (
    <div className={`${classes.container}`}>
      <img src={icon} alt="" className={`${classes.icon}`} />
      <p>{label}</p>
    </div>
  );
};

export default LabelWithIcon;
