import React from 'react';
import './styles/index.scss';
export interface CardProps {
  /** header 左边区域 */
  title?: React.ReactNode;
  /** header 右边区域 */
  extra?: React.ReactNode;
  /** header 自定义类名 */
  headerClassName?: string;
  /** header 左边区域自定义类名 */
  titleClassName?: string;
  /** header 右边区域自定义类名 */
  extraClassName?: string;
  /** body 自定义类名 */
  bodyClassName?: string;
  /** 元素children */
  children?: React.ReactNode;
  /** header 区域点击事件 */
  onHeaderClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /** body 区域点击事件 */
  onBodyClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
declare const Card: React.FC<CardProps>;
export default Card;
