import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Page } from "@/shared/ui/components/Page/Page";
import { RepositoriesControls } from "@/features/repository";
import { RepositorySearch } from "@/features/repository";
import { RepositoriesList } from "@/widgets/repository";
import s from "./HomePage.module.css";
export const HomePage = () => {
    return (_jsxs(Page, { children: [_jsx(RepositorySearch, { className: s.search }), _jsx(RepositoriesControls, { className: s.filters }), _jsx(RepositoriesList, { className: s.repositoriesList })] }));
};
