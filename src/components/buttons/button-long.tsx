import s from './button-long.module.scss'

type Props = {
  title: string
  size?: 'small' | 'medium' | 'large'
  paddingX: string
  paddingY: string
}

export function ButtonLong({title, paddingX, paddingY}: Props) {
  return (
    <button className={s.wrapper} style={{padding: `${paddingX} ${paddingY}`}}>
      <div className={s.title}>{title}</div>
    </button>
  );
}

