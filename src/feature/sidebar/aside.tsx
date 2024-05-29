import s from './aside.module.scss'

type Props = any

export function Aside({}: Props) {
  return (
    <aside className={s.aside}>
      <nav className={s.navigation}>Pizza</nav>
      <nav className={s.navigation}>Snacks</nav>
      <nav className={s.navigation}>Desserts</nav>
      <nav className={s.navigation}>Drinks</nav>
      <nav className={s.navigation}>Sauces</nav>
    </aside>
  )
}


