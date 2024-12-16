import { TextField } from "@/shared/ui/components/TextField/TextField";
import { useDebounce } from "@/shared/lib/useDebounce";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { repositoriesStore } from "@/entities/repository";
import s from "./RepositorySearch.module.css";

type RepositorySearchProps = {
  className?: string;
};

export const RepositorySearch = observer(
  ({ className, ...rest }: RepositorySearchProps) => {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search);

    const { getRepositories } = repositoriesStore;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      inputRef.current?.focus();
    }, []);

    useEffect(() => {
      if (debouncedSearch) {
        getRepositories(debouncedSearch);
      }
    }, [getRepositories, debouncedSearch]);

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    };

    return (
      <TextField
        type={"search"}
        className={`${s.searchInput} ${className ? className : ""}`}
        value={search}
        onChange={handleChangeSearch}
        ref={inputRef}
        {...rest}
      />
    );
  },
);
