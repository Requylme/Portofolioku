import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#Certifikat" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : true;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b
      border-slate-200/70 bg-white/80 backdrop-blur-xl
      dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center
        justify-between px-5 py-4 lg:px-8">

        <a href="#home" className="flex items-center gap-2
          text-xl font-bold text-slate-900 dark:text-white">
          <Code2 className="text-indigo-500" />
          Santuri<span className="text-indigo-500">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600
                transition hover:text-indigo-500
                dark:text-slate-300 dark:hover:text-indigo-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Ganti tema"
            className="rounded-xl border border-slate-200 p-2
              transition hover:scale-105 dark:border-white/10"
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Buka menu navigasi"
            aria-expanded={menuOpen}
            className="rounded-xl border border-slate-200 p-2
              md:hidden dark:border-white/10"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5
          py-4 dark:border-white/10 dark:bg-slate-950 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm
                hover:bg-slate-100 dark:hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}