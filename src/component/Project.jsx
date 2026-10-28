import { motion } from "framer-motion";
import { projects } from "../data/PortofolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24
      dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-indigo-500">MY PROJECTS</p>
          <h2 className="mt-3 text-3xl font-bold
            dark:text-white sm:text-4xl">
            Proyek pilihan saya
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Kumpulan proyek untuk belajar, bereksperimen,
            dan mengembangkan kemampuan.
          </p>
        </motion.div>

        
<div className="grid grid-cols-1 gap-5
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
