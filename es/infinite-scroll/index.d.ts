import React from 'react';
import './styles/index.scss';
export interface InfiniteScrollProps {
  /** 是否加载更多 */
  hasMore: boolean;
  /** 加载数据方法 */
  loadMore: () => Promise<void>;
  /** 自定义底部样式 */
  footer?: React.ReactNode;
  children: React.ReactNode;
}
declare const InfiniteScroll: React.FC<InfiniteScrollProps>;
export default InfiniteScroll;
