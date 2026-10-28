export default function SkillCard({ category, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white
      p-6 transition hover:-translate-y-1 hover:shadow-lg
      dark:border-white/10 dark:bg-slate-900">
      <h3 className="text-lg font-bold text-slate-900
        dark:text-white">
        {category}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg bg-indigo-50 px-3 py-2
              text-sm font-medium text-indigo-700
              dark:bg-indigo-400/10 dark:text-indigo-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}