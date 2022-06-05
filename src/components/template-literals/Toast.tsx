import React from 'react';

/**
 * Position prop can be of
 * "left-center" | "left-top" | "center" | "center-top"|
 * "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
  position: 
  | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}
const Toast = ({position}: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};

export default Toast;
