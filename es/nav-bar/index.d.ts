import React from 'react';
import './styles/index.scss';
export interface NavBarProps {
  /** 点击返回区域后的回调 */
  onBack?: () => void;
  /** 右侧内容 */
  right?: React.ReactNode;
  /** 中间内容 */
  children?: React.ReactNode;
  /** 是否显示返回区域的箭头 */
  leftArrow?: boolean;
  /** 返回区域文字 */
  leftText?: string;
  /** 样式 */
  style?: React.CSSProperties & Partial<Record<'--nav-bar-height' | '--border-bottom', string>>;
}
declare const NavBar: React.FC<NavBarProps>;
export default NavBar;
