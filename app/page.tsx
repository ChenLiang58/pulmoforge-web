import SimulatorHUD from '../components/SimulatorHUD';
import Architecture from '../components/Architecture';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-300 font-sans antialiased selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-900 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-white/20 rounded flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <span className="font-normal text-sm tracking-widest text-white uppercase">PulmoForge</span>
          </div>
          <button className="text-xs font-normal border border-white/20 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-all">
            ACCESS PLATFORM
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-16 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 rounded-full bg-neutral-950/50 text-[11px] tracking-widest uppercase text-neutral-400">
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

      {/* Interactive HUD Simulator Section */}
      <section className="py-8 max-w-5xl mx-auto px-6 pb-24">
        <SimulatorHUD />
      </section>

      {/* Pipeline Architecture Section */}
      <Architecture />

      {/* Footer */}
      <Footer />
    </main>
  );
}