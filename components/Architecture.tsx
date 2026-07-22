'use client';

import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Audio Stream Capture', desc: 'Raw WebRTC or virtual driver audio buffer extraction with zero local persistence.' },
  { step: '02', title: 'Feature Extraction', desc: 'Sub-frame analysis of phase discontinuities, spectral tilt, and vocoder signatures.' },
  { step: '03', title: 'PulmoNet Inference', desc: 'Ultra-lightweight neural evaluation executing at sub-90ms latency on client hardware.' },
  { step: '04', title: 'Non-Intrusive HUD', desc: 'Instant real-time trust score rendered discreetly for meeting participants.' },
];

export default function Architecture() {
  return (
    <section className="py-28 border-t border-neutral-900 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-2 mb-16">
          <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">Detection Pipeline</span>
          <h2 className="text-2xl md:text-3xl font-extralight text-white tracking-tight">Sub-100ms Inference Flow</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="p-6 border border-neutral-800/80 rounded bg-neutral-950/40 hover:border-neutral-700 transition-colors space-y-3"
            >
              <span className="font-mono text-xs text-neutral-500">{item.step} / PIPELINE</span>
              <h3 className="text-base font-normal text-white">{item.title}</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}