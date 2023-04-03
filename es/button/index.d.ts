import React from 'react';
import './styles/index.scss';
export interface ButtonProps {
  /** 按钮颜色 */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /** 按钮大小 */
  size?: 'small' | 'middle' | 'large';
  /** 按钮形状 */
  shape?: 'default' | 'rounded' | 'rectangular';
  /** 按钮填充 */
  fill?: 'solid' | 'outline' | 'none';
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => Promise<void> | unknown;
  /** 块级按钮 */
  block?: boolean;
  disabled?: boolean;
  loading?: boolean | 'auto';
  loadingIcon?: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
