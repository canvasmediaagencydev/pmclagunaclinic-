"use client";

import Image from "next/image";
import Link from "next/link";
import { useBranch } from "@/lib/useBranch";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.5 11.4a8.6 8.6 0 0 1-12.7 7.5L3.5 20l1.2-4.1A8.5 8.5 0 1 1 20.5 11.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.7c.5 1 1.3 1.8 2.3 2.3l.7-.5c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.2.3-2.3-.2-1.1-.5-2.4-1.4-3.6-2.6-1.2-1.2-2.1-2.5-2.6-3.6-.5-1.1-.4-1.9-.2-2.3Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.4 3.9 7.8 3c.6-.2 1.2.1 1.4.7l1.1 3.4c.2.5 0 1.1-.5 1.4l-1.5.9a15.2 15.2 0 0 0 6.3 6.3l.9-1.5c.3-.5.9-.7 1.4-.5l3.4 1.1c.6.2.9.8.7 1.4l-.9 2.4c-.3.8-1.1 1.4-2 1.3C10.7 19.7 4.3 13.3 4.1 5.9c0-.9.5-1.7 1.3-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#0f766e]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12 4.2 4.2L19 6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function trackHotelContact(method: "whatsapp" | "phone", location: string) {
  window.dataLayer = window.dataLayer || [];
  const event = `hotel_${method}_click`;
  window.dataLayer.push({ event, conversion_method: method, conversion_location: location });
  window.gtag?.("event", event, { contact_method: method, conversion_location: location, page_path: window.location.pathname });
}

