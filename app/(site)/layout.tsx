import * as React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileStickyBar } from "@/components/layout/mobile-sticky-bar";
import { getMegaMenuColumns } from "@/content/navigation";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const megaMenuColumns = getMegaMenuColumns();

  return (
    <>
      <Header megaMenuColumns={megaMenuColumns} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
