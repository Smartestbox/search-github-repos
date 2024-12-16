import { jsx as _jsx } from "react/jsx-runtime";
import s from "./IconRoundWrapper.module.css";
export const IconRoundWrapper = ({ children, className }) => {
    return (_jsx("div", { className: `${s.wrapper} ${className ? className : ""}`, children: children }));
};
