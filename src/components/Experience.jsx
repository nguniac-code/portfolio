import { Briefcase } from "lucide-react";
import Section from "./Section.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {experience.map((x) => (
          <div key={x.role} className="glass flex max-w-3xl gap-4 rounded-2xl p-6">
            <Briefcase size={28} className="shrink-0 text-accent" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-white">{x.role}</h3>
              {(x.organization || x.period) && (
                <p className="text-sm text-slate-400">{[x.organization, x.period].filter(Boolean).join(", ")}</p>
              )}
              <p className="mt-2 leading-relaxed">{x.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
