"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    src: "/fms-demo/1-upload.png",
    title: "Upload Video",
    description: "Upload a deep squat assessment video to begin movement analysis. Supports .mov, .mp4, and .avi formats.",
  },
  {
    src: "/fms-demo/2-uploading.png",
    title: "Pose Extraction",
    description: "Our computer vision pipeline extracts pose data from every frame of your video automatically.",
  },
  {
    src: "/fms-demo/3-skeleton.png",
    title: "Skeleton Overlay & Frame Review",
    description: "Review the extracted skeleton overlay frame-by-frame. Mark start and end frames to define the assessment window.",
  },
  {
    src: "/fms-demo/4-assessment.png",
    title: "Score the Movement",
    description: "Score the Deep Squat from 0–3 using Quick Mode or detailed criteria. Add pain flags and clinical notes.",
  },
  {
    src: "/fms-demo/5-completed.png",
    title: "Completed Assessment",
    description: "View saved assessments with frame ranges, scores, and tag additional frame segments as needed.",
  },
  {
    src: "/fms-demo/6-export.png",
    title: "Export Reports",
    description: "Export data as a Patient Report with recommendations or a Provider Report with full clinical data and CPT codes.",
  },
  {
    src: "/fms-demo/7-patient-report.png",
    title: "Patient Report",
    description: "Patient-friendly report showing assessment details, asymmetries detected, and recommended focus areas.",
  },
  {
    src: "/fms-demo/8-provider-report.png",
    title: "Provider Report — Scoring Criteria",
    description: "Detailed scoring criteria with thresholds, bilateral differences, and asymmetry flags for clinical documentation.",
  },
  {
    src: "/fms-demo/9-provider-detail.png",
    title: "Provider Report — CPT Codes",
    description: "Suggested CPT codes with descriptions and units for streamlined billing documentation.",
  },
];

