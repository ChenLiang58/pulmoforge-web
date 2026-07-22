'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SimulatorHUD() {
  const [isSynthetic, setIsSynthetic] = useState(false);
  const [score, setScore] = useState(98.4);
  const [latency, setLatency] = useState(64);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Perspective Tilt on Mouse Movement
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 25);
    setRotateY(x / 25);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isSynthetic) {
        setScore(+(Math.random() * (22.5 - 12.1) + 12.1).toFixed(1));
        setLatency(+(Math.random() * (88 - 72) + 72).toFixed(0));
      } else {
        setScore(+(Math.random() * (99.2 - 96.8) + 96.8).toFixed(1));
        setLatency(+(Math.random() * (68 - 52) + 52).toFixed(0));
      }
    }, 1800);
    return () => clearInterval(interval);
  }, [isSynthetic]);

  return (
    <div className="perspective-1000">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full border border-sky-900/40 rounded-2xl bg-neutral-950/80 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(56,189,248,0.15)] space-y-6"
      >
        {/* HUD Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-900 pb-5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isSynthetic ? 'bg-red-500' : 'bg-sky-400'
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${
                  isSynthetic ? 'bg-red-500' : 'bg-sky-400'
                }`}
              />
            </div>
            <div>
              <h3 className="text-xs font-mono tracking-widest text-neutral-300 uppercase">
                3D STREAM INFERENCE HUD // FEED_01
              </h3>
              <p className="text-[11px] font-mono text-neutral-500">Sub-100ms Real-Time Neural Stream</p>
            </div>
          </div>

          <button
            onClick={() => setIsSynthetic(!isSynthetic)}
            className="px-4 py-2 rounded-lg border border-sky-800/50 bg-sky-950/30 hover:bg-sky-900/40 transition-all text-xs font-mono text-neutral-200 flex items-center gap-2 shadow-inner"
          >
            <span className="text-neutral-400">Inject State:</span>
            <span className={isSynthetic ? 'text-red-400 font-semibold' : 'text-sky-400 font-semibold'}>
              {isSynthetic ? 'Synthetic Attack' : 'Human Voice'}
            </span>
          </button>
        </div>

        {/* 3D Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 border border-neutral-800/80 rounded-xl bg-black/60 shadow-lg space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
              Biometric Trust Index
            </span>
            <div className="flex items-baseline gap-2">
              <motion.span
                key={score}
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-4xl font-mono font-light tracking-tight ${
                  isSynthetic ? 'text-red-500' : 'text-sky-400'
                }`}
              >
                {score}%
              </motion.span>
              <span className="text-[10px] font-mono text-neutral-500">
                {isSynthetic ? 'FLAGGED' : 'VERIFIED'}
              </span>
            </div>
          </div>

          <div className="p-5 border border-neutral-800/80 rounded-xl bg-black/60 shadow-lg space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
              Inference Latency
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-mono font-light text-white">{latency}</span>
              <span className="text-xs font-mono text-neutral-500">ms</span>
            </div>
          </div>

          <div className="p-5 border border-neutral-800/80 rounded-xl bg-black/60 shadow-lg space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
              Neural Engine
            </span>
            <div className="text-sm font-mono text-sky-200 truncate pt-1">
              PulmoNet-v1.4 3D
            </div>
            <p className="text-[10px] font-mono text-neutral-500">Zero-data retention protocol</p>
          </div>
        </div>

        {/* Audio Visualizer */}
        <div className="p-4 border border-neutral-900 rounded-xl bg-black/80 space-y-3">
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
            <span>3D SPECTRAL CONTINUITY</span>
            <span>20 Hz — 20,000 Hz</span>
          </div>
          <div className="h-16 flex items-end justify-between gap-1 pt-2">
            {Array.from({ length: 42 }).map((_, i) => (
              <motion.div
                key={i}
                className={`w-full rounded-t ${
                  isSynthetic ? 'bg-red-500/80' : 'bg-sky-400/80'
                }`}
                animate={{
                  height: isSynthetic
                    ? [`${(i % 5) * 15 + 10}%`, `${((i + 2) % 6) * 18 + 15}%`, `${(i % 5) * 15 + 10}%`]
                    : [`${(i % 7) * 12 + 20}%`, `${((i + 3) % 8) * 10 + 25}%`, `${(i % 7) * 12 + 20}%`],
                }}
                transition={{
                  duration: 0.7 + (i % 4) * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}