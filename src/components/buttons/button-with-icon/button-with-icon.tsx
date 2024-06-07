import React from 'react';
import s from './button-with-icon.module.scss'

type Props = {
  title: string | React.ReactNode
  image: React.ReactNode
  backColor?: string
  onClickHandler?: () => void
}

export function ButtonWithIcon({title, image, backColor, onClickHandler}: Props) {

  return (
    <div onClick={onClickHandler} className={s.wrapper} style={{backgroundColor: backColor}}>
      <div className={s.image}>{image}</div>
      <div className={s.title}>{title}</div>
    </div>
  );
}