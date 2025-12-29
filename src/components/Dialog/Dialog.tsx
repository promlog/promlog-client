import { Dialog as DialogPrimitive } from 'radix-ui';
import { Icon } from '../Icon/Icon';
import type { DialogProps } from './Dialog.types';

export const Dialog = ({
  trigger,
  icon,
  title,
  description,
  caption,
  primaryAction,
  secondaryAction,
  children,
}: DialogProps) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <DialogPrimitive.Content className="bg-white rounded-xl max-w-md w-full p-8 relative focus:outline-none">
            <DialogPrimitive.Close asChild>
              <button
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="닫기">
                <Icon name="close" size="md" aria-hidden />
              </button>
            </DialogPrimitive.Close>
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">{icon}</div>
              <div className="flex flex-col gap-2 items-center">
                <DialogPrimitive.Title className="text-gray-900 text-xl">
                  {title}
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="text-gray-600">
                  {description}
                </DialogPrimitive.Description>
              </div>
              {children}
              <div className="flex gap-3">
                {primaryAction}
                {secondaryAction}
              </div>
              {caption && <p className="text-center text-gray-500 text-sm">{caption}</p>}
            </div>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
