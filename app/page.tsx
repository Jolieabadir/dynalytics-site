import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-[#FEFBFB] via-white to-[#F8F6FF]">
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#F8E8E8] to-[#E8D5D5] blob opacity-60 blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-[#E8E0F0] to-[#D4C4E0] blob opacity-50 blur-3xl" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-[#E0EDE8] to-[#C7DDD0] blob opacity-50 blur-3xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-[#F0E8F8] to-[#E0D4E8] blob opacity-30 blur-2xl" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-[#E8F0E8] to-[#D0E8D0] blob opacity-40 blur-2xl" style={{ animationDelay: '4s' }} />

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pt-32 pb-16 text-center">
        <div className="float relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-[#D4A5A5]/20 to-[#B8A9C9]/20 rounded-full blur-xl" />
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-r from-[#B8A9C9]/20 to-[#7DB9A3]/20 rounded-full blur-xl" />
          
          <h1 className="text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text mb-8 leading-tight drop-shadow-sm">
            dynalytix
          </h1>
          <div className="relative inline-block">
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#B8A9C9] via-[#D4A5A5] to-[#7DB9A3] bg-clip-text text-transparent mb-6 tracking-wide relative z-10">
              Movement is data. Patterns are prevention.
            </p>
          </div>
          <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed mb-4">
            Choose your area of interest to get started
          </p>
        </div>
      </section>

      {/* Two Pathway Cards */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pb-32">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Climbing Card */}
          <Link href="/climbing" className="group relative block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7DB9A3]/20 to-[#B8A9C9]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-[#7DB9A3]/20 hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] group-hover:bg-white/80 h-full flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#7DB9A3]/30 group-hover:shadow-[#7DB9A3]/50 transition-shadow duration-300">
                <span className="text-3xl">🧗‍♀️</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
                Climbing Analysis
              </h2>
              <p className="text-[#6A6A6A] leading-relaxed font-medium mb-6 flex-1">
                Pose estimation and machine learning to analyze your climbing movement. 
                Understand your body, prevent injuries, and optimize performance through data-driven insights.
              </p>
              <div className="flex items-center gap-2 text-[#7DB9A3] font-semibold">
                <span>Join the Beta</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* FMS Demo Card */}
          <Link href="/fms-demo" className="group relative block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/20 to-[#B8A9C9]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-[#D4A5A5]/20 hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] group-hover:bg-white/80 h-full flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#D4A5A5]/30 group-hover:shadow-[#D4A5A5]/50 transition-shadow duration-300">
                <span className="text-3xl">🏥</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
                FMS Assessment Demo
              </h2>
              <p className="text-[#6A6A6A] leading-relaxed font-medium mb-6 flex-1">
                Functional Movement Screen powered by computer vision. Upload video, get pose data extraction, 
                scoring, patient &amp; provider reports with CPT code suggestions.
              </p>
              <div className="flex items-center gap-2 text-[#D4A5A5] font-semibold">
                <span>View Demo</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
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
          <p className="text-[#8A8A8A] mb-6">
            Movement is data. Patterns are prevention.
          </p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent mb-4" />
          <p className="text-sm text-[#AFAFAF]">
            © 2024 Dynalytix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
