import { ImageResponse } from "next/og";
import { SITE_FACTS } from "@/content/site-facts";

export const alt = "Webix Solutions — Websites, Growth Marketing & AI Automation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#141519",
          color: "#F5F6F8",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
          borderTop: "8px solid #ED1C24",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "18px",
                height: "18px",
                backgroundColor: "#ED1C24",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Webix Solutions
            </span>
          </div>
          <span
            style={{
              fontSize: "18px",
              color: "#A7ACB8",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: "9999px",
              padding: "8px 20px",
            }}
          >
            CA · US · UAE · NZ · PK
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "980px",
            }}
          >
            Websites, marketing and AI automation that grow your business.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#A7ACB8",
              maxWidth: "820px",
              lineHeight: 1.4,
            }}
          >
            20+ in-house specialists · 91 custom-coded builds · 50+ CMS sites ·
            50+ social accounts managed.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#A7ACB8",
          }}
        >
          <span>webixsolutions.com</span>
          <span>{SITE_FACTS.contact.email}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
