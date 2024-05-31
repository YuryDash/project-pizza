import s from './aside.module.scss'
import {Link} from "react-scroll";

type Props = any

export function Aside({}: Props) {
  return (
    <aside className={s.aside}>
      <Link to="offers" smooth={true} duration={500} className={s.navigation}>
        Hot Offers
      </Link>
      <Link to="pizza" smooth={true} duration={500} className={s.navigation}>
        Pizza
      </Link>
      <Link to="snacks" smooth={true} duration={500} className={s.navigation}>
        Snacks
      </Link>
      <Link to="deserts" smooth={true} duration={500} className={s.navigation}>
        Desserts
      </Link>
      <Link to="drinks" smooth={true} duration={500} className={s.navigation}>
        Drinks
      </Link>
      <Link to="sauces" smooth={true} duration={500} className={s.navigation}>
        Sauces
      </Link>
    </aside>
  )
}


