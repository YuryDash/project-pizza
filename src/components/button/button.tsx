import s from './button.module.scss'

type Props = {
  title: string
  size: 'small' | 'medium' | 'large'
}

export function ButtonWithIcon({title}: Props) {
  return (
    <button className={s.wrapper}>
      <div className={s.title}>{title}</div>
    </button>
  );
}

