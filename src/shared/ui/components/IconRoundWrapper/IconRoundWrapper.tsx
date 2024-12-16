import { ReactNode } from "react";
import s from "./IconRoundWrapper.module.css";

type IconWrapperProps = {
  className?: string;
  children: ReactNode;
};

export const IconRoundWrapper = ({ children, className }: IconWrapperProps) => {
  return (
    <div className={`${s.wrapper} ${className ? className : ""}`}>
      {children}
    </div>
  );
};
