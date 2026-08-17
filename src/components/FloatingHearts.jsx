import { motion } from "framer-motion";

const hearts = Array.from({ length: 12 }, (_, index) => ({
  left: `${8 + ((index * 37) % 84)}%`,
  delay: index * .65,
  duration: 8 + (index % 5),
  size: 12 + (index % 4) * 4,
}));

function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-300/20"
          style={{
            left: heart.left,
            bottom: "-30px",
            fontSize: heart.size,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, index % 2 ? 35 : -35, index % 2 ? -20 : 20, 0],
            opacity: [0, .8, 0],
            rotate: [0, 30, -20, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeOut",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingHearts;