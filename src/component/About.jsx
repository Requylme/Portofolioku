import { motion } from "framer-motion";
import { BookOpen, Code2, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Pembelajar",
    text: "Terbuka mempelajari teknologi dan pendekatan baru.",
  },
  {
    icon: Code2,
    title: "Web Development",
    text: "Tertarik membangun website yang rapi dan responsif.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    text: "Senang memahami masalah dan mencari solusi.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-24
      dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-semibold text-indigo-500">ABOUT ME</p>
          <h2 className="mt-3 text-3xl font-bold
            text-slate-900 dark:text-white sm:text-4xl">
            Mengenal saya lebih dekat
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600
            dark:text-slate-400">
            Saya merupakan mahasiswa D4 Manajemen Informatika
            Universitas Negeri Surabaya yang memiliki minat pada
            teknologi, pengembangan aplikasi, dan website.
            Saya terus mengembangkan kemampuan pemrograman
            melalui latihan dan proyek pribadi. Saya ingin
            menghasilkan karya digital yang mudah digunakan,
            terstruktur, dan bermanfaat.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white
                p-6 transition hover:-translate-y-1 hover:shadow-lg
                dark:border-white/10 dark:bg-slate-900"
            >
              <Icon className="text-indigo-500" size={28} />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-7 text-slate-500
                dark:text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}