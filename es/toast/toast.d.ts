import React from 'react';
import './styles/index.scss';
export interface ToastProps {
  /** 提示持续时间 */
  duration?: number;
  /** Toast文本内容 */
  content: React.ReactNode;
  /** Toast关闭后的回调 */
  afterClose?: () => void;
  /** 卸载当前Toast的DOM */
  unmount?: () => void;
  /** Toast图标 */
  icon?: 'success' | 'fail' | 'loading' | React.ReactNode;
}
declare const Toast: React.FC<ToastProps>;
export default Toast;
