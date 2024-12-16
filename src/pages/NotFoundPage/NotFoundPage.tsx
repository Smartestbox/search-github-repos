import { Page } from "@/shared/ui/components/Page/Page";
import NotFoundImage from "@/shared/ui/images/404.png";
import { Link } from "react-router";
import { ArrowLeftNav } from "@/shared/ui/icons";
import s from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <Page className={s.page}>
      <Link to={"/"} className={s.arrowBack}>
        <ArrowLeftNav /> Home
      </Link>
      <h1 className={s.title}>Страница не найдена</h1>
      <img src={NotFoundImage} alt="Page Not Found" width={500} />
    </Page>
  );
};
