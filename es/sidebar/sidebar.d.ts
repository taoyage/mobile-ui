import React from 'react';
import './styles/index.scss';
export interface SidebarProps {
  /** 当前激活side item面板的key */
  activeKey: string;
  /** 点击side item切换后回调 */
  onChange?: (key: string) => void;
  children?: React.ReactNode;
  /** 基本样式 */
  style?: React.CSSProperties &
    Partial<
      Record<'--width' | '--height' | '--background-color' | '--content-padding' | '--sidebar-item-padding', string>
    >;
}
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
