import { Page } from "@/shared/ui/components/Page/Page";
import { Link, useParams } from "react-router";
import { ArrowLeftNav } from "@/shared/ui/icons";
import { DetailedRepositoryCard } from "@/features/repository/ui/DetailedRepositoryCard/DetailedRepositoryCard";
import s from "./RepositoryPage.module.css";

export const RepositoryPage = () => {
  const { favoriteId } = useParams<{ favoriteId: string }>();

  return (
    <Page>
      <Link to={"/"} className={s.arrowBack}>
        <ArrowLeftNav /> Back
      </Link>
      <DetailedRepositoryCard
        className={s.detailedRepositoryCard}
        id={favoriteId}
      />
    </Page>
  );
};
