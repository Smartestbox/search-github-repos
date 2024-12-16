import { jsx as _jsx } from "react/jsx-runtime";
import { PreviewRepositoryCard } from "@/features/repository";
import { repositoriesStore } from "@/entities/repository";
import { observer } from "mobx-react-lite";
import { Spinner } from "@/shared/ui/components/Spinner/Spinner";
import s from "./RepositoriesList.module.css";
export const RepositoriesList = observer(({ className, typeOfRepositories = "all" }) => {
    const { repositories, isLoading, toggleFavorite, favoritesRepositories } = repositoriesStore;
    const handleFavoriteClick = (id) => {
        toggleFavorite(id);
    };
    const repositoriesList = typeOfRepositories === "all" ? repositories : favoritesRepositories;
    if (isLoading) {
        return _jsx(Spinner, { className: s.spinner });
    }
    return (_jsx("div", { className: `${s.cardsList} ${className ? className : ""}`, children: repositoriesList.map((r) => (_jsx(PreviewRepositoryCard, { repoUrl: r.html_url, id: r.id, avatar: r.owner.avatar_url, stars: r.stargazers_count, forks: r.forks_count, userName: r.owner.login, repoName: r.full_name, handleFavoriteClick: handleFavoriteClick, isFavorite: r.isFavorite }, r.id))) }));
});
