import React from 'react';
export interface ElementProps {
  visible?: boolean;
  onClose?: () => void;
  afterClose?: () => void;
}
declare const renderImptratively: (element: React.ReactElement<ElementProps>) => void;
export default renderImptratively;
