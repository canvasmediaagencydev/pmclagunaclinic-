"use client";

import { useEffect } from "react";

type ConversionMethod = "phone" | "line" | "whatsapp";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const conversionLabels: Partial<Record<ConversionMethod, string>> = {
  phone: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL,
  line: process.env.NEXT_PUBLIC_GOOGLE_ADS_LINE_LABEL,
  whatsapp: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL,
};

function methodForHref(href: string): ConversionMethod | null {
  if (href.startsWith("tel:")) return "phone";
  if (href.includes("line.me/")) return "line";
  if (href.includes("wa.me/")) return "whatsapp";
  return null;
}

function trackConversion(method: ConversionMethod, href: string) {
  const eventName = `${method}_click`;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    conversion_method: method,
    conversion_href: href,
  });

  const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  if (window.gtag && ga4MeasurementId) {
    window.gtag("event", eventName, {
      contact_method: method,
      page_path: window.location.pathname,
    });
  }

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = conversionLabels[method];
  if (window.gtag && adsId && label) {
    window.gtag("event", "conversion", {
      send_to: `${adsId}/${label}`,
      event_callback: () => undefined,
    });
  }
}

export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      const href = anchor.href;
      const method = methodForHref(href);
      if (method) trackConversion(method, href);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
