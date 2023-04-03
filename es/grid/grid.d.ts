import React from 'react';
import './styles/grid.scss';
export interface GridProps {
  /** 列数 */
  columns: number;
  /** 格子之间的间距 */
  gap?: number | string | [number | string, number | string];
  children?: React.ReactNode;
}
declare const Grid: React.FC<GridProps>;
export default Grid;
