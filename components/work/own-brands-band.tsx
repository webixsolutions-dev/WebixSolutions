import * as React from "react";
import { Store, Laptop, Building2, Sparkles, ExternalLink } from "lucide-react";

export function OwnBrandsBand() {
  const brands = [
    {
      name: "Zelvomart",
      category: "DTC E-commerce · Pakistan",
      description:
        "Direct-to-consumer Pakistani retail brand running on custom Next.js storefront with automated WhatsApp COD verification and courier tracking.",
      result: "64 WhatsApp orders at Rs 15.01 each",
      icon: Store,
    },
    {
      name: "LaptopSouq.ae",
      category: "Electronics Marketplace · Dubai, UAE",
      description:
        "Dubai-based commercial electronics portal engineered for high-velocity catalog search, multi-currency checkout, and local courier fulfillment.",
      result: "Active Dubai retail marketplace",
      icon: Laptop,
    },
    {
      name: "Miraj Builders",
      category: "Construction & Development Platform · Pakistan",
      description:
        "Comprehensive residential and commercial construction web platform featuring architectural layout plans, project progress tracking, and investor inquiry gating.",
      result: "100% owned digital infrastructure",
      icon: Building2,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-[#E4E6EB] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#C8101A]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C8101A]">
              Operational Proof
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold text-[#111215]">
            Our own brands — built and run by the Webix team
          </h3>
        </div>
        <p className="text-xs text-[#717684] max-w-sm sm:text-right">
          We test and prove our e-commerce, tracking, and advertising playbooks on our own businesses before offering them to clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {brands.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.name}
              className="p-7 rounded-xl bg-white border border-[#E4E6EB] shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-[#FAF0F0] text-[#C8101A] flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F4F5F7] text-[#717684]">
                    Webix Venture
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold text-[#111215]">
                    {b.name}
                  </h4>
                  <div className="text-xs text-[#ED1C24] font-medium mt-0.5">
                    {b.category}
                  </div>
                </div>

                <p className="text-xs text-[#454954] leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E4E6EB] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#16A34A]">{b.result}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
