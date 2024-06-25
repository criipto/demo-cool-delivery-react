import classNames from 'classnames';
import { ButtonHTMLAttributes, ComponentType, ReactElement } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ComponentType<{className?: string;}>;
  variant: 'primary' | 'default';
};

export function Button({variant, children, icon: Icon, disabled, className, ...rest}: ButtonProps): ReactElement {
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
        'border border-lightBlue-700/30': variant === 'default',
        'bg-lightBlue-50 text-lightBlue-700': variant === 'default' && disabled,
        'bg-white text-lightBlue-800 hover:bg-lightBlue-50': variant === 'default' && !disabled,
      }, className)}
    >
      {children}
      {Icon && <Icon className="w-[14px] h-4 ml-2"/>}
    </button>
  )
}
