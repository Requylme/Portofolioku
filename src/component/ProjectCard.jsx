import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-2xl border border-slate-200
        bg-white shadow-sm transition-shadow hover:shadow-xl
        dark:border-white/10 dark:bg-slate-900"
    >
      <div className="overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={`Thumbnail ${project.title}`}
          loading="lazy"
          className="aspect-video w-full object-cover
            transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold dark:text-white">
          {project.title}
        </h3>

        <p className="mt-3 min-h-20 leading-7 text-slate-500
          dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-slate-100
              px-2.5 py-1 text-xs font-medium text-slate-700
              dark:bg-white/10 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg
                bg-indigo-600 px-4 py-2 text-sm font-semibold
                text-white transition hover:bg-indigo-700"
            >
              Live Demo <ExternalLink size={15} />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg
                border border-slate-300 px-4 py-2 text-sm
                font-semibold transition hover:border-indigo-500
                dark:border-white/15"
            >
              <Code2 size={16} /> GitHub Repo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}