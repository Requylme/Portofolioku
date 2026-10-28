import { motion } from "framer-motion";
import { skills } from "../data/PortofolioData";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-indigo-500">MY SKILLS</p>
          <h2 className="mt-3 text-3xl font-bold
            dark:text-white sm:text-4xl">
            Keahlian yang saya kembangkan
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Beberapa teknologi dan kemampuan yang saya pelajari.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}