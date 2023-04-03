import InternalDialog from './dialog';
import confirm from './confirm';
export type { DialogProps } from './dialog';
declare type InternalDialogType = typeof InternalDialog;
export interface DialogInterface extends InternalDialogType {
  confirm: typeof confirm;
}
declare const Dialog: DialogInterface;
export default Dialog;
