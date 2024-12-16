import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink, useLocation } from "react-router";
import { HeartFilledHeader, Logo, Profile } from "@/shared/ui/icons";
import { repositoriesStore } from "@/entities/repository";
import { observer } from "mobx-react-lite";
import s from "./Header.module.css";
export const Header = observer(({ className }) => {
    const { favoriteRepositoriesCount } = repositoriesStore;
    const location = useLocation();
    const currentPath = location.pathname;
    const isFavoritesPage = currentPath.includes("/favorites");
    return (_jsx("header", { className: `${s.header} ${className ? className : ""}`, children: _jsxs("div", { className: s.headerContent, children: [_jsx(Link, { to: "/", children: _jsx(Logo, {}) }), _jsxs("div", { className: s.actions, children: [_jsx("div", { className: `${s.favoriteWrapper} ${isFavoritesPage ? s.favoritePage : ""}`, children: _jsxs(NavLink, { to: "/favorites", className: s.favLink, children: [_jsx(HeartFilledHeader, {}), _jsx("span", { className: `${s.favoritesCount} ${favoriteRepositoriesCount > 0 ? s.visible : ""}`, children: favoriteRepositoriesCount })] }) }), _jsx(Profile, {})] })] }) }));
});
