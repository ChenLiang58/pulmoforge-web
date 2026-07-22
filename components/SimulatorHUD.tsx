'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

export default function SimulatorHUD() {
  const [isAttack, setIsAttack] = useState(true);

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-md overflow-hidden shadow-2xl">
      {/* HUD Header Bar */}
      <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/40 px-5 py-3 font-mono text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SESSION #409 — REAL-TIME MONITORING</span>
        </div>
        <span>PULMONET ENGINE V1.0.4</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {/* Main Audio Stream Box */}
        <div className="md:col-span-2 border border-neutral-800/80 rounded-lg bg-black/60 p-10 flex flex-col items-center justify-center relative min-h-[280px]">
          <div className="w-20 h-20 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center font-extralight text-2xl text-white mb-3">
            WW
          </div>
          <span className="text-sm text-neutral-200 font-medium">Cheif Commercial Officer</span>
          <span className="text-xs font-mono text-neutral-500 mt-1">Active Audio Stream</span>

          {/* Animated Audio Bars */}
          <div className="flex items-end gap-1.5 h-8 mt-6">
            {[40, 80, 50, 90, 60, 30, 75, 45].map((height, i) => (
              <motion.span
                key={i}
                animate={{
                  height: isAttack ? [`${height}%`, '20%', `${height}%`] : ['15%', '35%', '15%'],
                }}
                transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
                className={`w-1 rounded-full ${isAttack ? 'bg-red-500/80' : 'bg-emerald-500/80'}`}
              />
            ))}
          </div>
        </div>

        {/* HUD Telemetry Card */}
        <div className="border border-neutral-800 bg-neutral-900/30 p-6 rounded-lg space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <span className="text-xs font-mono text-neutral-400">BIOMETRIC STATUS</span>
            {isAttack ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-[10px] rounded">
                <ShieldAlert className="w-3 h-3" /> SYNTHETIC CLONE
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[10px] rounded">
                <ShieldCheck className="w-3 h-3" /> VERIFIED HUMAN
              </span>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between font-mono text-xs">
              <span className="text-neutral-400">AI Confidence Score</span>
              <span className="text-white">{isAttack ? '92.8%' : '1.2%'}</span>
            </div>
            <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: isAttack ? '92.8%' : '1.2%' }}
                className={`h-full ${isAttack ? 'bg-white' : 'bg-emerald-500'}`}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <div className="p-3 border border-neutral-800 rounded bg-black/50 text-xs font-sans text-neutral-300">
            {isAttack
              ? 'Phase discontinuities & vocoder artifacts detected. Verify speaker out-of-band.'
              : 'Natural acoustic harmonics verified. Session safe.'}
          </div>
        </div>
      </div>

      {/* Simulator Interactive Buttons */}
      <div className="border-t border-neutral-800 bg-black p-4 flex justify-between items-center px-8 font-mono text-xs">
        <span className="text-neutral-500">SIMULATE THREAT STATE:</span>
        <div className="flex gap-3">
          <button
            onClick={() => setIsAttack(false)}
            className={`px-4 py-2 border rounded transition-all ${
              !isAttack ? 'border-white text-black bg-white font-medium' : 'border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            Authentic Voice
          </button>
          <button
            onClick={() => setIsAttack(true)}
            className={`px-4 py-2 border rounded transition-all ${
              isAttack ? 'border-white text-black bg-white font-medium' : 'border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            AI Clone Attack
          </button>
        </div>
      </div>
    </div>
  );
}