import { motion } from "framer-motion";
import { ArrowDown, Download, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center
      pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center
        gap-12 px-5 py-16 md:grid-cols-2 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full
            border border-indigo-200 bg-indigo-50 px-4 py-2
            text-sm text-indigo-700 dark:border-indigo-400/20
            dark:bg-indigo-400/10 dark:text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Mahasiswa & Web Developer
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight
            tracking-tight text-slate-900 dark:text-white
            sm:text-5xl lg:text-6xl">
            Halo, saya{" "}
            <span className="text-indigo-500">
              Santuri Simatupang
            </span>
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-slate-600
            dark:text-slate-400">
            Mahasiswa Manajemen Informatika yang tertarik pada
            pengembangan website dan aplikasi. Saya senang
            mempelajari teknologi baru serta membangun solusi
            digital yang bermanfaat.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center
              gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold
              text-white transition hover:-translate-y-1
              hover:bg-indigo-700">
              Lihat Proyek <ArrowDown size={18} />
            </a>

            <a href="/cv-saya.pdf" download
              className="inline-flex items-center gap-2 rounded-xl
                border border-slate-300 px-5 py-3 font-semibold
                transition hover:-translate-y-1 hover:border-indigo-500
                dark:border-white/15">
              Unduh CV <Download size={18} />
            </a>
          </div>

          <a
            href="https://github.com/USERNAME"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2
              text-sm text-slate-500 transition hover:text-indigo-500"
          >
            <Code2 size={19} /> Lihat GitHub saya
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem]
            bg-gradient-to-br from-indigo-500/30
            to-cyan-400/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem]
            border border-slate-200 bg-white p-3 shadow-2xl
            dark:border-white/10 dark:bg-slate-900">
            <img
              src="https://i1.wp.com/em.wattpad.com/90c78f16c0e49c08836e5ed40926678d79822914/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f37706635756648634d77754b4b513d3d2d3533383336383533342e313531363837333637666561333161633630373836383736323530322e6a7067"
              alt="Foto profil Santuri Simatupang"
              className="aspect-[4/5] w-full rounded-[1.5rem]
                object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-2xl
            border border-slate-200 bg-white p-4 shadow-xl
            dark:border-white/10 dark:bg-slate-900">
            <p className="text-sm font-bold">Terus belajar.</p>
            <p className="text-xs text-slate-500">
              Terus berkembang.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}