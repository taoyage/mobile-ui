import React from 'react';
import './styles/index.scss';
export interface MaskProps {
  /** 是否可见 */
  visible: boolean;
  /** 点击蒙层触发回调 */
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties & Partial<Record<'--z-index' | '--background', string>>;
}
declare const Mask: React.FC<MaskProps>;
export default Mask;
