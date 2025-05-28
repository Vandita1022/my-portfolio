import { useState } from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const [current, setCurrent] = useState(0);

  const checkpoints = [0, 1, 2, 3, 4];
  const rocketPosition = `${current * 25}%`; // 0%, 25%, 50%, 75%, 100%

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center">
      <div className="relative w-full max-w-3xl h-24">
        {/* Timeline bar */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 z-0" />

        {/* Rocket */}
        <motion.div
          className="absolute -top-8 text-2xl z-10"
          animate={{ left: rocketPosition }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          🚀
        </motion.div>

        {/* Checkpoints */}
        {checkpoints.map((point, index) => (
          <div
            key={index}
            className="absolute top-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
            style={{ left: `${index * 25}%` }}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
