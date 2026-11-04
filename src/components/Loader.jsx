import { useEffect } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/iamges/logoimg.png';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timeoutId = window.setTimeout(onComplete, 1500);
    return () => window.clearTimeout(timeoutId);
  }, [onComplete]);

  return (
    <motion.div
      role="status"
      aria-label="Loading Foxtale"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#fff8fa]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-rose-200/50 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-9"
        >
          <img src={logoImg} alt="Foxtale" className="h-10 w-auto sm:h-12" />
        </motion.div>

        <div className="relative flex h-16 w-16 items-center justify-center">
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-rose-200"
            animate={{ scale: [1, 1.45], opacity: [0.75, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-1 rounded-full border-2 border-rose-100 border-t-[#e64b78]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
          />
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#e64b78]" />
        </div>

        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b596b]">
          A little glow is on its way
        </p>

        <div aria-hidden="true" className="mt-5 h-px w-36 overflow-hidden bg-rose-100">
          <motion.span
            className="block h-full w-1/2 origin-left bg-[#e64b78]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.35, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;