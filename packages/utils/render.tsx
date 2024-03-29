import React from 'react';
import ReactDOM from 'react-dom/client';

export const render = (element: React.ReactElement, container: HTMLElement) => {
  const root = ReactDOM.createRoot(container);
  root.render(element);

  const unmout = () => {
    document.body.removeChild(container);
    root.unmount();
  };

  return unmout;
};

export const renderToBody = (element: React.ReactElement) => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const unmount = render(element, container);
  return unmount;
};
