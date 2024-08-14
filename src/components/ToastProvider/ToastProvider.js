import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';
export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  function createToast (variant, message) {
    const nextToasts=[...toasts, {id: Math.random(), variant, message}];
    setToasts(nextToasts);
  }
  function handleX(id) {
    const newToasts = toasts.filter((item) => {
      return item.id !== id;
    })
    setToasts(newToasts);
  }
  useEscapeKey(() => {
    setToasts([]);
  })
  return (
    <ToastContext.Provider value={{toasts, createToast, handleX}}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
