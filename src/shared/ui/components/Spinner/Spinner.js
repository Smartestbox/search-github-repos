import { jsx as _jsx } from "react/jsx-runtime";
import s from "./Spinner.module.css";
export const Spinner = ({ className }) => {
    return _jsx("span", { className: `${s.loader} ${className ? className : ""}` });
};
