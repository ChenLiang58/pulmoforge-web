import dynamic from 'next/dynamic';
import Logo from '../components/Logo';
import Architecture from '../components/Architecture';
import Footer from '../components/Footer';

const Interactive3DCore = dynamic(() => import('../components/Interactive3DCore'), {
  ssr: false,
  loading: () => <div className="h-[420px] w-full bg-black/20 animate-pulse rounded-2xl" />,
});

const SimulatorHUD = dynamic(() => import('../components/SimulatorHUD'), {
  ssr: false,
  loading: () => <div className="h-[380px] w-full border border-neutral-900 rounded-2xl bg-neutral-950 animate-pulse" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-300 font-sans antialiased selection:bg-sky-500 selection:text-black overflow-x-hidden">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-900/80 bg-black/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <button className="text-xs font-mono border border-sky-500/30 text-sky-300 px-4 py-2 rounded-lg bg-sky-950/20 hover:bg-sky-400 hover:text-black transition-all shadow-sm">
            ACCESS PLATFORM
          </button>
        </div>
      </nav>

      {/* Hero Section with Interactive 3D Mesh */}
      <section className="pt-32 pb-8 max-w-5xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-sky-900/50 rounded-full bg-sky-950/30 text-[11px] font-mono tracking-widest uppercase text-sky-400">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          PulmoNet 3D Voice Protection
        </div>

        <h1 className="text-4xl md:text-7xl font-extralight text-white tracking-tight leading-[1.1]">
          Real-time voice trust layer <br />
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            for high-stakes communications.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-base text-neutral-400 font-light leading-relaxed">
          Continuous background biometric analysis for virtual meetings with instant synthetic voice detection operating at sub-100ms latency.
        </p>

        {/* 3D WebGL Mesh Canvas */}
        <div className="pt-2">
          <Interactive3DCore />
        </div>
      </section>

      {/* Interactive 3D HUD Section */}
      <section className="py-12 max-w-5xl mx-auto px-6 pb-24">
        <SimulatorHUD />
      </section>

      <Architecture />
      <Footer />
    </main>
  );
}