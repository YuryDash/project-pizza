import s from "./pizza.module.scss";

type Props = {
  test: any
}

export function Pizza({test}: Props) {
  return (
    <div className={s.wrapper}>
      {test}
    </div>
  );
}

