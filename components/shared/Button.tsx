import * as React from 'react';
import type { HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Spinner } from './Spinner';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge';

export type ButtonAppearance = 'primary' | 'secondary' | 'outlined' | 'danger';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function button(
    {
      disabled = false,
      loading = false,
      size = 'medium',
      appearance = 'primary',
      children,
      className,
      leadingIcon,
      trailingIcon,
      type = 'button',
      ...props
    }: ButtonProps,
    ref
  ) {
    const computeStyles = (appearance: ButtonAppearance) => {
      switch (appearance) {
        case 'primary':
          return 'text-gray-100 dark:text-violet-gray-1200 bg-violet-900 dark:bg-violet-dark-900 hover:bg-violet-1000 dark:hover:bg-violet-dark-1000 disabled:cursor-not-allowed disabled:opacity-80';
        case 'secondary':
          return 'text-violet-1100 dark:text-violet-dark-1100 bg-violet-400 hover:bg-violet-500 dark:bg-violet-dark-400 dark:hover:bg-violet-dark-500 disabled:cursor-not-allowed  disabled:opacity-80';
        case 'danger':
          return 'text-gray-100 bg-red-900 hover:bg-red-1000 dark:bg-red-dark-9000 dark:hover:bg-red-dark-1000 disabled:cursor-not-allowed  disabled:opacity-80';
        case 'outlined':
          return 'bg-gray-200 dark:bg-gray-dark-200 border border-gray-700 text-gray-1100 dark:text-gray-dark-1100  dark:border-gray-dark-700 dark:hover:bg-gray-dark-300 hover:bg-gray-300 hover:text-gray-1200 dark:hover:text-gray-dark-1200 disabled:cursor-not-allowed disabled:opacity-80';
      }
    };

    return (
      <button
        type={type}
        ref={ref}
        disabled={disabled || loading}
        {...props}
        className={classnames(
          computeStyles(appearance),
          size === 'small' && 'px-3 py-2 text-sm',
          size === 'medium' && 'px-4 py-2 text-sm ',
          size === 'large' && 'px-4 py-2 text-base',
          size === 'xlarge' && 'px-4 py-3 text-lg',
          className,
          'inline-flex select-none items-center rounded-md font-medium capitalize leading-4  transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 dark:ring-offset-gray-dark-100 dark:focus:ring-violet-dark-700'
        )}
      >
        {leadingIcon}
        {children}
        {loading && <Spinner />}
        {trailingIcon}
      </button>
    );
  }
);
