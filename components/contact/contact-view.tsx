"use client";

import * as React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { SITE_FACTS } from "@/content/site-facts";
import { getServiceSelectOptions } from "@/content/navigation";
import { WhatsAppIcon } from "@/components/layout/social-icons";
import {
  Calendar,
  Mail,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Globe,
  Building,
} from "lucide-react";

export function ContactView() {
  const serviceOptions = React.useMemo(() => getServiceSelectOptions(), []);

  // Form states
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [service, setService] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [honeypot, setHoneypot] = React.useState("");

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !service || !message.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          company: company.trim() || undefined,
          service,
          budget: budget || undefined,
          message: message.trim(),
          honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || "Unable to send your inquiry. Please try WhatsApp.");
        return;
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Contact form error:", err);
      setErrorMessage("Network connection error. Please message us directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const FAQS = [
    {
      question: "How fast do you reply to inquiries?",
      answer:
        "We review every message and reply within one business day. For urgent matters, you can message Haroon directly on WhatsApp for a faster response during operational shift hours.",
    },
    {
      question: "Can we communicate directly on WhatsApp or Slack?",
      answer:
        "Yes. Once an engagement begins, we set up a dedicated private WhatsApp group or Slack channel with your engineering and project leads for daily updates, staging links, and rapid questions.",
    },
    {
      question: "Do you have an office I can visit in person?",
      answer:
        "Our central headquarters and production campus is located in Dunyapur, Punjab, Pakistan. We also host in-person meetings in Lahore by prior appointment, and run all client discovery sessions via Google Meet video calls.",
    },
    {
      question: "What should I prepare before our initial discussion?",
      answer:
        "It helps to share your current website URL, your primary business bottleneck (e.g. low conversions, outdated UI, manual operational workflows), and your target deadline or monthly budget range.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          1. HERO & ACTION TILES (Graphite)
         ========================================================================= */}
      <Section surface="graphite" className="pt-24 pb-14">
        <Container>
          <div className="max-w-3xl space-y-4 mb-12">
            <Kicker>Connect directly with our team</Kicker>
            <h1 className="type-display text-white">Contact Webix Solutions</h1>
            <p className="type-lead text-[#9CA3AF]">
              Book a strategy call on your time zone, chat with our founder on WhatsApp, or send a detailed scope brief using the form below.
            </p>
          </div>

          {/* Three Direct Action Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tile 1: Book a Call */}
            <Link
              href="/book-a-call/"
              className="group cut-tr-sm border border-white/12 bg-white/[0.03] hover:border-[#ED1C24] hover:bg-[#ED1C24]/10 p-6 space-y-4 transition-all"
            >
              <div className="h-10 w-10 rounded-full bg-[#ED1C24]/15 flex items-center justify-center text-[#ED1C24]">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h2 className="font-display text-base font-bold text-white group-hover:text-[#ED1C24] transition-colors">
                  Book a Strategy Call
                </h2>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  30-min Google Meet session in your local time zone. No obligation.
                </p>
              </div>
              <div className="text-xs font-semibold text-[#ED1C24] inline-flex items-center gap-1.5 pt-2">
                <span>Open calendar</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Tile 2: WhatsApp */}
            <a
              href={SITE_FACTS.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group cut-tr-sm border border-white/12 bg-white/[0.03] hover:border-[#25D366] hover:bg-[#25D366]/10 p-6 space-y-4 transition-all"
            >
              <div className="h-10 w-10 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                <WhatsAppIcon className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h2 className="font-display text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                  WhatsApp Founder Direct
                </h2>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Fast text or voice note exchange with Haroon ({SITE_FACTS.contact.phoneDisplay}).
                </p>
              </div>
              <div className="text-xs font-semibold text-[#25D366] inline-flex items-center gap-1.5 pt-2">
                <span>Start WhatsApp chat</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Tile 3: Direct Email */}
            <a
              href={`mailto:${SITE_FACTS.contact.email}`}
              className="group cut-tr-sm border border-white/12 bg-white/[0.03] hover:border-white hover:bg-white/[0.08] p-6 space-y-4 transition-all"
            >
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h2 className="font-display text-base font-bold text-white transition-colors">
                  Email Our Inbox
                </h2>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Send RFPs, NDAs or technical briefs to {SITE_FACTS.contact.email}.
                </p>
              </div>
              <div className="text-xs font-semibold text-white inline-flex items-center gap-1.5 pt-2">
                <span>Send email</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. CONTACT FORM & NAP SIDEBAR (Porcelain with Notch)
         ========================================================================= */}
      <Section surface="porcelain" previousSurface="graphite" notch spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 7 Columns: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-7 sm:p-9 rounded-xl border border-[#E4E6EB] shadow-xs space-y-6">
                <div>
                  <h2 className="type-h2 text-[#111215]">Send a project inquiry</h2>
                  <p className="text-xs text-[#717684] mt-1">
                    Fill in your details below and our senior department leads will evaluate your requirements within one business day.
                  </p>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 bg-[#FAF0F0] border border-[#ED1C24]/30 rounded text-xs text-[#C8101A]">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Success Screen */}
                {isSuccess ? (
                  <div className="p-8 text-center space-y-4 bg-[#F0FDF4] border border-[#16A34A]/30 rounded-lg">
                    <CheckCircle2 className="h-10 w-10 text-[#16A34A] mx-auto" />
                    <h3 className="font-display text-xl font-bold text-[#111215]">
                      Message Received!
                    </h3>
                    <p className="text-xs text-[#15803D] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Webix Solutions. Our senior leads have received your submission and will reply within one business day.
                    </p>
                    <div className="pt-2">
                      <Button href="/book-a-call/" variant="primary" size="sm">
                        Or pick a slot on our calendar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot field */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#111215] mb-1">
                          Your Full Name <span className="text-[#ED1C24]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. David Miller"
                          className="w-full bg-[#F9FAFB] border border-[#D5D8E0] rounded-md px-3.5 py-2.5 text-xs text-[#111215] focus:outline-none focus:border-[#ED1C24]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#111215] mb-1">
                          Email Address <span className="text-[#ED1C24]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="david@company.com"
                          className="w-full bg-[#F9FAFB] border border-[#D5D8E0] rounded-md px-3.5 py-2.5 text-xs text-[#111215] focus:outline-none focus:border-[#ED1C24]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#111215] mb-1">
                          Phone or WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-[#F9FAFB] border border-[#D5D8E0] rounded-md px-3.5 py-2.5 text-xs text-[#111215] focus:outline-none focus:border-[#ED1C24]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#111215] mb-1">
                          Company Website (Optional)
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="https://company.com"
                          className="w-full bg-[#F9FAFB] border border-[#D5D8E0] rounded-md px-3.5 py-2.5 text-xs text-[#111215] focus:outline-none focus:border-[#ED1C24]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#111215] mb-1">
                          Primary Service Needed <span className="text-[#ED1C24]">*</span>
                        </label>
                        <select
                          required
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full bg-[#F9FAFB] border border-[#D5D8E0] rounded-md px-3.5 py-2.5 text-xs text-[#111215] focus:outline-none focus:border-[#ED1C24]"
                        >
                          <option value="">Select service from registry...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt.value} value={opt.label}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#111215] mb-1">
                          Estimated Monthly Budget (Optional)
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full bg-[#F9FAFB] border border-[#D5D8E0] rounded-md px-3.5 py-2.5 text-xs text-[#111215] focus:outline-none focus:border-[#ED1C24]"
                        >
                          <option value="">Select range...</option>
                          <option value="<$500">&lt;$500 (starter / audit)</option>
                          <option value="$500-$1,500">$500 – $1,500 (Growth Package)</option>
                          <option value="$1,500-$5,000">$1,500 – $5,000 (dedicated builds)</option>
                          <option value="$5,000+">$5,000+ (enterprise / scaling)</option>
                          <option value="one-time">One-time fixed build</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#111215] mb-1">
                        Project Overview or Goals <span className="text-[#ED1C24]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your project, target audience, technical preferences, and deadlines..."
                        className="w-full bg-[#F9FAFB] border border-[#D5D8E0] rounded-md px-3.5 py-2.5 text-xs text-[#111215] focus:outline-none focus:border-[#ED1C24]"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] text-[#717684]">
                        Strict privacy · Never shared
                      </span>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex h-11 items-center justify-center gap-2 cut-tr-sm bg-[#C8101A] hover:bg-[#ED1C24] disabled:opacity-60 px-7 text-xs font-semibold text-white transition-colors"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Sending inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right 5 Columns: Working Hours & NAP Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Working Hours Card */}
              <div className="p-6 rounded-xl border border-[#E4E6EB] bg-white space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C8101A] uppercase tracking-wider">
                  <Clock className="h-4 w-4" />
                  <span>Working Hours & Shifts</span>
                </div>
                <div className="space-y-2 text-xs text-[#454954]">
                  <div className="flex justify-between py-1.5 border-b border-[#F0F2F5]">
                    <span className="font-semibold text-[#111215]">Pakistan (PKT, UTC+5)</span>
                    <span className="font-mono">From 9:00 AM PKT & 9:00 PM – 5:00 AM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#F0F2F5]">
                    <span className="font-semibold text-[#111215]">Eastern (US & Canada)</span>
                    <span className="font-mono">11:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#F0F2F5]">
                    <span className="font-semibold text-[#111215]">Pacific (US & Canada)</span>
                    <span className="font-mono">8:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#F0F2F5]">
                    <span className="font-semibold text-[#111215]">UAE (GST, UTC+4)</span>
                    <span className="font-mono">8:00 AM – 12:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="font-semibold text-[#111215]">New Zealand (NZST/NZDT)</span>
                    <span className="font-mono">Morning shift overlap</span>
                  </div>
                </div>
              </div>

              {/* Physical Location & NAP (City Level Only) */}
              <div className="p-6 rounded-xl border border-[#E4E6EB] bg-white space-y-3 shadow-xs text-xs text-[#454954]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#111215] uppercase tracking-wider">
                  <Building className="h-4 w-4 text-[#ED1C24]" />
                  <span>Corporate Headquarters</span>
                </div>
                <div className="space-y-1.5">
                  <p className="font-semibold text-sm text-[#111215]">
                    {SITE_FACTS.brandName}
                  </p>
                  <p>{SITE_FACTS.headquarters.fullDisplay}</p>
                  <p className="text-[11px] text-[#717684]">
                    {SITE_FACTS.headquarters.secondaryNote}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#F0F2F5] space-y-1 text-xs">
                  <div>
                    <strong>Direct Email:</strong>{" "}
                    <a href={`mailto:${SITE_FACTS.contact.email}`} className="text-[#C8101A] hover:underline">
                      {SITE_FACTS.contact.email}
                    </a>
                  </div>
                  <div>
                    <strong>Direct Phone:</strong>{" "}
                    <a href={`tel:${SITE_FACTS.contact.phoneE164}`} className="text-[#111215] hover:underline">
                      {SITE_FACTS.contact.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <strong>HR & Careers:</strong>{" "}
                    <a href={`mailto:${SITE_FACTS.contact.hrEmail}`} className="text-[#717684] hover:underline">
                      {SITE_FACTS.contact.hrEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. FAQ ACCORDION (Steel with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Direct answers"
        heading="Frequently asked questions about contacting Webix"
        subtitle="Turnaround times, private communication channels, and discovery sessions."
        faqs={FAQS}
        surface="steel"
        previousSurface="porcelain"
        notch
      />

      {/* =========================================================================
          4. FINAL CTA (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection previousSurface="steel" />
    </div>
  );
}
