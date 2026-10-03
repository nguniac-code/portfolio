import { person } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {person.name}. Built with React, Vite, and Tailwind CSS.
    </footer>
  );
}
