import classNames from 'classnames';
import arrow from '../assets/arrow-white.png';
import { ButtonHTMLAttributes, ReactElement } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  withArrow?: boolean;
  variant: 'primary' | 'default';
};

export function Button({variant, children, withArrow, disabled, className, ...rest}: ButtonProps): ReactElement {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={classNames(`w-full justify-center py-4 px-3 text-sm font-semibold flex flex-row items-center shadow-sm mb-2 transition-all`, {
        'cursor-not-allowed': disabled,

        // Primary
        'text-white': variant === 'primary',
        'bg-ashGrey400': variant === 'primary' && disabled,
        'bg-primary600 hover:bg-primary700': variant === 'primary' && !disabled,

        // Default
        'border border-lightBlue700/30': variant === 'default',
        'bg-lightBlue50 text-lightBlue700': variant === 'default' && disabled,
        'bg-white text-lightBlue800 hover:bg-lightBlue50': variant === 'default' && !disabled,
      }, className)}
    >
      {children}
      {withArrow && (
        <img src={arrow} className="w-[14px] h-4 ml-2"/>
      )}
    </button>
  )
}
