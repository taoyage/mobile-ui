import React from 'react';
import './styles/swiper.scss';
export interface SwiperProps {
  /** 是否循环播放 */
  loop?: boolean;
  /** 是否自动播放 */
  autoplay?: boolean;
  /** 轮播间隔时间 */
  autoPlayInterval?: number;
  /** 默认显示第几张 */
  defaultIndex?: number;
  showIndicator?: boolean;
  indicatorClassName?: string;
  children: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties & Partial<Record<'--height' | '--width' | '--border-radius' | '--track-padding', string>>;
}
declare const Swiper: React.FC<SwiperProps>;
export default Swiper;
