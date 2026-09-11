"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";
import { MdOutlineEmail, MdArrowOutward } from "react-icons/md";

const Contact = () => {
  const emailAddress = "prajapatiarjun4147@gmail.com";

  const emailSubject = encodeURIComponent(
    "Exploring New Opportunity / Working Together - Arjun Prajapati",
  );

  const emailBody = encodeURIComponent(
    "Hi Arjun,\n\nI came across your portfolio and really liked your projects. I'd love to connect and discuss some new work opportunities / collaborating together on a project.\n\nLet me know your availability for a quick catch-up!\n\nBest regards,",
  );

  const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section
      id="contact"
      className="flex items-center pb-4"
    >
      <div className="bg-surface border border-foreground-muted/15 rounded-lg p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 w-full">
        {/* Left Content */}
        <div className="flex items-center gap-6">
          <div className="rounded-full ring ring-accent/50 p-3 flex items-center justify-center shrink-0 text-accent shadow">
            <FaRegPaperPlane size={32} />
          </div>

          <div>
            <p className="text-foreground font-semibold text-lg">
              Let&apos;s Build Something Great Together!
            </p>

            <p className="text-foreground-muted text-sm leading-6">
              Have a project in mind or just want to say hi?
              <br />
              I&apos;m just one click away.
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap gap-3 shrink-0 font-medium">
          <a
            href="https://www.linkedin.com/in/arjun-prajapati-4ba91b285/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-foreground-muted/20 rounded-md px-5 py-2 text-sm text-foreground bg-surface hover:bg-background transition-colors"
          >
            <FaLinkedinIn size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/Arjunp04/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-foreground-muted/20 rounded-md px-5 py-2 text-sm text-foreground bg-surface hover:bg-background transition-colors"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href={mailtoUrl}
            className="group flex items-center gap-2 bg-accent hover:bg-accent-hover text-white rounded px-5 py-2 text-sm transition-colors"
          >
            <MdOutlineEmail size={20} />
            Let&apos;s Connect
            <MdArrowOutward
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;