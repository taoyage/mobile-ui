export type { ToastShowProps } from '@/toast/methods';

import { show } from '@/toast/methods';

export interface ToastProps {
  show: typeof show;
}

const Toast = {
  show,
};

export default Toast;
