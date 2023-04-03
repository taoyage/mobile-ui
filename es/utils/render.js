import ReactDOM from 'react-dom/client';
export var render = function render(element, container) {
  var root = ReactDOM.createRoot(container);
  root.render(element);

  var unmout = function unmout() {
    document.body.removeChild(container);
    root.unmount();
  };

  return unmout;
};
export var renderToBody = function renderToBody(element) {
  var container = document.createElement('div');
  document.body.appendChild(container);
  var unmount = render(element, container);
  return unmount;
};
