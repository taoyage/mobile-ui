import React from 'react';
import { DialogProps } from './dialog';
export declare type DialogConfirmProps = Omit<DialogProps, 'visible' | 'closeOnAtion' | 'actions'> & {
  confirmText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
  onClose?: () => void;
};
declare const confirm: (props: DialogConfirmProps) => Promise<boolean>;
export default confirm;
