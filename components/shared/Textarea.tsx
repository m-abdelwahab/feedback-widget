import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import { FieldErrors } from 'react-hook-form';

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  rows: number;
  errors: FieldErrors;
}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function textarea(
    { id, rows, errors, placeholder, className, ...props }: TextareaProps,
    ref
  ) {
    return (
      <>
        <textarea
          {...props}
          ref={ref}
          id={id}
          placeholder={placeholder}
          rows={rows}
          className={cx(
            'block w-full rounded-md bg-gray-200',
            'text-sm text-gray-1200 placeholder:text-gray-1100',
            'border-transparent focus-visible:border-transparent',
            'focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus-visible:ring-opacity-75',
            errors.message && 'border-red-700',
            className
          )}
        />
        {errors.message && (
          <p className="text-xs mt-2 text-red-1100">
            {`${errors.message.message}`}
          </p>
        )}
      </>
    );
  }
);
