import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-[#FEFBFB] via-white to-[#F8F6FF]">
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#F8E8E8] to-[#E8D5D5] blob opacity-40 blur-3xl" />
      <div
        className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-r from-[#E8E0F0] to-[#D4C4E0] blob opacity-30 blur-3xl"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-72 h-72 bg-gradient-to-r from-[#E0EDE8] to-[#C7DDD0] blob opacity-30 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      {/* Navigation */}
      <nav className="relative z-10 max-w-4xl mx-auto px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-[#6A6A6A] hover:text-[#D4A5A5] hover:bg-white/80 transition-all duration-300 text-sm font-medium border border-white/50"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
      </nav>

      {/* Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#8A8A8A]">Last updated: March 12, 2026</p>
          </header>

          {/* Content sections */}
          <div className="space-y-10 text-[#5A5A5A]">
            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Introduction
              </h2>
              <p className="leading-relaxed">
                Dynalytix (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                and safeguard your information when you use our movement
                analysis platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                What We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#4A4A4A] mb-2">
                    Account Information
                  </h3>
                  <p className="leading-relaxed text-[#6A6A6A]">
                    When you sign up for our beta program, we collect your email
                    address and your self-selected role (athlete, physical
                    therapist, researcher, or other). This helps us understand
                    our user base and tailor communications to your interests.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#4A4A4A] mb-2">
                    Video Content
                  </h3>
                  <p className="leading-relaxed text-[#6A6A6A]">
                    Our platform processes climbing and movement videos that you
                    voluntarily upload. We use pose estimation technology to
                    extract joint positions, angles, and movement patterns from
                    these videos.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#4A4A4A] mb-2">
                    Movement Data
                  </h3>
                  <p className="leading-relaxed text-[#6A6A6A]">
                    From your uploaded videos, we derive biomechanical data
                    including joint angles, velocity vectors, and movement
                    patterns. We may also collect self-reported data such as
                    perceived exertion, fatigue levels, and sensation labels.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                How We Use Your Information
              </h2>
              <ul className="space-y-3 text-[#6A6A6A]">
                <li className="flex items-start gap-3">
                  <span className="text-[#7DB9A3] mt-1.5">•</span>
                  <span>
                    To provide personalized movement analysis and insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7DB9A3] mt-1.5">•</span>
                  <span>
                    To train and improve our machine learning models for better
                    accuracy
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7DB9A3] mt-1.5">•</span>
                  <span>
                    To send you updates about beta access and new features
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7DB9A3] mt-1.5">•</span>
                  <span>
                    To generate aggregated, anonymized research insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7DB9A3] mt-1.5">•</span>
                  <span>To respond to your inquiries and provide support</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Storage & Security
              </h2>
              <p className="leading-relaxed text-[#6A6A6A] mb-4">
                Your data is stored securely using industry-standard encryption.
                Our platform is hosted on Vercel with robust security measures
                in place. We implement appropriate technical and organizational
                safeguards to protect your information against unauthorized
                access, alteration, or destruction.
              </p>
              <p className="leading-relaxed text-[#6A6A6A]">
                Video files are processed to extract movement data and may be
                stored temporarily during analysis. We use secure connections
                (HTTPS) for all data transmission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Third-Party Services
              </h2>
              <div className="space-y-4 text-[#6A6A6A]">
                <p className="leading-relaxed">
                  We use the following third-party services to operate our
                  platform:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#B8A9C9] mt-1.5">•</span>
                    <span>
                      <strong className="text-[#4A4A4A]">Resend:</strong> For
                      sending transactional emails (welcome emails, updates)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#B8A9C9] mt-1.5">•</span>
                    <span>
                      <strong className="text-[#4A4A4A]">Vercel:</strong> For
                      hosting our web application
                    </span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  These services have their own privacy policies governing the
                  use of your information. We do not sell your personal data to
                  third parties, and we do not use advertising cookies or
                  tracking pixels.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Data Retention
              </h2>
              <p className="leading-relaxed text-[#6A6A6A]">
                We retain your account information for as long as you maintain
                an active account or as needed to provide you with our services.
                Video content and derived movement data are retained to enable
                ongoing analysis and model improvement. You may request deletion
                of your data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Your Rights
              </h2>
              <p className="leading-relaxed text-[#6A6A6A] mb-4">
                You have the right to:
              </p>
              <ul className="space-y-3 text-[#6A6A6A]">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>Access the personal information we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>
                    Request deletion of your data (subject to legal retention
                    requirements)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>Opt out of marketing communications at any time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>Request a copy of your data in a portable format</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="leading-relaxed text-[#6A6A6A]">
                Our services are not directed to individuals under the age of
                13. We do not knowingly collect personal information from
                children. If you believe we have inadvertently collected
                information from a child, please contact us immediately so we
                can delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Policy Changes
              </h2>
              <p className="leading-relaxed text-[#6A6A6A]">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for legal, operational, or
                regulatory reasons. We will notify you of any material changes
                by posting the updated policy on our website and updating the
                &quot;Last updated&quot; date. Your continued use of our services after
                changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed text-[#6A6A6A]">
                If you have questions about this Privacy Policy or wish to
                exercise your privacy rights, please contact us at:
              </p>
              <p className="mt-4">
                <a
                  href="mailto:hello@dynalytix.com"
                  className="text-[#D4A5A5] hover:text-[#C49494] font-medium transition-colors"
                >
                  hello@dynalytix.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

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
            <Link
              href="/privacy"
              className="text-[#D4A5A5] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#8A8A8A] hover:text-[#B8A9C9] transition-colors duration-300 hover:scale-110 transform"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:hello@dynalytix.com"
              className="text-[#8A8A8A] hover:text-[#7DB9A3] transition-colors duration-300 hover:scale-110 transform"
            >
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
