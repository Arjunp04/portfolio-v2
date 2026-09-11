"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-16 pb-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <span className="flex items-center gap-2 text-green-600 text-xs font-semibold tracking-wide border border-green-600 bg-green-50 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            OPEN TO OPPORTUNITIES
          </span>

          <div>
            <p className="text-foreground-muted text-lg mb-1">Hi, I&apos;m</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Arjun <span className="text-accent">Prajapati.</span>
            </h1>
          </div>

          <p className="text-foreground-muted text-base max-w-md leading-relaxed">
            Frontend Developer building responsive, scalable web applications
            with React, Next.js and modern web technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-2.5 rounded-md text-sm transition-colors shadow"
            >
              View My Work
              <FaArrowRight size={14} />
            </a>

            <a
              href="/Arjun_Prajapati_Resume.pdf"
              download="Arjun_Prajapati_Resume.pdf"
              className="flex items-center gap-2 border border-border text-foreground font-medium px-5 py-2.5 rounded-md text-sm bg-surface transition-colors shadow"
            >
              Download Resume
              <BsDownload size={14} />
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center relative">
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
            <span className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-accent"></span>
            <span className="absolute bottom-6 -left-4 w-2 h-2 rounded-full bg-accent"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
