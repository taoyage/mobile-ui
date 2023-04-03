import React from 'react';
import './styles/index.scss';
export interface EllipsisProps {
  /** 文本内容 */
  text: string;
  /** 展示几行 */
  rows?: number;
  /** 收起操作元素 */
  collapse?: React.ReactNode;
  /** 展开操作元素 */
  expand?: React.ReactNode;
}
declare const Ellipsis: React.FC<EllipsisProps>;
export default Ellipsis;
