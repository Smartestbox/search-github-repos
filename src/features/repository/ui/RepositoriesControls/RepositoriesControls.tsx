import { repositoriesStore } from "@/entities/repository";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useRef } from "react";
import { SortDirections } from "@/entities/repository/model/repositories.types";
import { selectSortReposOptions } from "@/shared/constants/selectOptions";
import { Select } from "@/shared/ui/components/Select/Select";
import s from "./RepositoriesControls.module.css";

type RepositoryFiltersProps = {
  className?: string;
  typeOfRepositories?: "all" | "favorites";
};

export const RepositoriesControls = observer(
  ({ className, typeOfRepositories = "all" }: RepositoryFiltersProps) => {
    const {
      repositoriesFound,
      favoriteRepositoriesCount,
      sortRepositories,
      setSortDirection,
    } = repositoriesStore;

    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
      setSortDirection(selectRef.current?.value as SortDirections);
    }, []);

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      sortRepositories(e.target.value as SortDirections);
      setSortDirection(selectRef.current?.value as SortDirections);
    };

    return (
      <div className={`${s.filtersWrapper} ${className ? className : ""}`}>
        <div className={s.info}>
          {typeOfRepositories === "all"
            ? `Result: ${repositoriesFound} repositories`
            : `Favorites: ${favoriteRepositoriesCount}`}
        </div>
        <Select
          options={selectSortReposOptions}
          onChange={handleSelectChange}
          ref={selectRef}
        />
      </div>
    );
  },
);
