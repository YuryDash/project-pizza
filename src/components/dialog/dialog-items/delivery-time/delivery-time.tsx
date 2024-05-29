import s from './delivery-time.module.scss'

type Props = {
  test: any
}

export function DeliveryTime({test}: Props) {
  return (
    <div className={s.wrapper}>
      {test}
    </div>
  )
}

