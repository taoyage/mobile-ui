import React from 'react';
import './styles/index.scss';
export interface PopupProps {
  /** 指定弹出的位置 */
  position?: 'left' | 'top' | 'bottom' | 'right';
  /** 内容区域style属性 */
  style?: React.CSSProperties;
  /** 内容区域类名 */
  className?: string;
  /** 是否可见 */
  visible: boolean;
  children?: React.ReactNode;
  /** 是否展示蒙层 */
  mask?: boolean;
  /** 点击蒙层回调 */
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /** 显示后回调 */
  afterShow?: () => void;
  /** 关闭后回调 */
  afterClose?: () => void;
}
declare const Popup: React.FC<PopupProps>;
export default Popup;
