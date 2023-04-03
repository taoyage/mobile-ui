import React from 'react';
export interface ImageProps {
  /** 图片地址 */
  src: string;
  /** 图片描述 */
  alt?: string;
  /** 图片宽度 */
  width?: number | string;
  /** 图片高度 */
  height?: number | string;
  /** 加载时的占位图地址 */
  loading?: string;
  style?: React.CSSProperties;
  /** 是否懒加载 */
  lazy?: boolean;
  /** 图片填充模式 */
  fit?: 'contain' | 'cover' | 'fill' | 'scale-down';
  className?: string;
  /** 图片点击事件 */
  onClick?: (event: React.MouseEvent<HTMLImageElement, Event>) => void;
  /** 图片加载失败时回调 */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /** 图片加载完成时回调 */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
declare const Image: React.FC<ImageProps>;
export default Image;
