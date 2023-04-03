import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import React from 'react';

var useReadLocalStorage = function useReadLocalStorage(key) {
  var readValue = React.useCallback(
    function () {
      if (typeof window === 'undefined') {
        return null;
      }

      try {
        var item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (err) {
        console.warn('Error reading locaStorage key "'.concat(key, ':"'), err);
        return null;
      }
    },
    [key]
  );

  var _React$useState = React.useState(readValue),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    storedValue = _React$useState2[0],
    setStoredValue = _React$useState2[1];

  var handleStorageChange = React.useCallback(
    function (event) {
      if (event.detail.key && event.detail.key !== key) {
        return;
      }

      setStoredValue(readValue());
    },
    [key, readValue]
  );
  React.useEffect(
    function () {
      window.addEventListener('local-storage', handleStorageChange);
      return function () {
        window.removeEventListener('local-storage', handleStorageChange);
      };
    },
    [handleStorageChange]
  );
  return storedValue;
};

export default useReadLocalStorage;
