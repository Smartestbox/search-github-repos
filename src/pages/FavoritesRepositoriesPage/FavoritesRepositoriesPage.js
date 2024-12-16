import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Page } from "@/shared/ui/components/Page/Page";
import { Link } from "react-router";
import { ArrowLeftNav } from "@/shared/ui/icons";
import { RepositoriesControls } from "@/features/repository";
import { RepositoriesList } from "@/widgets/repository";
import s from "./FavoritesRepositoriesPage.module.css";
export const FavoritesRepositoriesPage = () => {
    return (_jsxs(Page, { children: [_jsxs(Link, { to: "/", className: s.arrowBack, children: [_jsx(ArrowLeftNav, {}), " Back"] }), _jsx(RepositoriesControls, { typeOfRepositories: "favorites", className: s.repositoriesControls }), _jsx(RepositoriesList, { className: s.repositoriesList, typeOfRepositories: "favorites" })] }));
};
