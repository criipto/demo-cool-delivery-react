import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

type CheckboxProps = {
  children: ReactNode;
  checked: boolean;
  onToggle: () => void;
  className?: string;
};

export function Checkbox({
  children,
  checked,
  onToggle,
  className,
}: CheckboxProps): ReactElement {
  return (
    <div
      className={classNames('flex flex-row p-2 align-middle', className)}
      onClick={() => onToggle()}
    >
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        disabled={true}
        className="hidden"
      />
      <span className="block h-6 w-6 cursor-pointer border border-2 border-light-blue-300 p-[2px]">
        {checked && <div className="h-full w-full bg-primary-500"></div>}
      </span>
      <label
        className="self-center pl-2 text-xs text-light-blue-800"
        htmlFor="checkbox"
      >
        {children}
      </label>
    </div>
  );
}
