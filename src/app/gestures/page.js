"use client";

import Image from "next/image";

import { motion, MotionConfig } from "motion/react";

const page = () => {
  return (
    <div className="h-[100vh] grid gap-3 place-content-center">
      <MotionConfig>
        <motion.button
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.85, rotate: "5deg" }}
          className=" my-auto example-button"
        >
          Click me!
        </motion.button>

        {/* <motion.button className=" my-auto example-button">
          Click me again!
        </motion.button> */}
      </MotionConfig>
    </div>
  );
};

export default page;
