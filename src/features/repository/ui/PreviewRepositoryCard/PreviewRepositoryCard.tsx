import {
  CopyURL,
  GithubFork,
  GithubStarFilled,
  HeartOutlined,
} from "@/shared/ui/icons";
import { Link } from "react-router";
import HeartFilled from "@/shared/ui/icons/HeartFilled";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import s from "./PreviewRepositoryCard.module.css";

type PreviewRepositoryCardProps = {
  avatar: string;
  stars: number;
  forks: number;
  userName: string;
  repoName: string;
  id: number;
  repoUrl: string;
  handleFavoriteClick: (id: number) => void;
  isFavorite: boolean;
};

export const PreviewRepositoryCard = ({
  avatar,
  stars,
  forks,
  userName,
  repoName,
  id,
  repoUrl,
  handleFavoriteClick,
  isFavorite,
}: PreviewRepositoryCardProps) => {
  return (
    <div className={s.card}>
      <div className={s.about}>
        <div className={s.aboutHeader}>
          <img
            alt={"avatar"}
            src={avatar}
            width={32}
            height={32}
            className={s.avatar}
          />
          <div className={s.statistics}>
            <div className={s.statWrapper}>
              <GithubStarFilled />
              <span>{stars}</span>
            </div>
            <div className={s.statWrapper}>
              <GithubFork />
              <span>{forks}</span>
            </div>
          </div>
        </div>
        <div className={s.aboutMain}>
          <span className={s.userName}>@{`${userName}`}</span>
          <span className={s.repoName}>{repoName}</span>
        </div>
      </div>
      <div className={s.aboutFooter}>
        <div className={s.actions}>
          <button
            className={s.actionWrapper}
            onClick={() => handleFavoriteClick(id)}
          >
            {isFavorite ? <HeartFilled /> : <HeartOutlined />}
          </button>
          <CopyToClipboard
            text={repoUrl}
            onCopy={() =>
              toast.info(`Repository's address copied`, { autoClose: 1000 })
            }
          >
            <button className={s.actionWrapper}>
              <CopyURL />
            </button>
          </CopyToClipboard>
        </div>
        <Link to={`/repositories/${id}`} className={s.linkToRepo}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};
