import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router";
import { Header } from "@/shared/ui/layouts/RootLayout/Header/Header";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./RootLayout.module.css";
export const RootLayout = () => {
    return (_jsxs("div", { className: s.layout, children: [_jsx(Header, { className: s.header }), _jsxs("main", { className: s.content, children: [_jsx(Outlet, {}), _jsx(ToastContainer, { position: "top-center", autoClose: 4000, limit: 3, theme: "dark", transition: Flip })] })] }));
};
