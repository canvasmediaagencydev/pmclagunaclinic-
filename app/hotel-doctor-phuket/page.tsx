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

const hotelHours = "09:00 AM - 12:00 AM";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.4a8.6 8.6 0 0 1-12.7 7.5L3.5 20l1.2-4.1A8.5 8.5 0 1 1 20.5 11.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.7c.5 1 1.3 1.8 2.3 2.3l.7-.5c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.2.3-2.3-.2-1.1-.5-2.4-1.4-3.6-2.6-1.2-1.2-2.1-2.5-2.6-3.6-.5-1.1-.4-1.9-.2-2.3Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5.4 3.9 7.8 3c.6-.2 1.2.1 1.4.7l1.1 3.4c.2.5 0 1.1-.5 1.4l-1.5.9a15.2 15.2 0 0 0 6.3 6.3l.9-1.5c.3-.5.9-.7 1.4-.5l3.4 1.1c.6.2.9.8.7 1.4l-.9 2.4c-.3.8-1.1 1.4-2 1.3C10.7 19.7 4.3 13.3 4.1 5.9c0-.9.5-1.7 1.3-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
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
  const serviceCards = [
    { number: "01", image: "/hotel-doctor/general-consultation.jpg", title: "General Medical Consultation", description: "Medical consultation support based on clinical assessment." },
    { number: "02", image: "/hotel-doctor/wound-care.jpg", title: "Basic Wound Assessment and Care", description: "Support for suitable minor wound-care requests, subject to assessment." },
    { number: "03", image: "/hotel-doctor/health-guidance.jpg", title: "Health Check-Up Guidance", description: "Guidance on appropriate next steps for your health concern." },
    { number: "04", image: "/hotel-doctor/clinic-coordination.jpg", title: "Clinic Appointment Coordination", description: "Clinic appointment coordination when this is the appropriate option." },
    { number: "05", image: "/hotel-doctor/hospital-referral.jpg", title: "Hospital Referral When Appropriate", description: "Referral guidance when further medical care is needed." },
    { number: "06", image: "/hotel-doctor/thai-english-support.jpg", title: "English and Thai Communication", description: "Communication support for hotel guests and teams." },
  ];

  return (
    <main className="min-h-screen bg-white pb-16 font-sans text-[#1d2939] sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-[#e4e9f1] bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" aria-label="PMC Laguna home"><Image src="/phuket-medical-clinic-1-1024x228.webp" alt="Phuket Medical Clinic Laguna" width={190} height={43} className="h-9 w-auto" priority /></Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#344054] lg:flex" aria-label="Hotel Doctor sections">
            <a href="#services" className="hover:text-[#304e95]">Services</a><a href="#how" className="hover:text-[#304e95]">How it works</a><a href="#areas" className="hover:text-[#304e95]">Areas</a><a href="#faq" className="hover:text-[#304e95]">FAQ</a>
          </nav>
          <a href={branch.phoneHref} onClick={onContact("phone", "hotel-header-call")} data-conversion-location="hotel-header-call" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-[#304e95] px-4 py-2 text-sm font-bold text-[#304e95] transition hover:bg-[#f6f8fc]"><PhoneIcon /> <span className="hidden sm:inline">Call {branch.phoneDisplay}</span><span className="sm:hidden">Call</span></a>
        </div>
      </header>

      <section className="bg-[#f6f8fc]">
        <div className="mx-auto grid max-w-6xl items-center gap-9 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_.92fr] lg:py-20">
          <div>
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.15em] text-[#304e95]"><span className="h-2 w-2 rounded-sm bg-[#ba453d]" /> Hotel Doctor · PMC Laguna</p>
            <h1 className="mt-5 max-w-2xl text-balance text-4xl font-extrabold leading-[1.08] tracking-[-.035em] text-[#22396f] sm:text-5xl lg:text-[56px]">Doctor Visit to Your Hotel in Phuket</h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-[#344054]">Medical consultation support for guests staying in Laguna, Bang Tao and nearby Phuket areas. Contact PMC Laguna to check service availability for your hotel.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContact("whatsapp", "hotel-hero-whatsapp")} data-conversion-location="hotel-hero-whatsapp" className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-3 rounded-lg bg-[#304e95] px-5 py-3 text-center font-bold text-white shadow-sm transition hover:bg-[#22396f]"><WhatsAppIcon /> Check Hotel Visit Availability</a>
              <a href={branch.phoneHref} onClick={onContact("phone", "hotel-hero-call")} data-conversion-location="hotel-hero-call" className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-3 rounded-lg border-2 border-[#304e95] bg-white px-5 py-3 text-center font-bold text-[#304e95] transition hover:bg-[#f6f8fc]"><PhoneIcon /> Call PMC Laguna</a>
            </div>
            <div className="mt-6 border-t border-[#dfe5ef] pt-4 text-sm leading-6 text-[#667085]"><strong className="text-[#1d2939]">Open daily {hotelHours}.</strong><br />Hotel visits depend on location, availability and clinical assessment. For life-threatening emergencies, call 1669.</div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#e4e9f1] shadow-sm sm:min-h-[460px]"><Image src="/Patients-bg.jpg" alt="PMC Laguna medical team" fill priority sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover object-center" /></div>
        </div>
      </section>

      <section className="border-y border-[#e4e9f1] bg-white"><div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-5 px-5 py-6 sm:grid-cols-4 sm:px-8"><div className="border-l-2 border-[#ba453d] pl-4"><b className="block text-[#22396f]">PMC Laguna</b><span className="text-sm text-[#667085]">Medical clinic contact</span></div><div className="border-l-2 border-[#ba453d] pl-4"><b className="block text-[#22396f]">Laguna & Bang Tao</b><span className="text-sm text-[#667085]">Area assessed first</span></div><div className="border-l-2 border-[#ba453d] pl-4"><b className="block text-[#22396f]">Thai & English</b><span className="text-sm text-[#667085]">Communication support</span></div><div className="border-l-2 border-[#ba453d] pl-4"><b className="block text-[#22396f]">Clear next steps</b><span className="text-sm text-[#667085]">Visit, clinic or referral</span></div></div></section>

      <section id="services" className="scroll-mt-24 bg-[#f6f8fc]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-extrabold uppercase tracking-[.14em] text-[#304e95]">Hotel Medical Support</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#22396f] sm:text-4xl">What the Doctor Can Help With</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#667085]">Medical support options for hotel guests. The appropriate next step is confirmed after location, availability and clinical assessment.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <article key={service.number} className="overflow-hidden rounded-xl border border-[#e4e9f1] bg-white shadow-sm">
                <div className="relative aspect-[16/10] bg-[#e4e9f1]">
                  <Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-extrabold tracking-[.14em] text-[#ba453d]">{service.number}</p>
                  <h3 className="mt-3 text-lg font-extrabold leading-6 text-[#1d2939]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#667085]">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-[#667085]">Available services vary by location, medical assessment and staffing. This is not an emergency response service. For life-threatening emergencies, call 1669 immediately.</p>
        </div>
      </section>

      <section id="how" className="scroll-mt-24 bg-white"><div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"><div className="max-w-2xl"><p className="text-sm font-extrabold uppercase tracking-[.14em] text-[#304e95]">Simple next steps</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#22396f] sm:text-4xl">How Hotel Visits Work</h2></div><ol className="mt-10 grid gap-8 md:grid-cols-3">{[["01","Message or call","Share your hotel name, preferred language and a brief description of the concern."],["02","Confirm options","Our team checks the location, availability and appropriate next step."],["03","Arrange care","Depending on assessment, this may include a hotel visit, clinic appointment or referral."]].map(([n,title,text], i) => <li key={n} className="relative border-t-2 border-[#304e95] pt-5"><span className="text-sm font-extrabold tracking-[.16em] text-[#ba453d]">{n}</span><h3 className="mt-5 text-xl font-extrabold text-[#22396f]">{title}</h3><p className="mt-3 leading-7 text-[#667085]">{text}</p>{i < 2 && <span className="absolute right-0 top-6 hidden text-[#ba453d] md:block">→</span>}</li>)}</ol></div></section>

      <section id="areas" className="scroll-mt-24 border-y border-[#e4e9f1] bg-[#f6f8fc]"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_.8fr]"><div><p className="text-sm font-extrabold uppercase tracking-[.14em] text-[#304e95]">Service areas</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#22396f] sm:text-4xl">Start with your hotel location</h2><p className="mt-5 max-w-xl text-lg leading-8 text-[#667085]">We currently assess requests from hotels in Laguna, Bang Tao and nearby Phuket areas. Share your hotel name and location so our team can confirm whether a visit can be arranged.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContact("whatsapp", "hotel-area-whatsapp")} data-conversion-location="hotel-area-whatsapp" className="mt-7 inline-flex min-h-[52px] items-center gap-3 rounded-lg bg-[#304e95] px-6 py-3 font-bold text-white transition hover:bg-[#22396f]"><WhatsAppIcon /> Check Your Hotel Location</a></div><div className="grid content-center gap-3 sm:grid-cols-3 lg:grid-cols-1"><div className="rounded-xl bg-white p-5 font-bold text-[#22396f] shadow-sm">Laguna</div><div className="rounded-xl bg-white p-5 font-bold text-[#22396f] shadow-sm">Bang Tao</div><div className="rounded-xl bg-white p-5 font-bold text-[#22396f] shadow-sm">Nearby areas <span className="font-normal text-[#667085]">— on request</span></div></div></div></section>

      <section id="faq" className="scroll-mt-24 bg-white"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-sm font-extrabold uppercase tracking-[.14em] text-[#304e95]">Frequently asked questions</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#22396f] sm:text-4xl">Before you contact PMC</h2></div><div className="divide-y divide-[#e4e9f1] border-y border-[#e4e9f1]">{[["Can a doctor visit my hotel?","Hotel visits may be available depending on location, timing and clinical assessment. Contact us with your hotel name to check."],["How do I request a hotel visit?","WhatsApp or call PMC Laguna with your hotel location and preferred way to be contacted."],["How quickly can you respond?","Response timing depends on location and current availability. Our team will confirm the next available option when you contact us."],["What is the cost of a hotel visit?","Contact our team for current hotel-visit fees and any additional charges applicable to your location and requested service."],["What should I do in an emergency?","For life-threatening emergencies, severe breathing difficulty, loss of consciousness, major bleeding or a serious accident, call 1669 immediately."]].map(([q,a]) => <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-[#22396f]"><span>{q}</span><span className="text-2xl font-light text-[#ba453d] transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-3 leading-7 text-[#667085]">{a}</p></details>)}</div></div></section>

      <section className="bg-[#304e95]"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-5 py-14 sm:px-8 md:flex-row md:items-center"><div><p className="text-sm font-bold uppercase tracking-[.14em] text-[#dce4f5]">PMC Laguna · Hotel Doctor</p><h2 className="mt-3 text-3xl font-extrabold text-white">Need to check hotel visit availability?</h2><p className="mt-3 max-w-xl leading-7 text-[#dce4f5]">Open daily {hotelHours}. Share your hotel location and we will confirm the appropriate next step.</p></div><div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContact("whatsapp", "hotel-footer-whatsapp")} data-conversion-location="hotel-footer-whatsapp" className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 font-bold text-[#22396f] transition hover:bg-[#f6f8fc]"><WhatsAppIcon /> Check Availability</a><a href={branch.phoneHref} onClick={onContact("phone", "hotel-footer-call")} data-conversion-location="hotel-footer-call" className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-lg border-2 border-white px-5 py-3 font-bold text-white transition hover:bg-white/10"><PhoneIcon /> Call PMC</a></div></div></section>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[3fr_2fr] gap-px border-t border-[#e4e9f1] bg-[#e4e9f1] sm:hidden"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onContact("whatsapp", "hotel-sticky-whatsapp")} data-conversion-location="hotel-sticky-whatsapp" className="flex min-h-14 items-center justify-center gap-2 bg-[#304e95] px-3 text-center text-sm font-bold text-white"><WhatsAppIcon /> Check Availability</a><a href={branch.phoneHref} onClick={onContact("phone", "hotel-sticky-call")} data-conversion-location="hotel-sticky-call" className="flex min-h-14 items-center justify-center gap-2 bg-white font-bold text-[#22396f]"><PhoneIcon /> Call</a></div>
    </main>
  );
}
