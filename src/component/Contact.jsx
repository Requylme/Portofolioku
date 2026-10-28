import { useState } from "react";
import { Code2, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() ||
        !form.message.trim()) {
      setError("Semua kolom wajib diisi.");
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      form.email
    );

    if (!emailValid) {
      setError("Masukkan alamat email yang valid.");
      return;
    }

    const recipient = "EMAIL_KAMU@example.com";
    const subject = encodeURIComponent(
      `Pesan portofolio dari ${form.name}`
    );
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`
    );

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-semibold text-indigo-500">CONTACT</p>
          <h2 className="mt-3 text-3xl font-bold dark:text-white
            sm:text-4xl">
            Mari terhubung
          </h2>
          <p className="mt-4 leading-7 text-slate-500
            dark:text-slate-400">
            Punya pertanyaan, ide proyek, atau ingin berdiskusi?
            Saya terbuka untuk berkenalan.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-10
          md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-slate-200
              bg-white p-6 dark:border-white/10 dark:bg-slate-900"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm
                font-medium">
                Nama
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={100}
                placeholder="Nama lengkap"
                className="w-full rounded-xl border border-slate-300
                  bg-transparent px-4 py-3 outline-none
                  focus:border-indigo-500 focus:ring-2
                  focus:ring-indigo-500/20 dark:border-white/15"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm
                font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={254}
                placeholder="nama@email.com"
                className="w-full rounded-xl border border-slate-300
                  bg-transparent px-4 py-3 outline-none
                  focus:border-indigo-500 focus:ring-2
                  focus:ring-indigo-500/20 dark:border-white/15"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm
                font-medium">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                maxLength={3000}
                rows={5}
                placeholder="Tuliskan pesan kamu..."
                className="w-full resize-y rounded-xl border
                  border-slate-300 bg-transparent px-4 py-3
                  outline-none focus:border-indigo-500
                  focus:ring-2 focus:ring-indigo-500/20
                  dark:border-white/15"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center
                gap-2 rounded-xl bg-indigo-600 px-5 py-3
                font-semibold text-white transition
                hover:bg-indigo-700"
            >
              Kirim Pesan <Send size={17} />
            </button>
          </form>

          <div className="flex flex-col justify-center gap-5">
            <h3 className="text-xl font-bold dark:text-white">
              Temukan saya di
            </h3>

            <a
              href="https://github.com/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border
                border-slate-200 p-4 transition hover:border-indigo-500
                dark:border-white/10"
            >
              <Code2 className="text-indigo-500" />
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-sm text-slate-500">
                  Proyek dan kode saya
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border
                border-slate-200 p-4 transition hover:border-indigo-500
                dark:border-white/10"
            >
              <Code2 className="text-indigo-500" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-sm text-slate-500">
                  Profil profesional
                </p>
              </div>
            </a>

            <a
              href="mailto:EMAIL_KAMU@example.com"
              className="flex items-center gap-4 rounded-xl border
                border-slate-200 p-4 transition hover:border-indigo-500
                dark:border-white/10"
            >
              <Mail className="text-indigo-500" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-slate-500">
                  Hubungi saya langsung
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}