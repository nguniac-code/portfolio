import { motion } from "framer-motion";
import { Brain, Code2, Coffee, Headset, Network, Puzzle, Terminal } from "lucide-react";
import Section from "./Section.jsx";
import { skills } from "../data/portfolio.js";

const iconMap = { coffee: Coffee, terminal: Terminal, code: Code2, network: Network, puzzle: Puzzle, brain: Brain, headset: Headset };

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((s, i) => {
          const Icon = iconMap[s.icon] || Code2;
          return (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass flex items-center gap-3 rounded-xl p-4"
            >
              <Icon size={22} className="shrink-0 text-accent" aria-hidden="true" />
              <span className="font-medium text-white">{s.name}</span>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
