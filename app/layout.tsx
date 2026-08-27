import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import ConversionTracking from "./components/ConversionTracking";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phuket Medical Clinic Laguna - Your Trusted Healthcare Partner",
  description: "Comprehensive and high-standard medical services in Laguna, Phuket. Modern equipment, experienced medical team, open daily 9 AM - 10 PM. Disease screening, health check-ups, vaccinations, beauty services and more.",
};

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const googleTagId = ga4MeasurementId || googleAdsId;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <script async src="https://ob.belvionetta.com/i/4c541fff6854e64402d33d55c856892f.js" className="ct_clicktrue"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<iframe src="https://ob.belvionetta.com/ns/4c541fff6854e64402d33d55c856892f.html?ch=" width="0" height="0" style="display:none"></iframe>',
          }}
        />
        {googleTagId ? (
          <>
            <Script id="google-tag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; window.gtag = function(){window.dataLayer.push(arguments);}; window.gtag('js', new Date());${
                ga4MeasurementId ? ` window.gtag('config', '${ga4MeasurementId}');` : ""
              }${
                googleAdsId && googleAdsId !== ga4MeasurementId
                  ? ` window.gtag('config', '${googleAdsId}');`
                  : ""
              }`}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
              strategy="afterInteractive"
            />
          </>
        ) : null}
        <ConversionTracking />
        {children}
      </body>
    </html>
  );
}
