import React from 'react';
import './styles/grid-item.scss';
export interface GridItemProps {
  /** 跨度 */
  span?: number;
  /** 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
}
declare const GridItem: React.FC<GridItemProps>;
export default GridItem;
