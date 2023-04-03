import React from 'react';
import './styles/swiper-page-indicator.scss';
export interface SwiperPageIndicatorProps {
  /** 当前轮播图下标 */
  current: number;
  /** 轮播图数量 */
  total: number;
  indicatorClassName?: string;
}
declare const SwiperPageIndicator: React.FC<SwiperPageIndicatorProps>;
export default SwiperPageIndicator;
