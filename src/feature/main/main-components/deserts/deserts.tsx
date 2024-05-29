import s from './deserts.module.scss'

type Props = {
  test: any
}

export function Deserts({test}: Props) {
  return (
    <div className={s.wrapper}>
      {test}
    </div>
  )
}

