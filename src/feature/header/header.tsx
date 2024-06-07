import s from './header.module.scss'

import {Basket, DeliveryTime, Label, Location, Phone} from "../../components/icon-components";
import {ButtonWithIcon, DialogModal} from "../../components";
import {ChangeCity} from "../../components/dialog/dialog-items";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {NavLink} from "react-router-dom";

type Props = any

export function Header({}: Props) {
  const buyValues = useSelector<RootState, number>(state => state.cartReducer?.pizza.length)
  console.log(buyValues)

  return (
    <header className={s.header}>
      <Label/>
      <DialogModal
        originator={<ButtonWithIcon title={'Change City'} image={<Location/>}/>}
        content={<ChangeCity/>}
        dialogTitle={'Change City'}
      />
      <DialogModal
        dialogTitle={'Delivery time'}
        originator={<ButtonWithIcon title={'Delivery Time'} image={<DeliveryTime/>}></ButtonWithIcon>}/>
      <DialogModal dialogTitle={'Call'}
                   originator={<ButtonWithIcon title={'2992'} image={<Phone fill={'white'}/>}></ButtonWithIcon>}/>


      <NavLink to={'/shopping-cart'}><ButtonWithIcon
        title={buyValues === 0 ? 'Shopping Cart' : `Shopping Cart: ${buyValues}`}
        image={<Basket/>}/></NavLink>
    </header>
  );
}
