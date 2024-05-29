import s from "./drinks.module.scss";

type Props = {
  test: any
}

export function Drinks({test}: Props) {
  return (
    <div className={s.wrapper}>
      {test}
    </div>
  );
}

