import s from "./Spinner.module.css";

type SpinnerProps = {
  className?: string;
};

export const Spinner = ({ className }: SpinnerProps) => {
  return <span className={`${s.loader} ${className ? className : ""}`}></span>;
};
