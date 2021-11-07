/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */
import { Gradients, TicketColor } from 'interfaces';
import React, { FC } from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: TicketColor;
  hoverEffect?: boolean;
}

export const Button: FC<IProps> = ({ color, hoverEffect = true, ...props }) => (
  <button
    {...props}
    className={`${
      props.className
    } flex gap-4 items-center justify-center w-full rounded-lg font-code px-4 py-3 text-white bg-gradient-to-r animate-gradient-xy transform-gpu transition ${
      hoverEffect ? 'hover:text-gray-200 hover:scale-105' : ''
    } ${Gradients[color]}`}
    type={props.type}
  >
    {props.children}
  </button>
);
