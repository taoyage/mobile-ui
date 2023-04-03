import InternalDialog from '@/dialog/dialog';
import confirm from '@/dialog/confirm';

export type { DialogProps } from '@/dialog/dialog';

type InternalDialogType = typeof InternalDialog;

export interface DialogInterface extends InternalDialogType {
  confirm: typeof confirm;
}

const Dialog = InternalDialog as DialogInterface;

Dialog.confirm = confirm;

export default Dialog;
