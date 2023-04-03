import React from 'react';
import { MaskProps } from '../mask';
import { Action } from './dialog-action-button';
import './styles/index.scss';
export interface DialogProps {
  /** 对话框标题 */
  title?: React.ReactNode;
  /** 对话框内容 */
  content?: React.ReactNode;
  /** 显示隐藏 */
  visible?: boolean;
  actions?: Action[];
  maskStyle?: MaskProps['style'];
  /** 点击action后是否关闭 */
  closeOnAction?: boolean;
  /** Dialog关闭时的回调 */
  onClose?: () => void;
  /** 显示后回调 */
  afterShow?: () => void;
  /** 关闭后回调 */
  afterClose?: () => void;
  /** 点击action后回调 */
  onAction?: (action: Action, index: number) => void | Promise<void>;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
