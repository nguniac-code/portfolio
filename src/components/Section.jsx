import { motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-10 font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}
