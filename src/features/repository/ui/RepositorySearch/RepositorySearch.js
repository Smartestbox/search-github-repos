import { jsx as _jsx } from "react/jsx-runtime";
import { TextField } from "@/shared/ui/components/TextField/TextField";
import { useDebounce } from "@/shared/lib/useDebounce";
import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { repositoriesStore } from "@/entities/repository";
import s from "./RepositorySearch.module.css";
export const RepositorySearch = observer(({ className, ...rest }) => {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search);
    const { getRepositories } = repositoriesStore;
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    useEffect(() => {
        if (debouncedSearch) {
            getRepositories(debouncedSearch);
        }
    }, [getRepositories, debouncedSearch]);
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    return (_jsx(TextField, { type: "search", className: `${s.searchInput} ${className ? className : ""}`, value: search, onChange: handleChangeSearch, ref: inputRef, ...rest }));
});
