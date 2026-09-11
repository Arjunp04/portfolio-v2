"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import profileImage from "../assets/profile.jpg";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: {  y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: {  scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

const Hero = () => {
  return (
    <section id="home" className="pt-16 pb-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-start gap-6"
        >
          <motion.span
            variants={itemVariants}
            className="flex items-center gap-2 text-green-600 text-xs font-semibold tracking-wide border border-green-600 bg-green-50 rounded-full px-3 py-1"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            ></motion.span>
            OPEN TO OPPORTUNITIES
          </motion.span>

          <motion.div variants={itemVariants}>
            <p className="text-foreground-muted text-lg mb-1">Hi, I&apos;m</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Arjun <span className="text-accent">Prajapati.</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-foreground-muted text-base max-w-md leading-relaxed"
          >
            Frontend Developer building responsive, scalable web applications
            with React, Next.js and modern web technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-2.5 rounded-md text-sm transition-colors shadow"
            >
              View My Work
              <FaArrowRight size={14} />
            </motion.a>

            <motion.a
              href="/Arjun_Prajapati_Resume.pdf"
              download="Arjun_Prajapati_Resume.pdf"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-2 border border-border text-foreground font-medium px-5 py-2.5 rounded-md text-sm bg-surface transition-colors shadow"
            >
              Download Resume
              <BsDownload size={14} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full ring-4 ring-accent ring-offset-8 ring-offset-background overflow-hidden border-white border">
              <Image
                src={profileImage}
                alt="Arjun Prajapati, Frontend Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.span
              className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-accent"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.span>
            <motion.span
              className="absolute bottom-6 -left-4 w-2 h-2 rounded-full bg-accent"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            ></motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;