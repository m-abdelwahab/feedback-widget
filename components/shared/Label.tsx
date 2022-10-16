import * as React from 'react';
import { Root } from '@radix-ui/react-label';
import classnames from 'classnames';
import type { FC, LabelHTMLAttributes } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  className?: string;
  size?: 'small' | 'medium';
}

export const Label: FC<Readonly<LabelProps>> = ({
  children,
  className,
  htmlFor,
  size = 'medium',
  ...props
}) => (
  <Root
    {...props}
    className={classnames(
      'block text-gray-1100 dark:text-gray-dark-1100',
      className,
      size === 'small' ? 'text-sm' : ''
    )}
    htmlFor={htmlFor}
  >
    {children}
  </Root>
);
