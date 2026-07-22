'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SimulatorHUD() {
  const [isSynthetic, setIsSynthetic] = useState(false);
  const [score, setScore] = useState(98.4);
  const [latency, setLatency] = useState(64);

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
    <div className="w-full border border-neutral-800/80 rounded-xl bg-neutral-950/70 backdrop-blur-xl p-6 shadow-2xl space-y-6">
      {/* HUD Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-900 pb-5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isSynthetic ? 'bg-red-500' : 'bg-emerald-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isSynthetic ? 'bg-red-500' : 'bg-emerald-500'
              }`}
            />
          </div>
          <div>
            <h3 className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
              STREAM INFERENCE HUD // FEED_01
            </h3>
            <p className="text-[11px] font-mono text-neutral-500">Sub-100ms Real-Time Neural Stream</p>
          </div>
        </div>

        {/* Mode Toggle Button */}
        <button
          onClick={() => setIsSynthetic(!isSynthetic)}
          className="px-3 py-1.5 rounded border border-neutral-800 bg-neutral-900/80 hover:border-neutral-700 transition-all text-xs font-mono text-neutral-300 flex items-center gap-2"
        >
          <span className="text-neutral-500">Inject Mode:</span>
          <span className={isSynthetic ? 'text-red-400 font-semibold' : 'text-emerald-400 font-semibold'}>
            {isSynthetic ? 'Synthetic Attack' : 'Human Voice'}
          </span>
        </button>
      </div>

      {/* Main HUD Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Metric 1: Trust Score */}
        <div className="p-4 border border-neutral-900 rounded-lg bg-black/40 space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
            Biometric Trust Index
          </span>
          <div className="flex items-baseline gap-2">
            <motion.span
              key={score}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              className={`text-3xl font-mono font-light tracking-tight ${
                isSynthetic ? 'text-red-500' : 'text-emerald-400'
              }`}
            >
              {score}%
            </motion.span>
            <span className="text-[10px] font-mono text-neutral-500">
              {isSynthetic ? 'FLAGGED' : 'VERIFIED'}
            </span>
          </div>
        </div>

        {/* Metric 2: Latency */}
        <div className="p-4 border border-neutral-900 rounded-lg bg-black/40 space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
            Inference Latency
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-mono font-light text-white">{latency}</span>
            <span className="text-xs font-mono text-neutral-500">ms</span>
          </div>
        </div>

        {/* Metric 3: Model Status */}
        <div className="p-4 border border-neutral-900 rounded-lg bg-black/40 space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
            Active Neural Engine
          </span>
          <div className="text-sm font-mono text-neutral-200 truncate pt-1">
            PulmoNet-v1.4 (Client-Side)
          </div>
          <p className="text-[10px] font-mono text-neutral-500">Zero-data retention protocol</p>
        </div>
      </div>

      {/* Live Audio Spectrum Visualizer */}
      <div className="p-4 border border-neutral-900 rounded-lg bg-black/50 space-y-3">
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
          <span>SPECTRAL PHASE CONTINUITY</span>
          <span>20 Hz — 20,000 Hz</span>
        </div>
        <div className="h-16 flex items-end justify-between gap-1 pt-2">
          {Array.from({ length: 36 }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-full rounded-t ${
                isSynthetic ? 'bg-red-500/80' : 'bg-emerald-500/70'
              }`}
              animate={{
                height: isSynthetic
                  ? [`${(i % 5) * 15 + 10}%`, `${((i + 2) % 6) * 18 + 15}%`, `${(i % 5) * 15 + 10}%`]
                  : [`${(i % 7) * 12 + 20}%`, `${((i + 3) % 8) * 10 + 25}%`, `${(i % 7) * 12 + 20}%`],
              }}
              transition={{
                duration: 0.8 + (i % 4) * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}