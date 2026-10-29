import * as React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileStickyBar } from "@/components/layout/mobile-sticky-bar";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header megaMenuColumns={[]} simplified />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
