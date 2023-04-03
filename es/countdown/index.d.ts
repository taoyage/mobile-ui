import React from 'react';
import './styles/index.scss';
export interface CountdownProps {
  /** 倒计时总时长，单位毫秒 */
  time: number;
  /** 倒计时格式 hh:mm:ss */
  format?: string;
  /** 结束文案 */
  endText?: string;
  /** 数字样式 */
  numberClassName?: string;
  /** 符号样式 */
  symbolClassName?: string;
  /** 结束文案样式 */
  endTextClassName?: string;
}
declare const Countdown: React.FC<CountdownProps>;
export default Countdown;
