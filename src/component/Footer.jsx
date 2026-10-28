import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-7
      dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col
        items-center justify-between gap-4 px-5 sm:flex-row
        lg:px-8">
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Santuri Simatupang.
          Dibuat dengan React dan Tailwind CSS.
        </p>

        <a
          href="#home"
          className="flex items-center gap-2 text-sm
            font-medium text-indigo-500 hover:text-indigo-600"
        >
          Kembali ke atas <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}