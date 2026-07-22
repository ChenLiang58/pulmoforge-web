import dynamic from 'next/dynamic';
import Logo from '../components/Logo';
import Architecture from '../components/Architecture';
import Footer from '../components/Footer';

// Dynamic import for client HUD simulator to optimize initial load speed
const SimulatorHUD = dynamic(() => import('../components/SimulatorHUD'), {
  ssr: false,
  loading: () => (
    <div className="h-[380px] w-full border border-neutral-900 rounded-xl bg-neutral-950/50 animate-pulse" />
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-300 font-sans antialiased selection:bg-white selection:text-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-900 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <button className="text-xs font-mono border border-white/20 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-all">
            ACCESS PLATFORM
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-12 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 rounded-full bg-neutral-950/50 text-[11px] font-mono tracking-widest uppercase text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          PulmoNet v1 Active Protection
        </div>

        <h1 className="text-4xl md:text-6xl font-extralight text-white tracking-tight leading-[1.15]">
          Real-time voice trust layer for <br />
          <span className="font-normal text-neutral-400">high-stakes virtual communications.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-base text-neutral-400 font-light leading-relaxed">
          Continuous background biometric analysis for virtual meetings. Instant synthetic voice detection operating at sub-100ms latency.
        </p>
      </section>

      {/* Dynamic HUD Simulator Section */}
      <section className="py-6 max-w-5xl mx-auto px-6 pb-24">
        <SimulatorHUD />
      </section>

      {/* Hardware-Accelerated Architecture Section */}
      <Architecture />

      {/* Footer */}
      <Footer />
    </main>
  );
}