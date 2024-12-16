import HeartFilled from "@/shared/ui/icons/HeartFilled";
import {
  Archive,
  CommandLine,
  CopyURL,
  Edit,
  Folder,
  GithubFork,
  GithubStarFilled,
  HeartOutlined,
} from "@/shared/ui/icons";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { IconRoundWrapper } from "@/shared/ui/components/IconRoundWrapper/IconRoundWrapper";
import { observer } from "mobx-react-lite";
import { getDate } from "@/shared/lib/getDate";
import { repositoriesStore } from "@/entities/repository";
import s from "./DetailedRepositoryCard.module.css";

type DetailedRepositoryCardProps = {
  className?: string;
  id: string;
};

export const DetailedRepositoryCard = observer(
  ({ className, id }: DetailedRepositoryCardProps) => {
    const { getRepository, toggleFavorite } = repositoriesStore;

    const repository = getRepository(+id);

    if (!repository) {
      return <h1 className={s.errorTitle}>Repository not found</h1>;
    }

    const {
      language,
      archived,
      isFavorite,
      html_url,
      owner: { avatar_url },
      full_name,
      description,
      stargazers_count,
      forks_count,
      created_at,
      updated_at,
    } = repository;

    const handleFavoriteClick = () => {
      toggleFavorite(Number(id));
    };

    return (
      <div className={`${s.card} ${className ? className : ""}`}>
        <h2 className={s.title}>Профиль</h2>
        <div className={s.header}>
          <img
            src={avatar_url}
            alt="avatar"
            width={125}
            height={125}
            className={s.avatar}
          />
          <div className={s.about}>
            <p className={s.shortPath}>{full_name}</p>
            <p className={s.repoDescription}>{description}</p>
          </div>
        </div>
        <div className={s.statistics}>
          <div className={s.statistic}>
            <IconRoundWrapper>
              <GithubStarFilled />
            </IconRoundWrapper>
            <div className={s.statInfo}>
              <span className={s.metaName}>{stargazers_count}</span>
              <span className={s.metaDescription}>Количество звезд</span>
            </div>
          </div>
          <div className={s.statistic}>
            <IconRoundWrapper>
              <GithubFork />
            </IconRoundWrapper>
            <div className={s.statInfo}>
              <span className={s.metaName}>{forks_count}</span>
              <span className={s.metaDescription}>Количество форков</span>
            </div>
          </div>
          <div className={s.statistic}>
            <IconRoundWrapper>
              <Archive />
            </IconRoundWrapper>
            <div className={s.statInfo}>
              <span className={s.metaName}>{archived ? "Да" : "Нет"}</span>
              <span className={s.metaDescription}>В архиве</span>
            </div>
          </div>
          <div className={s.statistic}>
            <IconRoundWrapper>
              <CommandLine />
            </IconRoundWrapper>
            <div className={s.statInfo}>
              <span className={s.metaName}>{language}</span>
              <span className={s.metaDescription}>Язык</span>
            </div>
          </div>
          <div className={s.statistic}>
            <IconRoundWrapper>
              <Folder />
            </IconRoundWrapper>
            <div className={s.statInfo}>
              <span className={s.metaName}>{getDate(created_at)}</span>
              <span className={s.metaDescription}>Создано</span>
            </div>
          </div>
          <div className={s.statistic}>
            <IconRoundWrapper>
              <Edit />
            </IconRoundWrapper>
            <div className={s.statInfo}>
              <span className={s.metaName}>{getDate(updated_at)}</span>
              <span className={s.metaDescription}>Изменено</span>
            </div>
          </div>
        </div>
        <div className={s.divider} />
        <div className={s.aboutFooter}>
          <div className={s.actions}>
            <button className={s.actionWrapper} onClick={handleFavoriteClick}>
              {isFavorite ? <HeartFilled /> : <HeartOutlined />}
            </button>
            <CopyToClipboard
              text={html_url}
              onCopy={() =>
                toast.info(`Repository's address copied`, { autoClose: 1000 })
              }
            >
              <button className={s.actionWrapper}>
                <CopyURL />
              </button>
            </CopyToClipboard>
          </div>
          <Link to={html_url} target={"_blank"} className={s.linkToRepo}>
            Открыть репозиторий
          </Link>
        </div>
      </div>
    );
  },
);
