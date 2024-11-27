"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { AnimatePresence } from "framer-motion";

import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="h-[100vh] grid gap-3 place-content-center">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className=" my-auto example-button"
      >
        show / hide
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
            }}
            exit={{
              rotate: "0",
              scale: 0,
            }}
            transition={{
              duration: 1,
              // type: "spring",
              ease: "backInOut",
            }}
            className="w-[100px] h-[100px] bg-black mx-auto"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}