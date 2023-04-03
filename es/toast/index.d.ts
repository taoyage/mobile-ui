export type { ToastShowProps } from './methods';
import { show } from './methods';
export interface ToastProps {
  show: typeof show;
}
declare const Toast: {
  show: (p: string | import('./toast').ToastProps) => void;
};
export default Toast;
