import React from 'react';
import './styles/slider.scss';
export interface SliderRef {
  setValue: (value: number) => void;
}
export interface SliderProps {
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 滑块当前值 */
  value?: number;
  /** 步距 */
  step?: number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 拖拽滑块时回调 */
  onChange?: (value: number) => void;
  /** 滑动后或点击滑块后取值，类似touchEnd */
  onChangeAfter?: (value: number) => void;
  /** 自定义style样式变量 */
  style?: React.CSSProperties &
    Partial<Record<'--slider-bar-fill-color' | '--slider-background-color' | '--slider-bar-height', string>>;
}
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<SliderRef>>;
export default Slider;
