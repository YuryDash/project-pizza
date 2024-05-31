import {Root} from '@radix-ui/react-radio-group';
import s from './radio-group.module.scss'
import {RadioItem} from "./radio-item/radio-item.tsx";

type RadioValue = {
  id: string
  label: string
  value: string
}
const RADIO_VALUES:RadioValue[] = [
  {id: '1', label: 'Minsk', value: 'Minsk'},
  {id: '2', label: 'Vitebsk', value: 'Vitebsk'},
  {id: '3', label: 'Gomel', value: 'Gomel'},
  {id: '4', label: 'Grodno', value: 'Grodno'},
  {id: '5', label: 'Brest', value: 'Brest'},
  {id: '6', label: 'Mogilev', value: 'Mogilev'},
  ]

export const RadioGroup = () => {
  const mappedValues = RADIO_VALUES.map( el => {
    return (
      <RadioItem id={el.id} label={el.label} value={el.value}  />
    )
  } )

  return (
  <form>
    <Root className={s.radioGroupRoot} defaultValue="default" aria-label="View density">
      {mappedValues}
    </Root>
  </form>
)};

