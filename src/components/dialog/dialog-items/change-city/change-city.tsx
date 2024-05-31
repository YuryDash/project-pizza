import s from './change-city.module.scss'
import {RadioGroup} from "../../../radio-group/radio-group.tsx";

type Props = {
  test?: any
}

export function ChangeCity({}: Props) {
  return (
    <div className={s.wrapper}>
      <RadioGroup />
    </div>
  )
}

