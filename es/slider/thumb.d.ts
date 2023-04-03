import React from 'react';
import './styles/thumb.scss';
interface ThumbProps {
  value: number;
  min: number;
  max: number;
  /** 是否禁用 */
  disabled: boolean;
  /** slider滑动条的ref */
  trackRef: React.RefObject<HTMLDivElement>;
  /** 拖拽回调 */
  onDrag: (value: number) => void;
  /** TouchEnd回调 */
  onChangeAfter: (value: number) => void;
}
declare const Thumb: React.FC<ThumbProps>;
export default Thumb;
