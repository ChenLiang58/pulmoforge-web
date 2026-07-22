'use client';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Precision Vector Emblem */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white transition-transform hover:scale-105 duration-300"
      >
        <rect x="1" y="1" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
        <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
        <path
          d="M12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      </svg>
      {/* Official Lowercase Wordmark */}
      <span className="font-sans font-normal text-base tracking-tight text-white lowercase">
        pulmoforge
      </span>
    </div>
  );
}