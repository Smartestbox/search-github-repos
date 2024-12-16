import { Link, NavLink, useLocation } from "react-router";
import { HeartFilledHeader, Logo, Profile } from "@/shared/ui/icons";
import { repositoriesStore } from "@/entities/repository";
import { observer } from "mobx-react-lite";
import s from "./Header.module.css";

type HeaderProps = {
  className?: string;
};

export const Header = observer(({ className }: HeaderProps) => {
  const { favoriteRepositoriesCount } = repositoriesStore;

  const location = useLocation();
  const currentPath = location.pathname;
  const isFavoritesPage = currentPath.includes("/favorites");

  return (
    <header className={`${s.header} ${className ? className : ""}`}>
      <div className={s.headerContent}>
        <Link to="/">
          <Logo />
        </Link>
        <div className={s.actions}>
          <div
            className={`${s.favoriteWrapper} ${isFavoritesPage ? s.favoritePage : ""}`}
          >
            <NavLink to="/favorites" className={s.favLink}>
              <HeartFilledHeader />
              <span
                className={`${s.favoritesCount} ${favoriteRepositoriesCount > 0 ? s.visible : ""}`}
              >
                {favoriteRepositoriesCount}
              </span>
            </NavLink>
          </div>
          <Profile />
        </div>
      </div>
    </header>
  );
});
