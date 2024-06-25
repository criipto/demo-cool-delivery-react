import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

type CheckboxProps = {
    children: ReactNode;
    checked: boolean;
    onToggle: () => void;
    className?: string;
};

export function Checkbox({ children, checked, onToggle, className}: CheckboxProps): ReactElement {
  return (
    <div
      className={classNames("flex flex-row align-middle p-2", className)}
      onClick={() => onToggle()}
    >
      <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          disabled={true}
          className="hidden"
      />
      <span className="block w-6 h-6 cursor-pointer p-[2px] border-2 border border-lightBlue-300">
        {checked && <div className="w-full h-full bg-primary-500"></div>}
      </span>
      <label
        className="text-lightBlue-800 pl-2 text-xs self-center"
        htmlFor="checkbox"
      >
        {children}
      </label>
    </div>
  )
}
