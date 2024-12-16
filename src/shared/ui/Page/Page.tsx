import s from './page.module.css'
import {PropsWithChildren} from "react";

export const Page = ({children}: PropsWithChildren) => {
  return <div className={s.root}>{children}</div>
}