import { ComponentPropsWithoutRef, ReactNode } from "react";
import s from "./Page.module.css";

type PageProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

export const Page = ({ children, className }: PageProps) => {
  return (
    <div className={`${s.page} ${className ? className : ""}`}>{children}</div>
  );
};
