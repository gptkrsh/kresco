/* eslint-disable @next/next/no-head-element */
import * as React from "react";
import Link from "next/link";

export default function RootLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <html lang="en" className={className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
