import * as Dialog from '@radix-ui/react-dialog';
import s from './dialog.module.scss'
import {ReactNode} from "react";

type Props = {
  originator: ReactNode
  content?: ReactNode
}

export const DialogDemo = ({originator, content}:Props) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={s.ButtonViolet}>{originator}</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={s.DialogOverlay} />
      <Dialog.Content className={s.DialogContent}>
        <Dialog.Title className={s.DialogTitle}>Change city</Dialog.Title>
        <div style={{ display: 'flex', flexDirection:'column', marginTop: 25, justifyContent: 'center', }}>
          <Dialog.Close asChild>
            <div className={s.ButtonGreen}>{content}</div>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className={s.IconButton} aria-label="Close">
            X
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

