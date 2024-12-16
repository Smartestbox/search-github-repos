import { ComponentPropsWithoutRef, forwardRef } from "react";
import s from "./TextField.module.css";

type TextFieldProps = {
  className?: string;
} & ComponentPropsWithoutRef<"input">;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={`${s.input} ${className ? className : ""}`}
        placeholder="Search"
        ref={ref}
        {...rest}
      />
    );
  },
);
