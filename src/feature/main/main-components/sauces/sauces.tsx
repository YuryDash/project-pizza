import s from "./sauces.module.scss";

type Props = {
  test: any
}

export function Sauces({test}: Props) {
  return (
    <div className={s.wrapper}>
      {test}
    </div>
  );
}

