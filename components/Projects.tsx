"use client";
const projects = [
  {
    tag: "YC S21",
    tagStyle: "yc" as const,
    name: "Kurios",
    desc: "Enterprise AI & digital cohort training platform. 20+ Tier-1 clients (Walmart, Scotiabank, BCP) across 8 countries. 35+ courses, 65+ expert instructors, 86% logo retention, NPS 75+.",
    pills: ["$1M ARR", "20+ clients", "8 countries", "$2.7M raised"],
    link: "https://kurios.la",
    linkLabel: "kurios.la ↗",
    featured: true,
  },
  {
    tag: "Live",
    tagStyle: "live" as const,
    name: "SurveyApp",
    desc: "Build beautiful surveys, share with a link, collect insights. Full-stack Next.js app with auth, Neon DB, and analytics.",
    pills: ["Next.js", "Neon DB", "Vercel"],
    link: "https://survey-example-every.vercel.app",
    linkLabel: "View project ↗",
  },
  {
    tag: "Live",
    tagStyle: "live" as const,
    name: "learning-ai.dev",
    desc: "AI-native learning platform. Exploring how modern AI tools change the way people acquire skills and knowledge.",
    pills: ["AI", "EdTech"],
    link: "https://learning-ai.dev",
    linkLabel: "View project ↗",
  },
  {
    tag: "Experiment",
    tagStyle: "default" as const,
    name: "Project: Heroic",
    desc: "A product experiment currently in development. More details coming soon.",
    pills: ["In progress"],
    link: "https://heroic-longma-0c14f5.netlify.app",
    linkLabel: "View ↗",
  },
  {
    tag: "Experiment",
    tagStyle: "default" as const,
    name: "Project: Kitsune",
    desc: "Another product in the lab. Building in public — expect rough edges and real experiments.",
    pills: ["In progress"],
    link: "https://gleaming-kitsune-77064b.netlify.app",
    linkLabel: "View ↗",
  },
];

const tagStyles = {
  yc: { background: "rgba(230,74,0,0.1)", border: "1px solid rgba(230,74,0,0.2)", color: "#fb923c" },
  live: { background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)", color: "#4ade80" },
  default: { background: "rgba(124,93,249,0.1)", border: "1px solid rgba(124,93,249,0.18)", color: "#a78bfa" },
};

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="relative z-10 py-24 border-t max-w-6xl mx-auto px-8" style={{ borderColor: "var(--border)" }}>
      <div className="mb-14 fade-up">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] mb-3.5" style={{ color: "var(--accent)" }}>{"// work"}</p>
        <h2 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(28px,3.8vw,42px)", letterSpacing: "-0.035em" }}>What I&apos;m shipping</h2>
        <p className="text-[16px] max-w-md" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
          Products across education, AI, and developer tools. Always experimenting, always shipping.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">

        {/* Featured card */}
        <div
          className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-2xl p-8 card-gradient-border fade-up"
          style={{ background: "var(--bg-card)" }}
        >
          <div>
            <span className="inline-block font-mono text-[9px] font-semibold px-2.5 py-1 rounded-sm mb-3.5" style={{ letterSpacing: "0.07em", ...tagStyles[featured.tagStyle] }}>
              ★ {featured.tag}
            </span>
            <h3 className="text-[21px] font-bold mb-2.5" style={{ letterSpacing: "-0.025em" }}>{featured.name}</h3>
            <p className="text-[14px] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{featured.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {featured.pills.map((p) => (
                <span key={p} className="font-mono text-[10px] px-2 py-0.5 rounded-sm" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{p}</span>
              ))}
            </div>
            <a href={featured.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[13px] font-medium mt-2" style={{ color: "var(--accent)" }}>
              {featured.linkLabel}
            </a>
          </div>
          <div className="hidden md:flex items-center justify-center rounded-xl h-44" style={{ background: "linear-gradient(135deg,rgba(124,93,249,0.07),rgba(56,189,248,0.03))", border: "1px solid rgba(124,93,249,0.12)" }}>
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
              <rect x="4" y="12" width="60" height="44" rx="4" stroke="rgba(124,93,249,0.5)" strokeWidth="1.5" />
              <path d="M4 24h60" stroke="rgba(124,93,249,0.3)" strokeWidth="1" />
              <rect x="12" y="32" width="17" height="10" rx="2" fill="rgba(124,93,249,0.18)" />
              <rect x="36" y="32" width="17" height="5" rx="2" fill="rgba(56,189,248,0.18)" />
              <rect x="36" y="40" width="12" height="4" rx="2" fill="rgba(56,189,248,0.1)" />
            </svg>
          </div>
        </div>

        {/* Rest of cards */}
        {rest.map((p, i) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl p-7 text-inherit no-underline transition-all duration-200 hover:-translate-y-0.5 fade-up"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              transitionDelay: `${i * 0.06}s`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--bg-card-hover)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-bright)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            <span className="inline-block font-mono text-[9px] font-semibold px-2.5 py-1 rounded-sm mb-3.5" style={{ letterSpacing: "0.07em", ...tagStyles[p.tagStyle] }}>
              {p.tagStyle === "live" ? "● " : ""}{p.tag}
            </span>
            <h3 className="text-[21px] font-bold mb-2.5" style={{ letterSpacing: "-0.025em" }}>{p.name}</h3>
            <p className="text-[14px] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.pills.map((pill) => (
                <span key={pill} className="font-mono text-[10px] px-2 py-0.5 rounded-sm" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{pill}</span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-[13px] font-medium mt-1 transition-all duration-150 group-hover:gap-2" style={{ color: "var(--accent)" }}>
              {p.linkLabel}
            </span>
          </a>
        ))}

      </div>
    </section>
  );
}
