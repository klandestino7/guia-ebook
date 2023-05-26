"use client"
import SimpleThreeColumns from "@/components/Features"
import SplitWithImage from "@/components/AboutBook"
import { BeforeFooterCallToAction } from "@/components/BeforeFooter"
import AboutAuthor from "@/components/AboutAuthor"

import "./global.css";

import Script from 'next/script';

export default function Home() {
  return (
    <>
        <Script
          id="id-google-tag-01"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-J2P8HKXW6Z`}
        />
        <Script
          id="id-google-tag-02"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J2P8HKXW6Z', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

      <SimpleThreeColumns />
      <AboutAuthor />
      <SplitWithImage />
      <BeforeFooterCallToAction />
    </>
  )
}
