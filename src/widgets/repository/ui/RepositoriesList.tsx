import { PreviewRepositoryCard } from "@/features/repository";
import { repositoriesStore } from "@/entities/repository";
import { observer } from "mobx-react-lite";
import { Spinner } from "@/shared/ui/components/Spinner/Spinner";
import s from "./RepositoriesList.module.css";

type RepositoriesListProps = {
  className?: string;
  typeOfRepositories?: "all" | "favorites";
};

export const RepositoriesList = observer(
  ({ className, typeOfRepositories = "all" }: RepositoriesListProps) => {
    const { repositories, isLoading, toggleFavorite, favoritesRepositories } =
      repositoriesStore;

    const handleFavoriteClick = (id: number) => {
      toggleFavorite(id);
    };

    const repositoriesList =
      typeOfRepositories === "all" ? repositories : favoritesRepositories;

    if (isLoading) {
      return <Spinner className={s.spinner} />;
    }

    return (
      <div className={`${s.cardsList} ${className ? className : ""}`}>
        {repositoriesList.map((r) => (
          <PreviewRepositoryCard
            repoUrl={r.html_url}
            key={r.id}
            id={r.id}
            avatar={r.owner.avatar_url}
            stars={r.stargazers_count}
            forks={r.forks_count}
            userName={r.owner.login}
            repoName={r.full_name}
            handleFavoriteClick={handleFavoriteClick}
            isFavorite={r.isFavorite}
          />
        ))}
      </div>
    );
  },
);
