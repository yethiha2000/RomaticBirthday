import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";

const paragraphs = [
  "Happy Birthday 🎉♥️မေ❤️🎉",

"❣️မွေးနေ့မှစ နောင်နှစ်ပေါင်းများစွာ အခက်အခဲအားလုံးကျော်ဖြတ်နိုင်ပြီး လိုရာဆန္ဒဟူမျှ ပြည့်၀ပါစေ။ ❣️",
"❣️အနေဝေး‌နေတဲ့ အချိန်တွေလည်း မြန်မြန်ကုန်ပါစေ။☺️❣️",
"❣️မောင့်ကိုလည်း အဆထပ်ပိုး တိုးလို့ချစ်နိုင်ပါစေ။☺️❣️",
"😜ရန်လည်း မကြာခနဖြစ်နိုင်ပါစေ။😜"

];

function LoveMessage() {
  return (
    <section id="love-letter" className="relative px-5 py-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .15 }}
          transition={{ duration: 1, ease: [.22,1,.36,1] }}
          className="glass-strong glow relative overflow-hidden rounded-[2rem] p-7 sm:p-12 lg:p-16"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/10 blur-[100px]" />

          <div className="relative">
            <div className="mb-8 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
                <Quote size={22} className="text-pink-300" />
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs uppercase tracking-[.35em] text-pink-300/60">A Letter For You</p>
              <h2 className="font-romantic mt-5 text-4xl text-white sm:text-5xl">To My Beautiful Love</h2>
            </div>

            <div className="mt-12 space-y-7 text-[15px] leading-8 text-white/70 sm:text-base sm:leading-9">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: .8 }}
                  transition={{ duration: .8, delay: index * .08 }}
                  className="font-myanmar"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: .6 }}
              className="mt-12 border-t border-white/10 pt-8 text-center"
            >
              <p className="font-romantic text-2xl text-pink-200">With all my heart</p>
              <Heart size={19} fill="currentColor" className="mx-auto mt-4 text-pink-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LoveMessage;