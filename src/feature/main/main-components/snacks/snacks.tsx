import s from "./snacks.module.scss";

type Props = {
  test: any
}

export function Snacks({test}: Props) {
  return (
    <div className={s.wrapper}>
      <h1>snacks</h1>
      {test}
      <br/>
      {test}
      <br/>
      {test}
      <br/>
      {test}
      <br/>
      {test}
      <br/>
      {test}
      <br/>
      {test}
      <br/>
      {test}
      <br/>
      {test}
      <br/>
      {test}
      <br/>
      {test}
      <br/>
      {test}
    </div>
  );
}

