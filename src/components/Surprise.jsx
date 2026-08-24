import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Gift, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

function Surprise() {
  const [revealed, setRevealed] = useState(false);

  const createMagic = () => {
    setRevealed(true);

    const duration = 4200;
    const end = Date.now() + duration;
    const colors = ["#f9a8d4", "#fda4af", "#fecdd3", "#ffffff"];

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 75,
        origin: { x: 0, y: .65 },
        colors,
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 75,
        origin: { x: 1, y: .65 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();

    setTimeout(() => {
      confetti({
        particleCount: 140,
        spread: 120,
        startVelocity: 35,
        origin: { x: .5, y: .55 },
        colors,
      });
    }, 300);
  };

  return (
    <section className="relative px-5 py-32 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: .94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: 1 }}
          className="glass glow relative overflow-hidden rounded-[2.5rem] p-8 text-center sm:p-16"
        >
          <AnimatePresence mode="wait">
            {!revealed ? (
              <motion.div key="before" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: .95 }}>
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-pink-500/10"
                >
                  <Gift size={34} className="text-pink-300" />
                </motion.div>

                <p className="text-xs uppercase tracking-[.35em] text-pink-300/60">One More Thing</p>
                <h2 className="font-romantic mt-5 text-4xl sm:text-6xl">I Have A Surprise</h2>

                <p className="font-myanmar mx-auto mt-6 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                  
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .95 }}
                  onClick={createMagic}
                  className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-3 text-sm font-medium text-white shadow-xl shadow-pink-900/30"
                >
                  <Sparkles size={5} />
                  ခလုတ်လေးနှိပ်ကြည့်
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, scale: .8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .8, ease: [.22,1,.36,1] }}
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-pink-500/10"
                >
                  <Heart size={35} fill="currentColor" className="text-pink-300" />
                </motion.div>

                <p className="text-xs uppercase tracking-[.35em] text-pink-300/60">My Forever Wish</p>
                <h2 className="font-romantic mt-5 text-4xl text-gradient sm:text-6xl">I Love You</h2>

                <p className="font-myanmar mx-auto mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                  ♥️မိန်းမကို အရမ်း အရမ်းချစ်တယ်။♥️
                  <br />
                    ♥️ခုလည်းချစ်တယ် နောင်လည်း ပိုချစ်မယ်♥️😘😘😘😘😘
                </p>

                <p className="font-romantic mt-10 text-xl text-pink-200/80">Today. Tomorrow. Always.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Surprise;