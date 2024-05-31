import {Indicator, Item} from "@radix-ui/react-radio-group";
import s from './radio-item.module.scss'

type Props = {
  label: string
  value: string
  id: string
}

export const RadioItem = ({label, value, id}:Props) => {
  return (
    <div className={s.wrapper}>
      <Item className={s.item} value={value} id={id}>
        <Indicator className={s.indicator}/>
      </Item>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}