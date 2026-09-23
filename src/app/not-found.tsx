'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 overflow-hidden">
      <div className="relative w-full max-w-4xl text-center">

        {/* Background Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

        {/* 404 */}
        <div className="relative">
          <h1 className="text-[140px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
            404
          </h1>

          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Page Not Found
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Looks like you&apos;re lost
          </h2>

          {/* Description */}
          <p className="max-w-lg mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved. Let&apos;s get you back to somewhere useful.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-white/10"
            >
              ← Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-7 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="relative mt-16 text-sm text-slate-600">
          Error code: 404 • Nothing to see here
        </p>
      </div>
    </main>
  );
}

