import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "./Section.jsx";
import { projects } from "../data/portfolio.js";

const linkCls = "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold";

function ProjectCard({ p }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass flex flex-col rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
        <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-xs text-accent">{p.status}</span>
      </div>
      <p className="mt-3 flex-1 leading-relaxed text-slate-400">{p.description}</p>
      <div className="mt-5">
        <h4 className="mb-2 text-sm font-semibold text-slate-200">Technology</h4>
        {p.tech.length ? (
          <ul className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs">{t}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-500">Tech stack coming soon</p>
        )}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {p.repo ? (
          <a href={p.repo} target="_blank" rel="noopener noreferrer" className={`${linkCls} bg-accent text-ink`}>
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
        ) : (
          <button type="button" disabled className={`${linkCls} cursor-not-allowed bg-white/5 text-slate-500`}>
            Coming Soon
          </button>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className={`${linkCls} glass text-white`}>
            <ExternalLink size={16} aria-hidden="true" /> Live demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </Section>
  );
}
