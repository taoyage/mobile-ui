import React from 'react';
import './styles/index.scss';
export interface TabsProps {
  /** 当前激活tab面板的key */
  activeKey: string;
  children?: React.ReactNode;
  /** 是否显示tab下划线 */
  showTabLine?: boolean;
  /** tab展示形式 */
  type?: 'line' | 'card';
  /** 点击tab切换后回调 */
  onChange?: (key: string) => void;
  /** 激活的tab样式 */
  tabActiveClassName?: string;
  /** tab列表样式 */
  tabListClassName?: string;
  /** tab内容样式 */
  tabContentClassName?: string;
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
