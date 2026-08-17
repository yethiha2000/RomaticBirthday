import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { memories } from "../data/memories";

function MemoryCard({ memory, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 70, scale: .96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: .15 }}
      transition={{ duration: .8, delay: index * .08, ease: [.22,1,.36,1] }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-[2rem] ${memory.featured ? "lg:col-span-7" : "lg:col-span-5"}`}
    >
      <div className="glass overflow-hidden rounded-[2rem] p-2">
        <div className={`relative overflow-hidden rounded-[1.5rem] ${memory.featured ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
          <motion.img
            src={memory.image}
            alt={memory.title}
            loading="lazy"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: .8, ease: "easeOut" }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
              <Heart size={15} className="text-pink-200" fill="currentColor" />
            </div>
            <h3 className="font-romantic text-2xl text-white sm:text-3xl">{memory.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">{memory.description}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Gallery() {
  return (
    <section id="memories" className="relative px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .2 }}
          transition={{ duration: .9 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[.35em] text-pink-300/60">Our Memories</p>
          <h2 className="font-romantic text-4xl text-white sm:text-6xl">Moments I Never Want To Forget</h2>
          <p className="font-myanmar mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {memories.map((memory, index) => (
            <MemoryCard key={memory.id} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;