export default function HotelDoctorPhuketPage() {
  const branch = useBranch();
  const whatsappUrl = `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent("Hello PMC Laguna. I would like to check hotel doctor availability.")}`;

  const onContact = (method: "whatsapp" | "phone", location: string) => () => trackHotelContact(method, location);

  return (
    <main className="min-h-screen bg-[#f7faf9] pb-20 text-slate-900 sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex items-center" aria-label="PMC Laguna home">
            <Image src="/phuket-medical-clinic-1-1024x228.webp" alt="Phuket Medical Clinic Laguna" width={190} height={43} className="h-9 w-auto" priority />
          </Link>
          <div className="hidden items-center gap-5 text-sm font-medium text-slate-600 sm:flex">
            <span>Open daily {branch.hoursDisplay}</span>
            <a href={branch.phoneHref} onClick={onContact("phone", "hotel-header-call")} data-conversion-location="hotel-header-call" className="rounded-full border border-slate-300 px-4 py-2 text-slate-800 transition hover:border-slate-500 hover:bg-slate-50">
              Call {branch.phoneDisplay}
            </a>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContact("whatsapp", "hotel-header-whatsapp")} data-conversion-location="hotel-header-whatsapp" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#138a63] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0f7655]">
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#0b3f49]">
        <Image src="/Patients-bg.jpg" alt="PMC Laguna medical team" fill priority sizes="100vw" className="-z-20 object-cover object-center opacity-35" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,41,49,.96)_0%,rgba(5,41,49,.9)_48%,rgba(5,41,49,.62)_100%)]" />
        <div className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#8ee2c6]">PMC Laguna · Hotel On‑Call</p>
            <h1 className="max-w-xl text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl">
              Doctor Visit to Your Hotel in Phuket
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-100 sm:text-xl">
              Medical consultation support for hotel guests in Laguna, Bang Tao and nearby Phuket areas. Contact us to check availability for your location.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContact("whatsapp", "hotel-hero-whatsapp")} data-conversion-location="hotel-hero-whatsapp" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#2aab7b] px-6 py-4 text-base font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#209267]">
                <WhatsAppIcon className="h-6 w-6" /> WhatsApp Us Now
              </a>
              <a href={branch.phoneHref} onClick={onContact("phone", "hotel-hero-call")} data-conversion-location="hotel-hero-call" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/35 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/20">
                <PhoneIcon className="h-6 w-6" /> Call {branch.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">Hotel visits are subject to availability, service area and clinical assessment.</p>
          </div>

          <aside className="border border-white/15 bg-white/95 p-6 shadow-2xl shadow-black/25 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0f766e]">Before we dispatch</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Send these details on WhatsApp</h2>
            <ul className="mt-6 space-y-4 text-[15px] leading-6 text-slate-700">
              <li className="flex gap-3"><CheckIcon /><span>Your hotel name and room location</span></li>
              <li className="flex gap-3"><CheckIcon /><span>Preferred contact language</span></li>
              <li className="flex gap-3"><CheckIcon /><span>A brief description of the concern</span></li>
              <li className="flex gap-3"><CheckIcon /><span>Your preferred time for a call back</span></li>
            </ul>
            <div className="mt-7 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
              <strong className="text-slate-800">Emergency?</strong> For life-threatening emergencies, call 1669 immediately.
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="how-it-works">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0f766e]">Simple next steps</p>
          <h2 id="how-it-works" className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">How hotel on-call works</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">One clear contact path—so guests and hotel teams know what happens next.</p>
        </div>
        <ol className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">
          {[
            ["01", "Message or call PMC Laguna", "Tell us the hotel location and the best way to contact you."],
            ["02", "Confirm availability", "Our team confirms whether a hotel visit is available for your area and timing."],
            ["03", "Receive next-step guidance", "We arrange the appropriate next step, such as a hotel visit, clinic appointment or referral."],
          ].map(([number, title, text]) => (
            <li key={number} className="bg-white p-7 sm:p-8">
              <span className="font-mono text-sm text-[#0f766e]">{number}</span>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0f766e]">Location first</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-900">Hotel areas we can assess</h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">We support hotel guests in Laguna, Bang Tao and nearby Phuket areas. Message us with your hotel name so our team can confirm current availability.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContact("whatsapp", "hotel-area-whatsapp")} data-conversion-location="hotel-area-whatsapp" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#0b3f49] px-5 py-3 font-bold text-white transition hover:bg-[#082f36]">
              <WhatsAppIcon /> Check your hotel area
            </a>
          </div>
          <div className="border-l-0 border-slate-200 lg:border-l lg:pl-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0f766e]">Support may include</p>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {["General medical consultation", "Basic wound assessment and care", "Health check-up guidance", "Clinic appointment coordination", "Hospital referral when appropriate", "English and Thai communication"].map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-6 text-slate-700"><CheckIcon />{item}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-6 text-slate-500">Services depend on clinical assessment and availability. This page does not replace emergency services.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="faq">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0f766e]">Useful before you contact us</p>
            <h2 id="faq" className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-900">Questions hotel guests often ask</h2>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {[
              ["Can a doctor visit my hotel?", "Hotel visits may be available depending on location, timing and clinical assessment. Contact us with your hotel name to check."],
              ["How quickly can you respond?", "Response timing depends on location and current availability. Our team will confirm the next available option when you contact us."],
              ["Can I contact PMC Laguna by WhatsApp?", "Yes. WhatsApp is the fastest way to share your hotel name, location and preferred language."],
              ["What if this is an emergency?", "For life-threatening emergencies, severe breathing difficulty, loss of consciousness, major bleeding or a serious accident, call 1669 immediately."],
            ].map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-900 marker:content-none">{question}<span className="text-2xl font-light text-[#0f766e] transition group-open:rotate-45">+</span></summary>
                <p className="max-w-2xl pt-3 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b3f49]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8ee2c6]">PMC Laguna</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Need to check hotel on-call availability?</h2>
            <p className="mt-2 text-slate-200">Open daily {branch.hoursDisplay}. Contact us with your hotel location.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContact("whatsapp", "hotel-footer-whatsapp")} data-conversion-location="hotel-footer-whatsapp" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#2aab7b] px-6 py-4 font-bold text-white transition hover:bg-[#209267]">
            <WhatsAppIcon className="h-6 w-6" /> WhatsApp PMC Laguna
          </a>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-slate-200 bg-slate-200 sm:hidden">
        <a href={branch.phoneHref} onClick={onContact("phone", "hotel-sticky-call")} data-conversion-location="hotel-sticky-call" className="flex min-h-14 items-center justify-center gap-2 bg-white font-bold text-slate-900"><PhoneIcon /> Call</a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContact("whatsapp", "hotel-sticky-whatsapp")} data-conversion-location="hotel-sticky-whatsapp" className="flex min-h-14 items-center justify-center gap-2 bg-[#138a63] font-bold text-white"><WhatsAppIcon /> WhatsApp</a>
      </div>
    </main>
  );
}
