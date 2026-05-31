const stats = [
  { value: "~$1M", label: "ARR at Kurios" },
  { value: "70×", label: "Uber Peru GMV" },
  { value: "20+", label: "Enterprise clients" },
  { value: "$2.7M", label: "Raised · YC S21" },
];

export default function About() {
  return (
    <section className="relative z-10 py-24 border-t max-w-6xl mx-auto px-8" style={{ borderColor: "var(--border)" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* Text */}
        <div className="fade-up">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] mb-3.5" style={{ color: "var(--accent)" }}>
            {"// about"}
          </p>
          <h2 className="font-extrabold mb-6" style={{ fontSize: "clamp(28px,3.8vw,42px)", letterSpacing: "-0.035em", color: "var(--text)", lineHeight: 1.1 }}>
            Builder.<br />Strategist.<br />Operator.
          </h2>
          <div className="space-y-4 text-[16px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
            <p>
              I founded <strong className="font-semibold" style={{ color: "var(--text)" }}>Kurios (YC S21)</strong> — an AI and digital cohort training platform for enterprises. Scaled $0→~$1M ARR with 20+ Tier-1 clients (Walmart, Scotiabank, BCP), raised $2.7M, and built a 36-person team.
            </p>
            <p>
              Before that, I was the <strong className="font-semibold" style={{ color: "var(--text)" }}>4th employee at Uber Peru</strong> — part of the founding team that went from $2M to $143M GMV (70×) in under 18 months.
            </p>
            <p>
              I think in systems, move fast, and care deeply about what actually gets adopted.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3.5 fade-up" style={{ transitionDelay: "0.1s" }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative rounded-[10px] p-6 overflow-hidden stat-card"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div
                className="text-[32px] font-extrabold leading-none mb-1.5"
                style={{
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg,var(--text),var(--text-secondary))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.04em]" style={{ color: "var(--text-muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
