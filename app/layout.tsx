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
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-J2P8HKXW6Z`} />
        <Script strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-J2P8HKXW6Z', {
                page_path: window.location.pathname,
                });
            `}
        </Script>
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
