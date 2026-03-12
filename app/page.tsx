"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export default function Home() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role: role || undefined }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
        return;
      }

      setStatus("success");
      setSuccessMessage(data.message || "You're on the list!");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const resetForm = () => {
    setEmail("");
    setRole("");
    setStatus("idle");
    setErrorMessage("");
    setSuccessMessage("");
  };

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
          <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed mb-8">
            Choose your area of interest to get started
          </p>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] text-white rounded-full hover:from-[#C49494] hover:to-[#A598B8] transition-all duration-300 hover:scale-105 font-semibold shadow-lg shadow-[#D4A5A5]/30"
          >
            <span>Become a Data Contributor</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Two Pathway Cards */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 pb-24">
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

          {/* Movement Assessment Demo Card */}
          <Link href="/fms-demo" className="group relative block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/20 to-[#B8A9C9]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-[#D4A5A5]/20 hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] group-hover:bg-white/80 h-full flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4A5A5] to-[#C49494] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#D4A5A5]/30 group-hover:shadow-[#D4A5A5]/50 transition-shadow duration-300">
                <span className="text-3xl">🏥</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent">
                Movement Assessment Demo
              </h2>
              <p className="text-[#6A6A6A] leading-relaxed font-medium mb-6 flex-1">
                Functional movement assessment powered by computer vision. Upload video, get pose data extraction,
                automated scoring, patient &amp; provider reports with CPT code suggestions.
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

      {/* Signup Section */}
      <section id="signup" className="scroll-mt-24 relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4A5A5]/10 via-[#B8A9C9]/5 to-[#7DB9A3]/10 rounded-3xl blur-3xl" />
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/60">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4A4A4A] via-[#6A5A6A] to-[#4A4A4A] bg-clip-text text-transparent mb-4">
                Join The Beta
              </h2>
              <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed">
                Be among the first to experience personalized movement analysis.
                Help us revolutionize how athletes understand their bodies.
              </p>
            </div>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#7DB9A3] to-[#6AA892] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7DB9A3]/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl text-[#4A4A4A] font-semibold mb-4">{successMessage}</p>
                <button
                  onClick={resetForm}
                  className="text-[#D4A5A5] hover:text-[#C49494] font-medium underline underline-offset-4 transition-colors"
                >
                  Sign up another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
                <div className="group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:border-[#D4A5A5] transition-all duration-300 text-[#4A4A4A] placeholder-[#8A8A8A] shadow-lg focus:shadow-xl group-hover:bg-white/80"
                  />
                </div>

                <div className="group">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:border-[#D4A5A5] transition-all duration-300 text-[#4A4A4A] shadow-lg focus:shadow-xl group-hover:bg-white/80"
                  >
                    <option value="">Your role</option>
                    <option value="Athlete">Athlete</option>
                    <option value="Physical Therapist">Physical Therapist</option>
                    <option value="Researcher">Researcher</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-center text-sm">{errorMessage}</p>
                )}

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="relative w-full py-4 bg-gradient-to-r from-[#D4A5A5] to-[#B8A9C9] text-white rounded-2xl hover:from-[#C49494] hover:to-[#A598B8] transition-all duration-500 font-semibold text-lg hover:scale-105 transform shadow-2xl hover:shadow-3xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === "loading" ? "Signing up..." : "Request Beta Access"}
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 text-center">
              <p className="text-sm text-[#8A8A8A]">
                Join 500+ people already signed up. We&apos;ll notify you when beta access is available.
              </p>
            </div>
          </div>
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
          <div className="flex justify-center space-x-8 mb-6">
            <Link href="/privacy" className="text-[#8A8A8A] hover:text-[#D4A5A5] transition-colors duration-300 hover:scale-110 transform">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#8A8A8A] hover:text-[#B8A9C9] transition-colors duration-300 hover:scale-110 transform">
              Terms of Service
            </Link>
            <a href="mailto:hello@dynalytix.com" className="text-[#8A8A8A] hover:text-[#7DB9A3] transition-colors duration-300 hover:scale-110 transform">
              Contact
            </a>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent mb-4" />
          <p className="text-sm text-[#AFAFAF]">
            © {new Date().getFullYear()} Dynalytix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
