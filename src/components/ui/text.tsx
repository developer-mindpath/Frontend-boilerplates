import {
  createElement,
  forwardRef,
  memo,
  type ComponentPropsWithoutRef,
} from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const textVariants = cva('font-normal text-foreground', {
  variants: {
    level: {
      lgTitle: 'text-4xl leading-9',
      baseTitle: 'text-3xl leading-9',
      mdTitle: 'text-2xl leading-8',
      smTitle: 'text-xl leading-8',
      xsTitle: 'text-lg leading-8',
      sub: 'text-lg leading-8 tracking-wide text-muted-foreground',
      xlTall: 'text-xl leading-8',
      xl: 'text-xl leading-7',
      lgTall: 'text-lg leading-8',
      lg: 'text-lg leading-7',
      baseTall: 'text-base leading-7',
      base: 'text-base leading-6',
      mdTall: 'text-md leading-6',
      md: 'text-md leading-4',
      smTall: 'text-sm leading-4',
      sm: 'text-sm leading-3',
      xs: 'text-xs leading-3',
    },
  },
  defaultVariants: {
    level: 'md',
  },
});

interface TextProps
  extends ComponentPropsWithoutRef<'p'>,
    VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements;
}

export const Text = memo(
  forwardRef<HTMLHeadingElement, TextProps>(
    ({ level = 'base', as = 'p', className, ...props }, _ref) => {
      return createElement(as, {
        ref: _ref,
        className: cn(textVariants({ level: level }), className),
        ...props,
      });
    },
  ),
);

Text.displayName = 'Text';
