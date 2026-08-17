import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";

const paragraphs = [
  "ချစ်ရတဲ့ မင်းရေ...",
  "မင်းနဲ့တွေ့ခဲ့ရတာဟာ ငါ့ဘဝမှာ ဖြစ်ခဲ့ဖူးသမျှထဲက အလှပဆုံးအရာတွေထဲက တစ်ခုပါ။",
  "မင်းရဲ့အပြုံးလေးတစ်ခု၊ မင်းရဲ့စကားလေးတစ်ခွန်းနဲ့တောင် ငါ့ရဲ့နေ့ရက်တွေ ပိုပြီးလှပလာတတ်တယ်။",
  "ဘဝမှာ အရာအားလုံး perfect ဖြစ်နေဖို့ မလိုဘူးလို့ ငါထင်တယ်။ ဘာလို့လဲဆိုတော့ မင်းနဲ့အတူရှိနေရင် မပြည့်စုံတဲ့နေ့ရက်တွေတောင် ပြည့်စုံသလို ခံစားရလို့ပါ။",
  "ဒီမွေးနေ့မှာ မင်းလိုချင်တဲ့အရာတွေ ပြည့်စုံပါစေ။ မင်းရဲ့အိပ်မက်တွေ အကောင်အထည်ဖော်နိုင်ပါစေ။",
  "ဘယ်နှစ်တွေကြာသွားသွား မင်းဘေးမှာ ငါရှိနေချင်တယ်။",
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