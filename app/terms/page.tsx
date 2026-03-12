import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-[#FEFBFB] via-white to-[#F8F6FF]">
      {/* Floating blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-[#E8E0F0] to-[#D4C4E0] blob opacity-40 blur-3xl" />
      <div
        className="absolute top-1/2 left-10 w-80 h-80 bg-gradient-to-r from-[#F8E8E8] to-[#E8D5D5] blob opacity-30 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-r from-[#E0EDE8] to-[#C7DDD0] blob opacity-30 blur-3xl"
        style={{ animationDelay: "3s" }}
      />

      {/* Navigation */}
      <nav className="relative z-10 max-w-4xl mx-auto px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-[#6A6A6A] hover:text-[#B8A9C9] hover:bg-white/80 transition-all duration-300 text-sm font-medium border border-white/50"
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
              Terms of Service
            </h1>
            <p className="text-[#8A8A8A]">Last updated: March 12, 2026</p>
          </header>

          {/* Content sections */}
          <div className="space-y-10 text-[#5A5A5A]">
            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Agreement to Terms
              </h2>
              <p className="leading-relaxed text-[#6A6A6A]">
                By accessing or using Dynalytix (&quot;the Service&quot;), you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use our Service. We reserve the right to
                update these terms at any time, and your continued use
                constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Beta Participation
              </h2>
              <p className="leading-relaxed text-[#6A6A6A] mb-4">
                Dynalytix is currently in beta. By participating in our beta
                program, you acknowledge and agree that:
              </p>
              <ul className="space-y-3 text-[#6A6A6A]">
                <li className="flex items-start gap-3">
                  <span className="text-[#B8A9C9] mt-1.5">•</span>
                  <span>
                    The Service is provided &quot;as is&quot; and &quot;as available&quot; without
                    warranties of any kind
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B8A9C9] mt-1.5">•</span>
                  <span>
                    Features may change, be added, or removed without notice
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B8A9C9] mt-1.5">•</span>
                  <span>
                    The Service may experience downtime, bugs, or data loss
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#B8A9C9] mt-1.5">•</span>
                  <span>
                    Your feedback may be used to improve the Service without
                    compensation
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                User Content
              </h2>
              <div className="space-y-4 text-[#6A6A6A]">
                <p className="leading-relaxed">
                  <strong className="text-[#4A4A4A]">Your Ownership:</strong>{" "}
                  You retain all ownership rights to the videos and content you
                  upload to Dynalytix. We do not claim ownership of your
                  original content.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#4A4A4A]">License Grant:</strong> By
                  uploading content, you grant Dynalytix a worldwide,
                  non-exclusive, royalty-free license to use, process, analyze,
                  store, and display your content for the purpose of providing
                  and improving our services. This includes using your movement
                  data (in anonymized form) to train and improve our machine
                  learning models.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#4A4A4A]">Your Responsibility:</strong>{" "}
                  You represent that you have all necessary rights to the
                  content you upload and that your content does not violate any
                  third-party rights or applicable laws.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Acceptable Use
              </h2>
              <p className="leading-relaxed text-[#6A6A6A] mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="space-y-3 text-[#6A6A6A]">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>
                    Upload content depicting anyone without their consent
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>
                    Upload illegal, harmful, or inappropriate content
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>
                    Attempt to reverse-engineer, decompile, or extract our
                    algorithms or models
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>
                    Interfere with, disrupt, or overload the Service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>
                    Use automated tools to access the Service without
                    authorization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4A5A5] mt-1.5">•</span>
                  <span>
                    Violate any applicable laws or regulations
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-[#D4A5A5]/10 to-[#B8A9C9]/10 rounded-2xl p-6 border border-[#D4A5A5]/20">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Important Medical Disclaimer
              </h2>
              <div className="space-y-4 text-[#5A5A5A]">
                <p className="leading-relaxed font-medium">
                  Dynalytix is a movement analysis tool for informational and
                  educational purposes only. It is NOT a medical device and does
                  NOT provide medical advice, diagnosis, or treatment.
                </p>
                <p className="leading-relaxed">
                  Our analysis of movement patterns, joint angles, and
                  biomechanics should not be used as a substitute for
                  professional medical advice, physical therapy, or other
                  qualified healthcare services. Always consult with a licensed
                  healthcare provider before making decisions about your health,
                  training, or rehabilitation.
                </p>
                <p className="leading-relaxed">
                  If you experience pain, injury, or discomfort, seek
                  appropriate medical attention. Do not rely on Dynalytix
                  outputs to diagnose, treat, or prevent any medical condition
                  or injury.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Limitation of Liability
              </h2>
              <p className="leading-relaxed text-[#6A6A6A] mb-4">
                To the maximum extent permitted by law, Dynalytix and its
                officers, directors, employees, and agents shall not be liable
                for:
              </p>
              <ul className="space-y-3 text-[#6A6A6A]">
                <li className="flex items-start gap-3">
                  <span className="text-[#7DB9A3] mt-1.5">•</span>
                  <span>
                    Any indirect, incidental, special, consequential, or
                    punitive damages
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7DB9A3] mt-1.5">•</span>
                  <span>
                    Any loss or damage arising from your use of or reliance on
                    the Service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7DB9A3] mt-1.5">•</span>
                  <span>
                    Any injury, harm, or health-related consequences resulting
                    from actions taken based on Service outputs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7DB9A3] mt-1.5">•</span>
                  <span>
                    Any unauthorized access to or alteration of your content
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Intellectual Property
              </h2>
              <div className="space-y-4 text-[#6A6A6A]">
                <p className="leading-relaxed">
                  <strong className="text-[#4A4A4A]">Our Property:</strong>{" "}
                  Dynalytix owns all rights to the platform, including our
                  website, applications, machine learning models, algorithms,
                  user interface, design, and branding. You may not copy,
                  modify, distribute, or create derivative works without our
                  written permission.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#4A4A4A]">Aggregated Insights:</strong>{" "}
                  We own all aggregated and anonymized insights derived from
                  analyzing user data collectively. These insights do not
                  identify individual users and may be used for research,
                  product improvement, and other business purposes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Termination
              </h2>
              <p className="leading-relaxed text-[#6A6A6A]">
                We may suspend or terminate your access to the Service at any
                time, with or without cause, and with or without notice. You may
                also discontinue your use of the Service at any time. Upon
                termination, your right to use the Service ceases immediately.
                We may retain your data as required by law or for legitimate
                business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Governing Law
              </h2>
              <p className="leading-relaxed text-[#6A6A6A]">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Delaware, United States, without
                regard to its conflict of law provisions. Any disputes arising
                from these Terms or your use of the Service shall be resolved in
                the courts of Delaware.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4A4A4A] to-[#6A5A6A] bg-clip-text text-transparent mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed text-[#6A6A6A]">
                If you have questions about these Terms of Service, please
                contact us at:
              </p>
              <p className="mt-4">
                <a
                  href="mailto:hello@dynalytix.com"
                  className="text-[#B8A9C9] hover:text-[#A598B8] font-medium transition-colors"
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
              className="text-[#8A8A8A] hover:text-[#D4A5A5] transition-colors duration-300 hover:scale-110 transform"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#B8A9C9] transition-colors duration-300"
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
