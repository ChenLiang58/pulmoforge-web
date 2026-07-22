'use client';

import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Audio Stream Capture', desc: 'Raw WebRTC audio buffer extraction with zero local disk persistence.' },
  { step: '02', title: 'Feature Extraction', desc: 'Sub-frame analysis of phase discontinuities and synthetic vocoder signatures.' },
  { step: '03', title: 'PulmoNet Inference', desc: 'Ultra-lightweight neural evaluation executing at sub-90ms latency locally.' },
  { step: '04', title: 'Non-Intrusive HUD', desc: 'Instant real-time trust score rendered discreetly for meeting participants.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Architecture() {
  return (
    <section className="py-24 border-t border-neutral-900 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-2 mb-16">
          <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">Detection Pipeline</span>
          <h2 className="text-2xl md:text-3xl font-extralight text-white tracking-tight">Sub-100ms Stream Processing</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 border border-neutral-800/80 rounded-lg bg-neutral-950/40 hover:border-neutral-700 transition-colors space-y-3"
            >
              <span className="font-mono text-xs text-neutral-500">{item.step} / PIPELINE</span>
              <h3 className="text-base font-normal text-white">{item.title}</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}