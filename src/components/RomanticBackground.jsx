import { motion } from "framer-motion";

const orbs = [
  ["left-[5%] top-[10%]", "h-72 w-72", 9],
  ["right-[5%] top-[35%]", "h-96 w-96", 12],
  ["left-[30%] bottom-[10%]", "h-80 w-80", 10],
];

function RomanticBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {orbs.map(([position, size, duration], index) => (
        <motion.div
          key={index}
          className={`absolute ${position} ${size} rounded-full bg-pink-500/10 blur-[100px]`}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, .9, 1],
          }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default RomanticBackground;