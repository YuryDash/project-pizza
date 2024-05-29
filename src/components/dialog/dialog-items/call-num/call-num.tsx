import s from './call-num.module.scss'

type Props = {
  test: any
}

export function CallNum({test}: Props) {
  return (
    <div className={s.wrapper}>
      {test}
    </div>
  )
}