export default function FMSDemoPage() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-[#FEFBFB] via-white to-[#F8F6FF]">
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#F8E8E8] to-[#E8D5D5] blob opacity-60 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-[#E8E0F0] to-[#D4C4E0] blob opacity-50 blur-3xl" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-[#E0EDE8] to-[#C7DDD0] blob opacity-50 blur-3xl" style={{ animationDelay: '2s' }} />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-6xl mx-auto backdrop-blur-md bg-white/20 rounded-full mt-6 border border-white/20 shadow-lg shadow-black/5">
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-[#D4A5A5] transition-colors transform group-hover:-translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[#6A6A6A] group-hover:text-[#D4A5A5] transition-colors font-medium">Home</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/climbing" className="px-5 py-2.5 text-[#6A6A6A] hover:text-[#7DB9A3] transition-colors text-sm font-medium">
            Climbing
          </Link>
          <span className="px-5 py-2.5 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] text-white rounded-full text-sm font-medium shadow-lg shadow-[#D4A5A5]/25">
            Movement Demo
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pt-16 pb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text mb-4 leading-tight">
          Deep Squat Movement Assessment
        </h1>
        <p className="text-xl text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
          Computer vision–powered functional movement screening with automated pose extraction,
          scoring, and clinical report generation.
        </p>
      </section>

      {/* Try It Card */}
      <section className="relative z-10 max-w-2xl mx-auto px-8 py-6">
        <a
          href="https://pure-illumination-production.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-gradient-to-r from-[#D4A5A5]/10 via-white/80 to-[#B8A9C9]/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:shadow-[#D4A5A5]/20 transition-all duration-500 hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
                  Test it out for yourself
                </h3>
                <p className="text-sm text-[#8A8A8A]">Try the live movement assessment tool</p>
              </div>
            </div>
            <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md group-hover:bg-gradient-to-r group-hover:from-[#D4A5A5] group-hover:to-[#B8A9C9] transition-all duration-300">
              <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </a>
      </section>

      {/* Carousel */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-12">
        <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          
          {/* Slide counter */}
          <div className="absolute top-6 right-6 z-20 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/50">
            <span className="text-sm font-semibold text-[#4A4A4A]">{current + 1}</span>
            <span className="text-sm text-[#AFAFAF]"> / {slides.length}</span>
          </div>

          {/* Image area */}
          <div
            className="relative w-full overflow-hidden bg-gradient-to-br from-[#F8F6FF] to-[#FEFBFB]"
            style={{ aspectRatio: "16/9.5" }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center p-4"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "scale(1)" : "scale(0.95)",
                  pointerEvents: i === current ? "auto" : "none",
                }}
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  width={1400}
                  height={788}
                  className="rounded-xl shadow-lg object-contain max-h-full"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Nav arrows */}
            <button
              onClick={() => { prev(); setIsAutoPlaying(false); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 flex items-center justify-center hover:bg-white transition-colors group"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-[#D4A5A5] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => { next(); setIsAutoPlaying(false); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 flex items-center justify-center hover:bg-white transition-colors group"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-[#D4A5A5] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Caption area */}
          <div className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-bold">{current + 1}</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
                {slides[current].title}
              </h3>
            </div>
            <p className="text-[#6A6A6A] leading-relaxed max-w-2xl mx-auto">
              {slides[current].description}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 pb-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-gradient-to-r from-[#D4A5A5] to-[#C49494]"
                    : "w-2 bg-[#E5E5E5] hover:bg-[#D4A5A5]/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
          What It Does
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-[#D4A5A5]/20 transition-all duration-500 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-r from-[#D4A5A5]/20 to-[#C49494]/20 rounded-2xl flex items-center justify-center mb-5 group-hover:from-[#D4A5A5] group-hover:to-[#C49494] transition-all duration-300">
              <span className="text-xl group-hover:text-white">📹</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#4A4A4A]">Pose Extraction</h3>
            <p className="text-[#6A6A6A] text-sm leading-relaxed">
              Automatic skeleton overlay with frame-by-frame joint tracking from uploaded video.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-[#B8A9C9]/20 transition-all duration-500 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-r from-[#B8A9C9]/20 to-[#A598B8]/20 rounded-2xl flex items-center justify-center mb-5 group-hover:from-[#B8A9C9] group-hover:to-[#A598B8] transition-all duration-300">
              <span className="text-xl group-hover:text-white">📊</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#4A4A4A]">Automated Movement Scoring</h3>
            <p className="text-[#6A6A6A] text-sm leading-relaxed">
              Score 0–3 with Quick Mode or detailed criteria. Bilateral difference and asymmetry detection built in.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-[#7DB9A3]/20 transition-all duration-500 hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-r from-[#7DB9A3]/20 to-[#6AA892]/20 rounded-2xl flex items-center justify-center mb-5 group-hover:from-[#7DB9A3] group-hover:to-[#6AA892] transition-all duration-300">
              <span className="text-xl group-hover:text-white">📋</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#4A4A4A]">Clinical Reports</h3>
            <p className="text-[#6A6A6A] text-sm leading-relaxed">
              Patient &amp; provider reports with assessment details, focus areas, and suggested CPT codes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16 text-center">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/60">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
            Interested in the Movement Assessment Tool?
          </h2>
          <p className="text-[#6A6A6A] mb-8 max-w-lg mx-auto">
            We&apos;re building the future of movement assessment. Get in touch to learn more or request early access.
          </p>
          <Link
            href="/#signup"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] text-white rounded-full hover:from-[#C49494] hover:to-[#A598B8] transition-all duration-500 hover:scale-110 text-lg font-semibold shadow-2xl shadow-[#D4A5A5]/30 hover:shadow-[#D4A5A5]/50"
          >
            <span>Request Access</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto px-8 py-16">
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent rounded-3xl backdrop-blur-sm" />
        <div className="relative text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
            dynalytix
          </h3>
          <p className="text-[#8A8A8A] mb-6">Movement is data. Patterns are prevention.</p>
          <div className="flex justify-center space-x-8 mb-6">
            <Link href="/" className="text-[#8A8A8A] hover:text-[#D4A5A5] transition-colors duration-300">Home</Link>
            <Link href="/climbing" className="text-[#8A8A8A] hover:text-[#7DB9A3] transition-colors duration-300">Climbing</Link>
            <Link href="/privacy" className="text-[#8A8A8A] hover:text-[#D4A5A5] transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="text-[#8A8A8A] hover:text-[#B8A9C9] transition-colors duration-300">Terms of Service</Link>
            <a href="mailto:hello@dynalytix.com" className="text-[#8A8A8A] hover:text-[#7DB9A3] transition-colors duration-300">Contact</a>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent mb-4" />
          <p className="text-sm text-[#AFAFAF]">© {new Date().getFullYear()} Dynalytix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
