import s from "./pizza.module.scss";

type Props = {
  test: any
}

export function Pizza({test}: Props) {
  return (
    <div className={s.wrapper}>
      <h2>pizza</h2>
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

