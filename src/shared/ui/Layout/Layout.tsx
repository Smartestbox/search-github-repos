import {HeartFilledHeader, Logo, Profile} from "../icons";
import {Link, Outlet} from "react-router";
import s from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={s.layout}>
      <header className={s.header}>
        <div className={s.headerContent}>
          <Link to="/"><Logo/></Link>
          <div className={s.nav}>
            <Link to="/favorites">
              <HeartFilledHeader/>
            </Link>
            <Profile/>
          </div>
        </div>
      </header>
      <div className={s.content}>
        <Outlet/>
      </div>
    </div>
  );
};