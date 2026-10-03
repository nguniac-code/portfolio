import { Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section.jsx";
import { person } from "../data/portfolio.js";

export default function Contact() {
  const items = [
    { label: "Email", value: person.email, href: `mailto:${person.email}`, Icon: Mail },
    { label: "LinkedIn", value: "Ngunia Ceesay", href: person.linkedin, Icon: Linkedin },
    { label: "GitHub", value: "nguniac-code", href: person.github, Icon: Github },
  ];
  return (
    <Section id="contact" title="Contact">
      <p className="mb-8 max-w-xl text-lg text-slate-400">
        Have a question or an opportunity to discuss? Send me an email or connect on LinkedIn.
      </p>
      <ul className="grid gap-4 md:grid-cols-3">
        {items.map(({ label, value, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <Icon size={24} className="text-accent" aria-hidden="true" />
              <span>
                <span className="block text-sm text-slate-400">{label}</span>
                <span className="break-all font-medium text-white">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={`mailto:${person.email}`}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink"
      >
        <Mail size={16} aria-hidden="true" /> Email me
      </a>
    </Section>
  );
}
