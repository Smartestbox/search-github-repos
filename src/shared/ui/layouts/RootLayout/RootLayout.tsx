import { Outlet } from "react-router";
import { Header } from "@/shared/ui/layouts/RootLayout/Header/Header";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./RootLayout.module.css";

export const RootLayout = () => {
  return (
    <div className={s.layout}>
      <Header className={s.header} />
      <main className={s.content}>
        <Outlet />
        <ToastContainer
          position="top-center"
          autoClose={4000}
          limit={3}
          theme="dark"
          transition={Flip}
        />
      </main>
    </div>
  );
};
