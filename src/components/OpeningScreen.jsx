import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";

function OpeningScreen({ onEnter }) {
  const [entering, setEntering] = useState(false);

  const handleEnter = () => {
    setEntering(true);
    window.setTimeout(onEnter, 850);
  };

  return (
    <AnimatePresence>
      {!entering && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
          transition={{ duration: .85 }}
          className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#12070d] px-6"
        >
          <div className="absolute inset-0">
            <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
            <div className="absolute bottom-[8%] right-[5%] h-80 w-80 rounded-full bg-rose-700/10 blur-[120px]" />
          </div>

          <div className="relative z-10 w-full max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: .7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [.22,1,.36,1] }}
              className="mx-auto mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(244,114,182,.15)]"
            >
              <Heart size={32} fill="currentColor" className="text-pink-300" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .4, duration: .8 }}
              className="text-xs uppercase tracking-[.35em] text-pink-300/60"
            >
              A Little Something For You
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .7, duration: 1 }}
              className="font-romantic mt-7 text-4xl leading-tight text-white sm:text-6xl"
            >
              For The Most
              <span className="block text-gradient">Beautiful Person</span>
              In My World
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: .8 }}
              className="font-myanmar mx-auto mt-7 max-w-md text-sm leading-7 text-white/45"
            >
              
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: .8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              onClick={handleEnter}
              className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-3 text-sm font-medium text-white shadow-2xl shadow-pink-900/30"
            >
              <Sparkles size={0} />
              Open My Heart
            </motion.button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default OpeningScreen;