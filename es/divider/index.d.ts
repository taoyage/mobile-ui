import React from 'react';
import './styles/index.scss';
export interface DividerProps {
  contentPosition?: 'left' | 'right' | 'center';
  /** 是否使用虚线 */
  dashed?: boolean;
  /** 水平还是垂直类型 */
  direction?: 'horizontal' | 'vertical';
  /** 是否使用 0.5px 线 */
  hairline?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties &
    Partial<Record<'--border-width' | '--border-padding' | '--text-color' | '--border-color', string>>;
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
