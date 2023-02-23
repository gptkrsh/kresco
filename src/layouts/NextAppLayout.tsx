/* eslint-disable @next/next/no-head-element */
import * as React from "react";
import Link from "next/link";
import * as NavigationMenu from "../components/NavigationMenu";
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
        <NavigationMenu.Root>
          <NavigationMenu.Item>
            <Link href="/">Kresco</Link>
          </NavigationMenu.Item>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Docs</NavigationMenu.Trigger>
              <NavigationMenu.Content direction="bottom-right">
                <ul>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="/docs/getting-started">
                      Getting Started
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="/docs/nextjs">
                      Next.js
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="/docs/tailwindcss">
                      Tailwind CSS
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        {children}
      </body>
    </html>
  );
}
