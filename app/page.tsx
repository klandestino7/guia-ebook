"use client"
import SimpleThreeColumns from "@/components/Features"
import SplitWithImage from "@/components/AboutBook"
import { BeforeFooterCallToAction } from "@/components/BeforeFooter"
import AboutAuthor from "@/components/AboutAuthor"

import "./global.css";

export default function Home() {
  return (
    <>
      <SimpleThreeColumns />
      <AboutAuthor />
      <SplitWithImage />
      <BeforeFooterCallToAction />
    </>
  )
}
