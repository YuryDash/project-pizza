import {ReactNode} from "react";
import s from './button-with-icon.module.scss'

type Props = {
  title: string | ReactNode
  image: ReactNode
}

export function ButtonWithIcon({title, image}: Props) {
  return (
    <button className={s.wrapper}>
      <div className={s.image}>{image}</div>
      <div className={s.title}>{title}</div>
    </button>
  );
}

