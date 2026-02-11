"use client";

import Image from "next/image";
import AboutCarousel from "./components/AboutCarousel";
import { useBranch } from "@/lib/useBranch";

const serviceItems = [
  {
    title: "Vaccination",
    desc: "Flu shots, travel vaccines, and immunizations to keep you protected before every journey.",
    image: "/solution/Vaccination.jpg",
    features: ["Travel-ready", "Family care"],
  },
  {
    title: "General Medicine & Check-up",
    desc: "Comprehensive examinations, consultation, and ongoing care with experienced physicians.",
    image: "/solution/General-Medicine-and-Check-up.jpg",
    features: ["Physical exams", "Chronic care"],
  },
  {
    title: "Blood Test",
    desc: "Full laboratory diagnostics with same-day results for fast, informed treatment decisions.",
    image: "/solution/Blood Test.jpg",
    features: ["Comprehensive panels", "Fast results"],
  },
  {
    title: "Wound Care Services",
    desc: "Professional wound assessment, cleaning, and dressing with dedicated follow-ups.",
    image: "/solution/Wound Care Services.jpg",
    features: ["Emergency ready", "Follow-up plan"],
  },
  {
    title: "Chest, Respiratory, Allergy",
    desc: "Specialized treatments for respiratory issues, allergies, and chest-related concerns.",
    image: "/solution/Chest-Respiratory-Allergy.jpg",
    features: ["Allergy care", "Breathing support"],
  },
  {
    title: "Urology Care Service",
    desc: "Expert consultations covering urinary health with discreet, compassionate support.",
    image: "/solution/Urology Care Service.jpg",
    features: ["Private rooms", "Specialist doctors"],
  },
  {
    title: "Annual Check-up Programme",
    desc: "Yearly full-body screening packages with clear reports and personal guidance.",
    image: "/solution/AnnualCheck-up Programme.jpg",
    features: ["Full screening", "Personalized advice"],
  },
  {
    title: "International Medical Service",
    desc: "Dedicated assistance for international patients, insurance coordination, and translators.",
    image: "/solution/International Medical Service.jpg",
    features: ["Multilingual", "Travel support"],
  },
];

