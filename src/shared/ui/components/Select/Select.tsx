import { ArrowDown } from "@/shared/ui/icons";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import s from "./Select.module.css";

type BaseOption = {
  value: string;
};

type SelectProps = {
  className?: string;
  options?: readonly BaseOption[];
} & ComponentPropsWithoutRef<"select">;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, ...rest }, ref) => {
    return (
      <div className={`${s.selectWrapper} ${className ? className : ""}`}>
        <select className={s.select} ref={ref} {...rest}>
          {options?.map((option) => (
            <option key={option.value}>{option.value}</option>
          ))}
        </select>
        <ArrowDown className={s.arrowDown} />
      </div>
    );
  },
);
