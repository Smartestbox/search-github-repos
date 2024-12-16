import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Page } from "@/shared/ui/components/Page/Page";
import NotFoundImage from "@/shared/ui/images/404.png";
import { Link } from "react-router";
import { ArrowLeftNav } from "@/shared/ui/icons";
import s from "./NotFoundPage.module.css";
export const NotFoundPage = () => {
    return (_jsxs(Page, { className: s.page, children: [_jsxs(Link, { to: "/", className: s.arrowBack, children: [_jsx(ArrowLeftNav, {}), " Home"] }), _jsx("h1", { className: s.title, children: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" }), _jsx("img", { src: NotFoundImage, alt: "Page Not Found", width: 500 })] }));
};
