'use client';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform hover:scale-105 duration-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        {/* Shield Contour */}
        <path d="M50 8 L85 22 V50 C85 70 70 85 50 92 C30 85 15 70 15 50 V22 L50 8 Z" stroke="url(#shieldGrad)" strokeWidth="5" fill="#030712" fillOpacity="0.9" />
        {/* Central Upward Arrow */}
        <path d="M50 22 L64 42 H55 V68 H45 V42 H36 L50 22 Z" fill="url(#arrowGrad)" />
        {/* Audio Wave Curves */}
        <path d="M22 55 C30 40, 38 70, 44 55" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M78 55 C70 40, 62 70, 56 55" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Diamond Base */}
        <polygon points="50,76 56,82 50,88 44,82" fill="#38bdf8" />
      </svg>
      <span className="font-sans font-medium text-base tracking-tight text-white lowercase">
        pulmoforge
      </span>
    </div>
  );
}