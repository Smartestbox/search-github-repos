import { Page } from "@/shared/ui/components/Page/Page";
import { RepositoriesControls } from "@/features/repository";
import { RepositorySearch } from "@/features/repository";
import { RepositoriesList } from "@/widgets/repository";
import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <Page>
      <RepositorySearch className={s.search} />
      <RepositoriesControls className={s.filters} />
      <RepositoriesList className={s.repositoriesList} />
    </Page>
  );
};
