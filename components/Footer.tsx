export default function Footer() {
    return (
      <footer className="py-12 border-t border-neutral-900 bg-black text-xs font-mono text-neutral-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-white font-normal tracking-widest uppercase">PulmoForge</span>
            <span className="text-neutral-600">© 2026 PulmoForge Inc.</span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
            <a href="https://x.com/pulmoforge" target="_blank" className="hover:text-white transition-colors">X.COM/PULMOFORGE</a>
          </div>
        </div>
      </footer>
    );
  }