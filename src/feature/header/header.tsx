import {Label} from '../../components/svg/label';
import s from './header.module.scss'
import {DialogDemo} from "../../components/dialog/dialog.tsx";
import {Location} from "../../components/svg/location.tsx";
import {DeliveryTime} from "../../components/svg/delivery-time.tsx";
import {Phone} from "../../components/svg/phone.tsx";
import {ButtonWithIcon} from "../../components/button-with-icon/button-with-icon.tsx";

type Props = any

const Test = ({}:Props) => {
  return (
    <>
      <div>'123123123'</div>
      <div>'123123123'</div>
      <div>'123123123'</div>
      <div>'123123123'</div>
      <div>'123123123'</div>
    </>
  )
}

export function Header({}: Props) {

  return (
    <header className={s.header}>
      <Label/>
      <DialogDemo
        originator={<ButtonWithIcon title={'Change City'}
                                    image={<Location/>}
        ></ButtonWithIcon>} content={<Test/>}/>
      <DialogDemo originator={<ButtonWithIcon title={'Delivery Time'} image={<DeliveryTime/>}></ButtonWithIcon>}/>
      <DialogDemo originator={<ButtonWithIcon title={'2992'} image={<Phone fill={'white'}/>}></ButtonWithIcon>}/>
      <ButtonWithIcon title={'test'} image={<Phone fill={'white'}/>}/>
    </header>
  );
}
