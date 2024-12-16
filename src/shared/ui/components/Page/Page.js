import { jsx as _jsx } from "react/jsx-runtime";
import s from "./Page.module.css";
export const Page = ({ children, className }) => {
    return (_jsx("div", { className: `${s.page} ${className ? className : ""}`, children: children }));
};
