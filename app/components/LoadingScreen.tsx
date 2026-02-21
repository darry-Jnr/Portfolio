'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulate progress
    const intervals = [
      { target: 30, delay: 0,   speed: 20  },
      { target: 65, delay: 300, speed: 30  },
      { target: 85, delay: 700, speed: 40  },
      { target: 100, delay: 1100, speed: 20 },
    ];

    intervals.forEach(({ target, delay, speed }) => {
      setTimeout(() => {
        const step = () => {
          setProgress(prev => {
            if (prev >= target) return prev;
            setTimeout(step, speed);
            return prev + 1;
          });
        };
        step();
      }, delay);
    });

    // Fade out after progress hits 100
    setTimeout(() => {
      setVisible(false);
    }, 1800);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center px-8"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-black mb-8 tracking-tight"
          >
            Darry<span className="text-[#0677EC]">.</span>
          </motion.h1>

          {/* Progress bar track */}
          <div className="w-full max-w-xs h-0.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs text-gray-300 font-semibold mt-4 tabular-nums"
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}