"use client"
import { ChakraProvider } from "@chakra-ui/react";

import WithSubnavigation from "@/components/Navbar";
import SmallWithSocial from "@/components/Footer";

import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>

      </head>

      <body>
        <ChakraProvider>
          <div>
            <WithSubnavigation />
            {children}
            <SmallWithSocial/>
          </div>
        </ChakraProvider>
      </body>
    </html>
  )
}
