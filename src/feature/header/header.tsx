import s from './header.module.scss'

import {DeliveryTime, Label, Location, Phone} from "../../components/icon-components";
import {ButtonWithIcon, DialogModal} from "../../components";
import {ChangeCity} from "../../components/dialog/dialog-items";

type Props = any

export function Header({}: Props) {

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
      {/*<ButtonWithIcon title={'test'} image={<Phone fill={'white'}/>}/>*/}
    </header>
  );
}
