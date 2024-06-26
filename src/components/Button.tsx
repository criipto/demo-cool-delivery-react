import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactElement } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'default';
};

export function Button({variant, children, disabled, className, ...rest}: ButtonProps): ReactElement {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={classNames(`w-full justify-center py-3.5 px-3 text-sm font-semibold flex flex-row items-center shadow-sm transition-all`, {
        'cursor-not-allowed': disabled,

        // Primary
        'text-white': variant === 'primary',
        'bg-ash-400': variant === 'primary' && disabled,
        'bg-primary-600 hover:bg-primary-700': variant === 'primary' && !disabled,

        // Default
        'border border-light-blue-700/30': variant === 'default',
        'bg-light-blue-50 text-light-blue-700': variant === 'default' && disabled,
        'bg-white text-light-blue-800 hover:bg-light-blue-50': variant === 'default' && !disabled,
      }, className)}
    >
      {children}
    </button>
  )
}
