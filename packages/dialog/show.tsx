import React from 'react';

import Dialog, { DialogProps } from '@/dialog/dialog';
import renderImptratively from '@/utils/render-imperatively';

export type DialogShowProps = Omit<DialogProps, 'visible'>;

function show(props: DialogShowProps) {
  renderImptratively(<Dialog {...props} />);
}

export default show;
