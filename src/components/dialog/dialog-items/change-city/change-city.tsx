import s from './change-city.module.scss'

type Props = {
  test: any
}

export function ChangeCity({test}: Props) {
  return (
    <div className={s.wrapper}>
      {test}
    </div>
  )
}

