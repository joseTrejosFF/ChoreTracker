import * as React from 'react';
import './style.css'

type Props = {
  className: string,
  isVisible?: boolean | string,
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
  tooltiptext: string,
  type?: "button" | "submit" | "reset",
  value:  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
}

export default function Button (
  {
    className,
    isVisible = true,
    onClick,
    tooltiptext,
    type = 'button',
    value
  }: Props
) {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={onClick}
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      {value}
      {tooltiptext && <span className='tooltiptext'>{tooltiptext}</span>}
    </button>
  );
};
