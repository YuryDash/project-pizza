import s from './button-long.module.scss'
import {
  BaseValue,
  PizzaBase,
  PizzaSize,
  SizeValue
} from "../../feature/main/main-components/pizza/pizza-item/pizza-item.tsx";

type Props = {
  values: BaseValue | SizeValue
  size?: 'small' | 'medium' | 'large'
  paddingX?: string
  paddingY?: string
  fz?: string
  focused: boolean
  onButtonClick: (value: PizzaBase | PizzaSize) => void
  fullWidth?: boolean
  disable?: boolean
}

export function ButtonLong({values, paddingX, paddingY, fz, onButtonClick, focused, fullWidth, disable}: Props) {

  const styles = {
    padding: `${paddingX} ${paddingY}`,
    fontSize: fz ? `${fz}` : 'var(--font-size-xs)',
    backgroundColor: focused ? 'var(--color-info-500)' : 'var(--color-dark-500)',
    width: fullWidth ? '100%': ''
  }

  const stylesDisable = {
    backgroundColor: 'var(--color-light-900)',
    color: 'var(--color-light-100)',
    cursor: 'initial',
    padding: `${paddingX} ${paddingY}`,
    fontSize: fz ? `${fz}` : 'var(--font-size-xs)',
    width: fullWidth ? '100%': ''
  }

  return (
    <button
      onClick={() => onButtonClick(values.value)}
      className={s.wrapper}
      style={disable ? stylesDisable : styles}>
      <div className={s.title}>{values && values.title}</div>
    </button>
  );
}

