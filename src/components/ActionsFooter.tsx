import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

type ActionsFooterProps = {
  children?: ReactNode;
  className?: string;
};

export function ActionsFooter({
  children,
  className,
}: ActionsFooterProps): ReactElement {
  return (
    <div
      className={classNames(
        'fixed bottom-0 flex w-full flex-col gap-2 bg-gray-300 bg-white shadow-inner lg:max-w-5xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
