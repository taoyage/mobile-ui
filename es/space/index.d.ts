import React from 'react';
import './styles/index.scss';
export interface SpaceProps {
  /** 间距方向 */
  direction?: 'horizontal' | 'vertical';
  /** 交叉轴对齐方式 */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /** 主轴对齐方式	 */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  /** 是否自动换行，仅在 horizontal 时有效	 */
  wrap?: boolean;
  /** 是否渲染为块级元素	 */
  block?: boolean;
  /** 间距大小，设为数组时则分别设置水平方向和垂直方向的间距大小 */
  gap?: number | string | [number | string, number | string];
  /** 元素点击事件 */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: React.ReactNode;
}
declare const Space: React.FC<SpaceProps>;
export default Space;
