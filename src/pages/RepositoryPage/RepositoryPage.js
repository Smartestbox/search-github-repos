import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Page } from "@/shared/ui/components/Page/Page";
import { Link, useParams } from "react-router";
import { ArrowLeftNav } from "@/shared/ui/icons";
import { DetailedRepositoryCard } from "@/features/repository/ui/DetailedRepositoryCard/DetailedRepositoryCard";
import s from "./RepositoryPage.module.css";
export const RepositoryPage = () => {
    const { favoriteId } = useParams();
    return (_jsxs(Page, { children: [_jsxs(Link, { to: "/", className: s.arrowBack, children: [_jsx(ArrowLeftNav, {}), " Back"] }), _jsx(DetailedRepositoryCard, { className: s.detailedRepositoryCard, id: favoriteId })] }));
};
