import {Root, Trigger, Portal, Overlay, Title, Close, Content} from '@radix-ui/react-dialog';
import s from './dialog.module.scss'
import {ReactNode} from "react";
import {ButtonLong} from "../buttons/button-long.tsx";

type Props = {
  originator: ReactNode
  content?: ReactNode
  dialogTitle: string
}

export const DialogModal = ({originator, content, dialogTitle}: Props) => (
  <Root>
    <Trigger asChild>
      <button className={s.ButtonViolet}>{originator}</button>
    </Trigger>
    <Portal>
      <Overlay className={s.DialogOverlay}/>
      <Content className={s.DialogContent}>
        <Title className={s.DialogTitle}>{dialogTitle}</Title>
        <div style={{display: 'flex', flexDirection: 'column', margin: '0px 0px 30px 0px', justifyContent: 'center',}}>
          <div className={s.ButtonGreen}>{content}</div>
        </div>
        <Close asChild>
          <button><ButtonLong title={'OK'} paddingX={'0px'} paddingY={'48px'}/></button>
        </Close>
        <Close asChild>
          <button className={s.IconButton} aria-label="Close">
            X
          </button>
        </Close>
      </Content>
    </Portal>
  </Root>
);

