import { ChatBubbleIcon, Cross1Icon } from '@radix-ui/react-icons';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { Button } from '../shared/Button';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import cx from 'classnames';
import { toast } from 'react-hot-toast';

const overlayVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

const dialogVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.15,
    },
  },
};

export const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const controls = useAnimationControls();

  const feedbackMutation = useMutation(
    async (message) => {
      const res = await fetch('http://localhost:3000/api/feedback', {
        method: 'POST',
        body: JSON.stringify({ message, email: 'mahmoud3799@gmail.com' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      return res.json();
    },
    {
      onSuccess: () => toast.success('Feedback sent successfully :)'),
      onError: () => toast.error('Something went wrong :('),
    }
  );

  const onSubmit = async (data: any) => {
    if (data.message.trim().length < 8) {
      setError('message', { message: 'Feedback too short' });

      await controls.start({
        x: [-2, 2, -2, 2, 0],
        transition: {
          duration: 0.3,
        },
      });
      return;
    }

    feedbackMutation.mutate(data.message);

    reset();
    setIsOpen(false);
  };

  return (
    <>
      <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <DialogPrimitive.Trigger asChild>
          <Button
            size="small"
            appearance="outlined"
            leadingIcon={
              <ChatBubbleIcon
                className={cx('mr-2.5 h-4 w-4 flex-shrink-0')}
                aria-hidden="true"
              />
            }
          >
            Feedback
          </Button>
        </DialogPrimitive.Trigger>
        <AnimatePresence>
          {isOpen && (
            <>
              <DialogPrimitive.Overlay forceMount asChild>
                <motion.div
                  className="fixed inset-0 z-20 bg-black/50"
                  initial="hidden"
                  animate="visible"
                  variants={overlayVariants}
                  exit="exit"
                />
              </DialogPrimitive.Overlay>

              <motion.div
                className="fixed inset-0 z-30 flex items-center justify-center"
                animate={controls}
              >
                <DialogPrimitive.Content asChild forceMount>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={dialogVariants}
                    exit="exit"
                    className={cx(
                      'shadow-lg bg-white relative',
                      'max-w-sm rounded-lg p-4 w-[95vw] ',
                      'focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus-visible:ring-opacity-75'
                    )}
                  >
                    <DialogPrimitive.Title className="text-sm font-medium text-gray-1100">
                      Share Feedback
                    </DialogPrimitive.Title>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="mt-2 space-y-2"
                    >
                      <fieldset>
                        <label
                          htmlFor="message"
                          className="text-xs sr-only font-medium text-gray-700 "
                        >
                          Feedback
                        </label>

                        <textarea
                          {...register('message')}
                          id="message"
                          placeholder="What if..."
                          rows={5}
                          className={cx(
                            'mt-1 mb-3 block w-full rounded-md bg-gray-200',
                            'text-sm text-gray-1200 placeholder:text-gray-1100',
                            'border-transparent focus-visible:border-transparent',
                            'focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus-visible:ring-opacity-75',
                            errors.message && 'border-red-700'
                          )}
                        />
                      </fieldset>
                      {errors.message && (
                        <span className="text-xs text-red-1100">
                          <>{errors.message.message}</>
                        </span>
                      )}

                      <div className="mt-4 flex justify-end">
                        <Button type="submit" size="small">
                          Send Message
                        </Button>
                      </div>
                    </form>

                    <DialogPrimitive.Close
                      className={cx(
                        'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
                        'focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus-visible:ring-opacity-75'
                      )}
                    >
                      <Cross1Icon className="h-4 w-4 text-gray-1100 hover:text-gray-1200" />
                    </DialogPrimitive.Close>
                  </motion.div>
                </DialogPrimitive.Content>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </DialogPrimitive.Root>
    </>
  );
};
