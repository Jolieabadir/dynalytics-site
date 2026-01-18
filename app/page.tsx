"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const demoScreenshots = [
  {
    src: "/demo/01-upload.png",
    title: "Upload Your Video",
    description: "Simply upload a climbing video (.mov, .mp4, .avi) to begin the analysis process."
  },
  {
    src: "/demo/02-skeleton.png",
    title: "Automatic Pose Detection",
    description: "Our AI automatically detects and tracks your body's skeleton, measuring joint angles in real-time."
  },
  {
    src: "/demo/03-move-type.png",
    title: "Classify Your Moves",
    description: "Mark the start and end of movements, then classify them as lock-offs, dynos, deadpoints, and more."
  },
  {
    src: "/demo/04-define-move-1.png",
    title: "Detailed Move Analysis",
    description: "Specify which arm, elbow angle, contact points, and how long the position was held."
  },
  {
    src: "/demo/05-define-move-2.png",
    title: "Rate Form & Effort",
    description: "Add technique modifiers, rate your form quality, and log your perceived effort level."
  },
  {
    src: "/demo/06-tagging-1.png",
    title: "Tag Sensations",
    description: "Scrub through frames and tag how your body felt - sharp pain, pumped, strong, fatigued."
  },
  {
    src: "/demo/07-tagging-2.png",
    title: "Precise Body Mapping",
    description: "Associate sensations with specific body parts and intensity levels for comprehensive data."
  },
  {
    src: "/demo/08-thank-you.png",
    title: "Contribute to Research",
    description: "Your data helps build better movement analysis tools for climbers everywhere."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demoScreenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demoScreenshots.length) % demoScreenshots.length);
  };

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-[#FEFBFB] via-white to-[#F8F6FF]">
      {/* Enhanced floating blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#F8E8E8] to-[#E8D5D5] blob opacity-60 blur-3xl animate-pulse" />
      <div 
        className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-[#E8E0F0] to-[#D4C4E0] blob opacity-50 blur-3xl" 
        style={{ animationDelay: '1s' }}
      />
      <div 
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-[#E0EDE8] to-[#C7DDD0] blob opacity-50 blur-3xl" 
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-[#F0E8F8] to-[#E0D4E8] blob opacity-30 blur-2xl" 
        style={{ animationDelay: '3s' }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-[#E8F0E8] to-[#D0E8D0] blob opacity-40 blur-2xl" 
        style={{ animationDelay: '4s' }}
      />

      {/* Enhanced Navigation */}
      <nav className="relative z-10 flex justify-end items-center px-8 py-6 max-w-6xl mx-auto backdrop-blur-md bg-white/20 rounded-full mt-6 border border-white/20 shadow-lg shadow-black/5">
        <Link 
          href="#signup" 
          className="px-6 py-3 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] text-white rounded-full hover:from-[#C49494] hover:to-[#B8898A] transition-all duration-300 text-sm font-medium shadow-lg shadow-[#D4A5A5]/25 hover:shadow-[#D4A5A5]/40 hover:scale-105 transform"
        >
          Join Beta
        </Link>
      </nav>

      {/* Stunning Hero Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pt-20 pb-32 text-center">
        <div className="float relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-[#D4A5A5]/20 to-[#B8A9C9]/20 rounded-full blur-xl" />
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-r from-[#B8A9C9]/20 to-[#7DB9A3]/20 rounded-full blur-xl" />
          
          <h1 className="text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text mb-8 leading-tight drop-shadow-sm">
            dynalytics
          </h1>
          <div className="relative inline-block">
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#B8A9C9] via-[#D4A5A5] to-[#7DB9A3] bg-clip-text text-transparent mb-12 tracking-wide relative z-10">
              Movement is data. Patterns are prevention.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-[#B8A9C9]/10 to-[#D4A5A5]/10 rounded-2xl blur-xl -z-10" />
          </div>
          <div className="relative backdrop-blur-sm bg-white/30 rounded-3xl p-8 mb-12 border border-white/40 shadow-xl shadow-black/5">
            <p className="text-xl text-[#5A5A5A] max-w-2xl mx-auto leading-relaxed font-medium">
              Dynalytics uses pose estimation and machine learning to analyze your climbing movement, 
              helping you understand your body and prevent injuries before they happen.
            </p>
          </div>
          
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <Link
              href="#signup"
              className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] text-white rounded-full hover:from-[#C49494] hover:to-[#A598B8] transition-all duration-500 hover:scale-110 text-lg font-semibold shadow-2xl shadow-[#D4A5A5]/30 transform hover:shadow-[#D4A5A5]/50"
            >
              <span>Become a Data Contributor</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B8A9C9]/10 to-transparent blur-3xl" />
          <h2 className="relative text-5xl font-bold bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text text-transparent">
            Who Is This For?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-lg p-8 shadow-2xl border border-white/50 hover:shadow-[#D4A5A5]/20 transition-all duration-500 hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4A5A5]/20 to-transparent rounded-bl-full" />
            <div className="w-16 h-16 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🧗</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#4A4A4A]">Climbers</h3>
            <p className="text-[#6A6A6A] leading-relaxed">
              Understand your movement patterns, identify weaknesses, and track your progress over time.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-lg p-8 shadow-2xl border border-white/50 hover:shadow-[#B8A9C9]/20 transition-all duration-500 hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B8A9C9]/20 to-transparent rounded-bl-full" />
            <div className="w-16 h-16 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🩺</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#4A4A4A]">Physical Therapists</h3>
            <p className="text-[#6A6A6A] leading-relaxed">
              Access quantified movement data to better understand and treat climbing-specific injuries.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-lg p-8 shadow-2xl border border-white/50 hover:shadow-[#7DB9A3]/20 transition-all duration-500 hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7DB9A3]/20 to-transparent rounded-bl-full" />
            <div className="w-16 h-16 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#4A4A4A]">Researchers</h3>
            <p className="text-[#6A6A6A] leading-relaxed">
              Contribute to the growing body of knowledge in climbing biomechanics and injury prevention.
            </p>
          </div>
        </div>
      </section>

      {/* What We Track */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text text-transparent mb-6">
            What We Track
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7DB9A3] to-[#D4A5A5] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#6A6A6A] max-w-3xl mx-auto leading-relaxed">
            Every frame analyzed for biomechanical insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-[#D4A5A5]/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/80">
            <div className="w-16 h-16 bg-gradient-to-r from-[#D4A5A5]/20 to-[#C49494]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-[#D4A5A5] group-hover:to-[#C49494] transition-all duration-300">
              <span className="text-2xl group-hover:text-white">📐</span>
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">12 Joint Angles</h3>
            <p className="text-[#6A6A6A] leading-relaxed">
              Real-time tracking of shoulder, elbow, hip, and knee positioning throughout your climb
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-[#B8A9C9]/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/80">
            <div className="w-16 h-16 bg-gradient-to-r from-[#B8A9C9]/20 to-[#A598B8]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-[#B8A9C9] group-hover:to-[#A598B8] transition-all duration-300">
              <span className="text-2xl group-hover:text-white">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">Velocity Vectors</h3>
            <p className="text-[#6A6A6A] leading-relaxed">
              Detailed motion analysis including speed and acceleration patterns across movement phases
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-[#7DB9A3]/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/80">
            <div className="w-16 h-16 bg-gradient-to-r from-[#7DB9A3]/20 to-[#6AA892]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-[#7DB9A3] group-hover:to-[#6AA892] transition-all duration-300">
              <span className="text-2xl group-hover:text-white">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">Sensation Labels</h3>
            <p className="text-[#6A6A6A] leading-relaxed">
              Self-reported feelings of pump, fatigue, and confidence to correlate with biomechanics
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-lg text-[#6A6A6A] max-w-3xl mx-auto leading-relaxed">
            From generic knowledge to personalized insights
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8 max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl px-8 py-6 text-center shadow-xl border border-white/50">
            <p className="font-bold text-[#4A4A4A] text-lg">Base Model</p>
            <p className="text-sm text-[#7A7A7A]">Trained on many climbers</p>
          </div>
          
          <svg className="w-8 h-8 text-[#B8A9C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>

          <div className="bg-white/70 backdrop-blur-lg rounded-3xl px-8 py-6 text-center shadow-xl border border-white/50">
            <p className="font-bold text-[#4A4A4A] text-lg">Generic Guidelines</p>
            <p className="text-sm text-[#7A7A7A]">General movement principles</p>
          </div>

          <svg className="w-8 h-8 text-[#D4A5A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>

          <div className="bg-white/70 backdrop-blur-lg rounded-3xl px-8 py-6 text-center shadow-xl border border-white/50">
            <p className="font-bold text-[#4A4A4A] text-lg">You Upload Videos</p>
            <p className="text-sm text-[#7A7A7A]">Your climbing sessions</p>
          </div>

          <svg className="w-8 h-8 text-[#7DB9A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>

          <div className="bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] rounded-3xl px-8 py-6 text-center shadow-xl">
            <p className="font-bold text-white text-lg">Personal Model</p>
            <p className="text-sm text-white/90">Learns YOUR body, YOUR style</p>
          </div>
        </div>
      </section>

      {/* ========== NEW DEMO SECTION ========== */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text text-transparent mb-6">
            See It In Action
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#6A6A6A] max-w-3xl mx-auto leading-relaxed">
            Walk through the data collection experience
          </p>
        </div>

        {/* Demo Carousel */}
        <div className="relative">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/60 overflow-hidden">
            {/* Main Image Display */}
            <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden bg-[#F5F3F0] shadow-inner">
              <Image
                src={demoScreenshots[currentSlide].src}
                alt={demoScreenshots[currentSlide].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Slide Info */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A5A5]/10 to-[#B8A9C9]/10 rounded-full mb-4">
                <span className="text-sm font-medium text-[#6A6A6A]">Step {currentSlide + 1} of {demoScreenshots.length}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#4A4A4A] mb-3">
                {demoScreenshots[currentSlide].title}
              </h3>
              <p className="text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
                {demoScreenshots[currentSlide].description}
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/70 border border-white/50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-[#D4A5A5] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {demoScreenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] w-8'
                        : 'bg-[#E5E5E5] hover:bg-[#D4A5A5]/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/70 border border-white/50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-[#6A6A6A] group-hover:text-[#D4A5A5] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#D4A5A5]/20 to-[#B8A9C9]/20 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#7DB9A3]/20 to-[#B8A9C9]/20 rounded-full blur-2xl -z-10" />
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          {demoScreenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? 'ring-2 ring-[#D4A5A5] ring-offset-2 scale-110'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>
      {/* ========== END DEMO SECTION ========== */}

      {/* Data Pipeline */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-white/50 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/50">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
            Data Pipeline
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E5E5E5]">
                  <th className="text-left py-4 text-[#4A4A4A] font-semibold">Stage</th>
                  <th className="text-left py-4 text-[#4A4A4A] font-semibold">Process</th>
                  <th className="text-left py-4 text-[#4A4A4A] font-semibold">Output</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#F0F0F0]">
                  <td className="py-4 text-[#6A6A6A]">Video Upload</td>
                  <td className="py-4 text-[#6A6A6A]">Pose estimation analysis</td>
                  <td className="py-4 text-[#6A6A6A]">Joint coordinates & angles</td>
                </tr>
                <tr className="border-b border-[#F0F0F0]">
                  <td className="py-4 text-[#6A6A6A]">Motion Analysis</td>
                  <td className="py-4 text-[#6A6A6A]">Velocity & acceleration calculation</td>
                  <td className="py-4 text-[#6A6A6A]">Movement vectors</td>
                </tr>
                <tr>
                  <td className="py-4 text-[#6A6A6A]">Pattern Recognition</td>
                  <td className="py-4 text-[#6A6A6A]">ML model identification</td>
                  <td className="py-4 text-[#6A6A6A]">Personalized insights</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
          Roadmap
        </h2>
        
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 flex-1 shadow-xl border border-white/50">
              <h3 className="font-bold text-[#4A4A4A] mb-2">Phase 1: MVP (Current)</h3>
              <p className="text-[#6A6A6A]">Basic pose estimation and data collection platform</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 flex-1 shadow-xl border border-white/50">
              <h3 className="font-bold text-[#4A4A4A] mb-2">Phase 2: Personalization</h3>
              <p className="text-[#6A6A6A]">Individual movement pattern analysis and custom recommendations</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white font-bold">3</span>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 flex-1 shadow-xl border border-white/50">
              <h3 className="font-bold text-[#4A4A4A] mb-2">Phase 3: Predictive Analytics</h3>
              <p className="text-[#6A6A6A]">Injury risk assessment and prevention strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contribute */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-6">
            Why Contribute?
          </h2>
          <p className="text-lg text-[#6A6A6A] max-w-3xl mx-auto leading-relaxed">
            Help build the future of climbing performance analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] bg-clip-text text-transparent">
              For You
            </h3>
            <ul className="space-y-3 text-[#6A6A6A]">
              <li className="flex items-start gap-3">
                <span className="text-[#7DB9A3] mt-1">•</span>
                Get personalized movement insights
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7DB9A3] mt-1">•</span>
                Free access to beta platform
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7DB9A3] mt-1">•</span>
                Early access to new features
              </li>
            </ul>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#B8A9C9] to-[#A598B8] bg-clip-text text-transparent">
              For The Community
            </h3>
            <ul className="space-y-3 text-[#6A6A6A]">
              <li className="flex items-start gap-3">
                <span className="text-[#7DB9A3] mt-1">•</span>
                Advance climbing biomechanics research
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7DB9A3] mt-1">•</span>
                Improve injury prevention methods
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7DB9A3] mt-1">•</span>
                Help develop better training protocols
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Enhanced Signup */}
      <section id="signup" className="max-w-4xl mx-auto px-8 py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4A5A5]/10 via-[#B8A9C9]/5 to-[#7DB9A3]/10 rounded-3xl blur-3xl" />
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/60">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text text-transparent mb-4">
                Join The Beta
              </h2>
              <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
                Be among the first to experience personalized climbing movement analysis.
                Help us revolutionize how climbers understand their bodies.
              </p>
            </div>

            <form className="max-w-md mx-auto space-y-6">
              <div className="group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:border-[#D4A5A5] transition-all duration-300 text-[#4A4A4A] placeholder-[#8A8A8A] shadow-lg focus:shadow-xl group-hover:bg-white/80"
                />
              </div>
              
              <div className="group">
                <select className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:border-[#D4A5A5] transition-all duration-300 text-[#4A4A4A] shadow-lg focus:shadow-xl group-hover:bg-white/80">
                  <option>Your role</option>
                  <option>Athlete</option>
                  <option>Physical Therapist</option>
                  <option>Researcher</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <button className="relative w-full py-4 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] text-white rounded-2xl hover:from-[#C49494] hover:to-[#A598B8] transition-all duration-500 font-semibold text-lg hover:scale-105 transform shadow-2xl hover:shadow-3xl">
                  Request Beta Access
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-[#8A8A8A]">
                Join 500+ climbers already signed up. We&apos;ll notify you when beta access is available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative max-w-6xl mx-auto px-8 py-16">
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent rounded-3xl backdrop-blur-sm" />
        <div className="relative text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
            dynalytics
          </h3>
          <p className="text-[#8A8A8A] mb-6">
            Movement is data. Patterns are prevention.
          </p>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="text-[#8A8A8A] hover:text-[#D4A5A5] transition-colors duration-300 hover:scale-110 transform">
              Privacy Policy
            </a>
            <a href="#" className="text-[#8A8A8A] hover:text-[#B8A9C9] transition-colors duration-300 hover:scale-110 transform">
              Terms of Service
            </a>
            <a href="#" className="text-[#8A8A8A] hover:text-[#7DB9A3] transition-colors duration-300 hover:scale-110 transform">
              Contact
            </a>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent mb-4" />
          <p className="text-sm text-[#AFAFAF]">
            © 2024 Dynalytics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
