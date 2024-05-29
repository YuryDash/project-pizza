import s from "./snacks.module.scss";

type Props = {
  test: any
}

export function Snacks({test}: Props) {
  return (
    <div className={s.wrapper}>
      {test}
    </div>
  );
}

