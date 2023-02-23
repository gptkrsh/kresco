/* eslint-disable @next/next/no-head-element */
import * as React from "react";
import Link from "next/link";
import { className } from "../util/nextFonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={className}>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
