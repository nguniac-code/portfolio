import { MapPin } from "lucide-react";
import Section from "./Section.jsx";
import { about, person } from "../data/portfolio.js";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="glass max-w-3xl rounded-2xl p-6 sm:p-8">
        {about.map((p) => (
          <p key={p} className="mb-4 text-lg leading-relaxed last:mb-0">{p}</p>
        ))}
        <p className="mt-6 flex items-center gap-2 text-sm text-slate-400">
          <MapPin size={16} aria-hidden="true" /> {person.location}
        </p>
      </div>
    </Section>
  );
}
