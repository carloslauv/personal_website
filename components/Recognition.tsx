const items = [
  "★ Y Combinator S21",
  "Forbes Tech Council",
  "Bloomberg Línea LatAm",
  "EB1A — Extraordinary Ability",
  "Advisor · BCP (largest bank, Peru)",
  "Advisor · Alicorp (largest CPG, Peru)",
  "UT Austin · Good Neighbor Scholar",
  "Competitive Squash · 5.5+ US Rating",
];

export default function Recognition() {
  return (
    <section className="relative z-10 py-20 border-t max-w-6xl mx-auto px-8" style={{ borderColor: "var(--border)" }}>
      <div className="mb-10 fade-up">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] mb-3" style={{ color: "var(--accent)" }}>{"// recognition"}</p>
        <h2 className="font-extrabold" style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.03em" }}>A few highlights</h2>
      </div>
      <div className="flex flex-wrap gap-2 fade-up" style={{ transitionDelay: "0.06s" }}>
        {items.map((item) => (
          <span
            key={item}
            className="text-[13px] font-medium px-4 py-2 rounded-md transition-all duration-150"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
