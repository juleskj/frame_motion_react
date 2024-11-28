"use client";

import Image from "next/image";

import { motion } from "motion/react";
import { useRef } from "react";

const page = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      ref={constraintsRef}
      className="h-[100vh] grid gap-3 place-content-center box1"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        dragConstraints={constraintsRef}
        drag
        whileDrag={{ scale: 0.85, backgroundColor: "#f00" }}
        className="w-[100px] h-[100px] bg-black mx-auto rounded-full font-bold text-white grid place-content-center"
      >
        Drag me!
      </motion.div>
      <motion.div
        dragConstraints={{
          outline: "red solid 1px",
          left: 0,
          right: 300,
          bottom: 0,
          top: 0,
        }}
        drag
        dragMomentum={false}
        whileDrag={{ scale: 1.2, backgroundColor: "blue" }}
        className="w-[100px] h-[100px] bg-black mx-auto box2 font-bold text-white text-center grid place-content-center"
      >
        Drag me agian!
      </motion.div>
    </motion.div>
  );
};

export default page;
