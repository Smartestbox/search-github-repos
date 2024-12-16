import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowDown } from "@/shared/ui/icons";
import { forwardRef } from "react";
import s from "./Select.module.css";
export const Select = forwardRef(({ className, options, ...rest }, ref) => {
    return (_jsxs("div", { className: `${s.selectWrapper} ${className ? className : ""}`, children: [_jsx("select", { className: s.select, ref: ref, ...rest, children: options?.map((option) => (_jsx("option", { children: option.value }, option.value))) }), _jsx(ArrowDown, { className: s.arrowDown })] }));
});
