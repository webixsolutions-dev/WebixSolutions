import * as React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StudioMotion } from "@/components/studio/studio-motion";
import { BookingDialog } from "@/components/booking/booking-dialog";
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
      <StudioMotion />
      <BookingDialog />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