export default function Home() {
  const branch = useBranch();

  const quickActions = [
    {
      label: "Make Appointment",
      href: `https://line.me/R/ti/p/${branch.line}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 7V3m8 4V3M5 11h14" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "Whatsapp",
      href: `https://wa.me/${branch.whatsapp}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M21 11.5a8.5 8.5 0 01-9.84 8.38L7 21l1.34-4.02A8.5 8.5 0 1121 11.5z"
          />
        </svg>
      ),
    },
    {
      label: "Line Official",
      href: `https://line.me/R/ti/p/${branch.line}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
          />
        </svg>
      ),
    },
    {
      label: "Location",
      href: branch.mapUrl,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 10a3 3 0 100-6 3 3 0 000 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 22s-8-5.4-8-12a8 8 0 1116 0c0 6.6-8 12-8 12z" />
        </svg>
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/phuket-medical-clinic-1-1024x228.webp"
                alt="Phuket Medical Clinic Laguna"
                width={200}
                height={44}
                className="h-10 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition">Reviews</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href={branch.phoneHref} className="hidden sm:block text-gray-700 hover:text-blue-600 transition font-medium">
                {branch.phoneDisplay}
              </a>
              <a href={`https://line.me/R/ti/p/${branch.line}`} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition font-medium">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Patients-bg.jpg"
            alt="Phuket Medical Clinic"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-900 font-semibold text-sm tracking-wide">{branch.hoursBadge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Your Trusted
              <span className="block mt-2 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Doctor Near You
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed font-light">
              Professional medical care at your doorstep.<br className="hidden sm:block" />
              <span className="text-blue-200">Response time under 60 minutes.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={branch.phoneHref} className="group relative bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl transition-all font-semibold text-lg shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative z-10">Call: {branch.phoneDisplay}</span>
              </a>

              <a href={`https://line.me/R/ti/p/${branch.line}`} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl transition-all font-semibold text-lg shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </a>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">English/Thai</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Certified Doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">All Phuket Areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a href="#services" className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-all">
            <span className="text-xs font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2 group-hover:border-white/50 transition-colors">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
            </div>
          </a>
        </div>
      </section>

      {/* Quick Action CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(30,64,175,0.15)] p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {quickActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-2.5 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50/50 px-3 py-5 text-center transition-all hover:from-blue-50 hover:to-cyan-50 hover:shadow-md hover:-translate-y-0.5 border border-gray-100 hover:border-blue-200"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white text-blue-600 shadow-sm group-hover:shadow group-hover:scale-105 transition-all">
                    {action.icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {action.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-900 font-semibold text-sm uppercase tracking-wide">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Phuket Medical Clinic
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Laguna</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted healthcare partner in paradise, delivering world-class medical services with compassion and excellence.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: Image Slider - Carousel Style */}
            <AboutCarousel />

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence in Healthcare</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Located in the heart of Laguna, Phuket, we are committed to delivering comprehensive and high-standard medical services with modern medical equipment and the latest technology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our experienced and skilled medical team provides care in a relaxing and friendly atmosphere, building trust and satisfaction for all our patients.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Modern Equipment & Technology</h4>
                    <p className="text-gray-600">State-of-the-art medical facilities with cutting-edge diagnostic and treatment technology.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Experienced Medical Team</h4>
                    <p className="text-gray-600">Certified doctors and nurses with international training and local expertise.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Available 24/7</h4>
                    <p className="text-gray-600">Round-the-clock medical care and emergency response across all Phuket areas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">International Standards</h4>
                    <p className="text-gray-600">Medical care meeting global healthcare standards with multilingual support.</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a href="#contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl transition-all font-semibold shadow-lg hover:shadow-xl">
                  <span>Book Your Appointment</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">250+</div>
              <div className="text-gray-600 font-medium">Health Sections</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">350+</div>
              <div className="text-gray-600 font-medium">Research Studies</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">180+</div>
              <div className="text-gray-600 font-medium">Awards Won</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Happy Patients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-900 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Healthcare Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From preventive care to specialized treatments, we offer world-class medical services tailored to your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceItems.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 22vw"
                    priority={service.title === "Vaccination"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white leading-tight">{service.title}</h3>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Patients-bg.jpg"
            alt="Patient consultation background"
            fill
            className="object-cover object-center brightness-110"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-900 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Trusted by international travelers and residents</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ruby Tang",
                time: "11 months ago",
                review: "I found PMC through a Google search, and I wanted to take a moment to express my heartfelt gratitude for the outstanding care and service I received from Dr. Asma Sucharoen and the nurses at PMC. Dr. Asma and her team are true experts. From the moment I arrived, I felt reassured by the warm and attentive care.",
                rating: 5
              },
              {
                name: "Kate Lowden",
                time: "11 months ago",
                review: "The best experience ever! I was bitten by a stray and I am not good with injections the staff were amazing looking after me and making it as comfortable as possible even staying open later and giving sweets afterwards to make sure I wasn't dizzy. Thank you to all the team it was great service!",
                rating: 5
              },
              {
                name: "Dragana Pejic",
                time: "11 months ago",
                review: "I came in yesterday to this amazing clinic after being bed bound for 3 days. I was accepted straight away and under an IV in 15 minutes!! The place is incredibly clean and the staff couldn't be more helpful and lovely. Couldn't recommend them enough.",
                rating: 5
              },
              {
                name: "Tuk Nussana",
                time: "11 months ago",
                review: "Impressed by PMC Laguna! Excellent service, professional staff, and fast, efficient care. Clean and modern—highly recommended!",
                rating: 5
              },
              {
                name: "Reto Heierli",
                time: "11 months ago",
                review: "I have had a small accident! I went there and the service was perfect! Thank you! Very professional, very friendly, no waiting time! Just all perfect!",
                rating: 5
              },
              {
                name: "Anna Filippova",
                time: "12 months ago",
                review: "The clinic is clean and nice, the consultation was very good quality. Good blood tests.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-4">{testimonial.review}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.time}</div>
                  </div>
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Your Health is Our Priority</p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is booking required?</h3>
                  <p className="text-gray-600">You can receive services both as a walk-in and by appointment, with consultation available.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Are there doctors available for consultation?</h3>
                  <p className="text-gray-600">We have a team of specialist doctors who speak English, along with an experienced team, ready to provide consultation and treatment.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">On which days is the clinic open?</h3>
                  <p className="text-gray-600">The clinic is open every day from {branch.hoursDisplay}.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Commitment Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-xl text-gray-600">Your health information is safe with us</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Confidentiality</h3>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Confidential Results</h4>
                  <p className="text-gray-600">Delivered only to you through secure communication channels.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Strict Data Protection</h4>
                  <p className="text-gray-600">Your medical records are handled in accordance with professional confidentiality standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Discreet Services</h4>
                  <p className="text-gray-600">Testing and consultations are conducted in private settings.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Support for Every Individual</h3>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Compassionate Care</h4>
                  <p className="text-gray-600">A judgment-free environment where every patient is treated with dignity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Dedicated Staff</h4>
                  <p className="text-gray-600">Professionals who are trained to address your concerns with empathy and expertise.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Educational Resources</h4>
                  <p className="text-gray-600">Materials to help you understand your health and treatment options.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl">
            <p className="text-gray-700 italic">
              <strong>Important:</strong> Our blood tests are designed to provide accurate information about your health. However, they are not a substitute for professional medical advice, diagnosis, or treatment. Always consult a healthcare provider for any health concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-bg.jpg"
            alt="Contact Us Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/90 to-blue-800/85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white font-semibold text-sm uppercase tracking-wide">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Contact Us</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">We&apos;re here to take care of your health</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Address</h3>
                  {branch.address.map((line, i) => (
                    <p key={i} className="text-white/90">{line}</p>
                  ))}
                  <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 hover:underline text-sm">View on Google Maps →</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Phone</h3>
                  <a href={branch.phoneHref} className="text-white/90 hover:text-white">{branch.phoneDisplay}</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Opening Hours</h3>
                  <p className="text-white/90">Open Everyday</p>
                  <p className="text-white/90">{branch.hoursDisplay}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Line</h3>
                  <p className="text-white/90">{branch.line}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
              <p className="text-gray-600 mb-6">We&apos;ll be at your location in under 60 minutes*</p>
              <div className="space-y-4">
                <a href={`https://line.me/R/ti/p/${branch.line}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition font-medium shadow-lg hover:shadow-xl text-center">
                  Book Online Now
                </a>
                <a href={branch.phoneHref} className="block w-full bg-white text-blue-600 py-4 rounded-xl hover:bg-gray-50 transition font-medium border-2 border-blue-600 text-center">
                  Call {branch.phoneDisplay}
                </a>
                <div className="grid grid-cols-2 gap-4">
                  <a href={`https://line.me/R/ti/p/${branch.line}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition font-medium text-sm">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                    Line
                  </a>
                  <a href={`https://wa.me/${branch.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition font-medium text-sm">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Email</h4>
                  <a href="mailto:team@phuketmedicalclinic.com" className="flex items-center text-gray-600 hover:text-blue-600 text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    team@phuketmedicalclinic.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4">Phuket Medical Clinic</div>
              <p className="text-gray-400 text-sm">Your trusted healthcare partner in paradise</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition">Disease Screening</a></li>
                <li><a href="#services" className="hover:text-white transition">Health Check-ups</a></li>
                <li><a href="#services" className="hover:text-white transition">Vaccinations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href={`https://line.me/R/ti/p/${branch.line}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Book Appointment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href={branch.phoneHref} className="hover:text-white transition">{branch.phoneDisplay}</a></li>
                <li><a href="mailto:team@phuketmedicalclinic.com" className="hover:text-white transition">team@phuketmedicalclinic.com</a></li>
                <li>Line: <a href={`https://line.me/R/ti/p/${branch.line}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{branch.line}</a></li>
                <li><a href={`https://wa.me/${branch.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 {branch.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
