import { GraduationCap } from "lucide-react";
import Section from "./Section.jsx";
import { education } from "../data/portfolio.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {education.map((e) => (
          <div key={e.school} className="glass flex max-w-3xl gap-4 rounded-2xl p-6">
            <GraduationCap size={28} className="shrink-0 text-accent" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-white">{e.school}</h3>
              <p>{e.degree}</p>
              <p className="text-sm text-slate-400">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
