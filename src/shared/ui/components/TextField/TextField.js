import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import s from "./TextField.module.css";
export const TextField = forwardRef(({ className, ...rest }, ref) => {
    return (_jsx("input", { className: `${s.input} ${className ? className : ""}`, placeholder: "Search", ref: ref, ...rest }));
});
