import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";

function Hero() {
  const scrollToMemories = () =>
    document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen items-center justify-center px-5 py-20">
      <div className="mx-auto w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: .7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [.22,1,.36,1] }}
          className="mb-8 flex justify-center"
        >
          <div className="glass glow flex h-20 w-20 items-center justify-center rounded-full">
            <Heart size={32} fill="currentColor" className="text-pink-300" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3, duration: .8 }}
          className="mb-5 text-xs font-medium uppercase tracking-[.4em] text-pink-200/70 sm:text-sm"
        >
          To my lovely and beloved wife
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .45, duration: 1 }}
          className="font-romantic text-5xl leading-tight sm:text-7xl lg:text-8xl"
        >
          Happy Birthday
          <span className="mt-2 block text-gradient">My Queen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .7, duration: .9 }}
          className="font-myanmar mx-auto mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg"
        >
        
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: .8 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: .96 }}
          onClick={scrollToMemories}
          className="glass mt-10 inline-flex min-h-12 items-center gap-3 rounded-full px-7 py-3 text-sm text-white transition hover:bg-white/10"
        >
          Our Story
          <ChevronDown size={17} />
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;