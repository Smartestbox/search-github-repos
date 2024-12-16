import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { repositoriesStore } from "@/entities/repository";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { selectSortReposOptions } from "@/shared/constants/selectOptions";
import { Select } from "@/shared/ui/components/Select/Select";
import s from "./RepositoriesControls.module.css";
export const RepositoriesControls = observer(({ className, typeOfRepositories = "all" }) => {
    const { repositoriesFound, favoriteRepositoriesCount, sortRepositories, setSortDirection, } = repositoriesStore;
    const selectRef = useRef(null);
    useEffect(() => {
        setSortDirection(selectRef.current?.value);
    }, []);
    const handleSelectChange = (e) => {
        sortRepositories(e.target.value);
        setSortDirection(selectRef.current?.value);
    };
    return (_jsxs("div", { className: `${s.filtersWrapper} ${className ? className : ""}`, children: [_jsx("div", { className: s.info, children: typeOfRepositories === "all"
                    ? `Result: ${repositoriesFound} repositories`
                    : `Favorites: ${favoriteRepositoriesCount}` }), _jsx(Select, { options: selectSortReposOptions, onChange: handleSelectChange, ref: selectRef })] }));
});
