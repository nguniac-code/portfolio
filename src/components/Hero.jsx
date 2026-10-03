import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, User } from "lucide-react";
import { person } from "../data/portfolio.js";

const btn =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const [notice, setNotice] = useState("");

  // Downloads the resume only if a real PDF exists; otherwise shows a friendly message.
  const downloadResume = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(person.resume, { method: "HEAD" });
      const type = res.headers.get("content-type") || "";
      if (!res.ok || !type.includes("pdf")) throw new Error("missing");
      const a = document.createElement("a");
      a.href = person.resume;
      a.download = "Ngunia-Ceesay-Resume.pdf";
      a.click();
      setNotice("");
    } catch {
      setNotice("Resume coming soon. Add public/resume.pdf to enable this button.");
    }
  };

  const socials = [
    { label: "GitHub", href: person.github, Icon: Github },
    { label: "LinkedIn", href: person.linkedin, Icon: Linkedin },
    { label: "Email", href: `mailto:${person.email}`, Icon: Mail },
  ];

  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          {person.name}
        </h1>
        <p className="mt-5 font-display text-xl text-gradient sm:text-2xl">
          {person.titleLines[0]}
          <br />
          {person.titleLines[1]}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{person.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={`${btn} bg-accent text-ink`}>View My Projects</a>
          <a href="#contact" className={`${btn} glass text-white`}>Contact Me</a>
          <button type="button" onClick={downloadResume} className={`${btn} glass text-white`}>
            <Download size={16} aria-hidden="true" /> Download Resume
          </button>
        </div>
        {notice && <p role="status" className="mt-3 text-sm text-amber-300">{notice}</p>}

        <ul className="mt-8 flex gap-3">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-200 transition-colors hover:text-accent"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mx-auto w-full max-w-xs"
      >
        <div className="glass relative aspect-square overflow-hidden rounded-3xl p-2">
          {imgOk ? (
            <img
              src={person.profileImage}
              alt={`Portrait of ${person.name}`}
              onError={() => setImgOk(false)}
              className="h-full w-full rounded-2xl object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-panel text-slate-500">
              <User size={64} aria-hidden="true" />
              <span className="px-6 text-center text-sm">Add your photo at public/profile.jpg</span>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
