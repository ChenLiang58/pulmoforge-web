'use client';

import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Architecture() {
  const steps = [
    {
      step: '01',
      title: 'Real-time Audio Stream',
      desc: 'Ingests sub-100ms PCM audio frames directly from system audio or browser RTC streams.',
    },
    {
      step: '02',
      title: 'PulmoNet Biometric Analysis',
      desc: 'Extracts deep vocal tract resonances and physiological breathing patterns using lightweight neural models.',
    },
    {
      step: '03',
      title: 'Instant Trust Score',
      desc: 'Flags synthetic clones, deepfakes, and automated injections instantly with zero data retention.',
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-900 max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
          ARCHITECTURE // HYPER-SECURE
        </h2>
        <p className="text-2xl font-light text-white">How PulmoForge Works in Real-Time</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {steps.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-6 border border-neutral-800/80 rounded-xl bg-neutral-950/40 hover:border-sky-800/50 transition-colors shadow-lg space-y-3"
          >
            <span className="font-mono text-xs text-sky-400/70">{item.step} / PIPELINE</span>
            <h3 className="text-lg font-medium text-white">{item.title}</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
