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
        {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-gtag" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');`}
            </Script>
          </>
        ) : null}
        <ConversionTracking />
        {children}
      </body>
    </html>
  );
}
