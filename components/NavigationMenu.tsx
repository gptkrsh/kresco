"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

import NextLink from "next/link";

export function Root({
  children,
  ...props
}: {
  children?: React.ReactNode;
  props?: {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    delayDuration?: number;
    skipDelayDuration?: number;
    dir?: "ltr" | "rtl";
    orientation?: "horizontal" | "vertical";
    "data-orientation"?: "horizontal" | "vertical";
  };
}) {
  return (
    <NavigationMenu.Root
      className="bg-slate-2 dark:bg-slateDark-2 w-screen flex items-center justify-between not-prose px-4 relative"
      {...props}
    >
      {children}
    </NavigationMenu.Root>
  );
}

export const Sub = NavigationMenu.Sub;

export function List({
  children,
  ...props
}: {
  children?: React.ReactNode;
  props?: {
    asChild?: boolean;
    "data-orientation"?: "horizontal" | "vertical";
  };
}) {
  return (
    <NavigationMenu.List className="m-0 flex rounded-md p-0.5 gap-2" {...props}>
      {children}
    </NavigationMenu.List>
  );
}

export function Item({
  children,
  ...props
}: {
  children?: React.ReactNode;
  props?: {
    asChild?: boolean;
    value?: string;
  };
}) {
  return (
    <NavigationMenu.Item
      className="py-1 px-2 my-1 rounded hover:bg-slate-3 dark:hover:bg-slateDark-3 list-none"
      {...props}
    >
      {children}
    </NavigationMenu.Item>
  );
}

export function Trigger({
  children,
  ...props
}: {
  children?: React.ReactNode;
  props?: {
    asChild?: boolean;
    "data-state"?: "open" | "closed";
    "data-disabled"?: any | undefined;
  };
}) {
  return (
    <NavigationMenu.Trigger
      className="flex items-center gap-2 group select-none justify-between"
      {...props}
    >
      {children}
      <ChevronDownIcon className="relative w-4 h-4 transition-transform duration-[250] group-data-[state=open]:-rotate-180" />
    </NavigationMenu.Trigger>
  );
}

export function Content({
  children,
  direction,
  ...props
}: {
  children?: React.ReactNode;
  direction: `${"top" | "bottom"}-${"left" | "right"}`;
  props?: {
    asChild?: boolean;
    disableOutsidePointerEvents?: boolean;
    onEscapeKeyDown?: (event: KeyboardEvent) => void;
    onPointerDownOutside?: (event: PointerEvent) => void;
    onFocusOutside?: (event: FocusEvent) => void;
    onInteractOutside?: (event: Event) => void;
    forceMount?: boolean;
    "data-state"?: "open" | "closed";
    "data-motion"?: "to-start" | "to-end" | "from-start" | "from-end";
    "data-orientation"?: "horizontal" | "vertical";
  };
}) {
  return (
    <NavigationMenu.Content
      className={`px-2 py-1 rounded-md absolute ${
        direction.startsWith("bottom-") ? "top-full" : "bottom-full"
      } ${
        direction.endsWith("-left") ? "left-0" : "right-0"
      } !w-max sm:w-auto bg-slate-3 dark:bg-slateDark-3 shadow-lg`}
      {...props}
    >
      {children}
    </NavigationMenu.Content>
  );
}

export function Link({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode;
  href: string;
  props?: {
    asChild?: boolean;
    active?: boolean;
    onSelect?: (event: Event) => void;
    "data-active"?: any | undefined;
  };
}) {
  return (
    <NavigationMenu.Link
      className="py-1 px-2 my-1 rounded hover:bg-slate-2 dark:hover:bg-slateDark-2 list-none"
      {...props}
    >
      <NextLink href={href}>{children}</NextLink>
    </NavigationMenu.Link>
  );
}

export const Indicator = NavigationMenu.Indicator;
export const Viewport = NavigationMenu.Viewport;
