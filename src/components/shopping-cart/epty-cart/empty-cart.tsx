
import s from './empty-cart.module.scss'
import {sadCat} from "../../../assets/sliderArr.ts";
import {NavLink} from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <img src={sadCat} alt={'sad-cat'}/>
      </div>
      <div className={s.wrong}>
        your cart is empty :(
      </div>
      <NavLink to={'/'} className={s.backButton}>back to main</NavLink>
    </div>
  )
}