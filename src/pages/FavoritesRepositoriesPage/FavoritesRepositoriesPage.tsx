import { Page } from "@/shared/ui/components/Page/Page";
import { Link } from "react-router";
import { ArrowLeftNav } from "@/shared/ui/icons";
import { RepositoriesControls } from "@/features/repository";
import { RepositoriesList } from "@/widgets/repository";
import s from "./FavoritesRepositoriesPage.module.css";

export const FavoritesRepositoriesPage = () => {
  return (
    <Page>
      <Link to={"/"} className={s.arrowBack}>
        <ArrowLeftNav /> Back
      </Link>
      <RepositoriesControls
        typeOfRepositories={"favorites"}
        className={s.repositoriesControls}
      />
      <RepositoriesList
        className={s.repositoriesList}
        typeOfRepositories={"favorites"}
      />
    </Page>
  );
};
