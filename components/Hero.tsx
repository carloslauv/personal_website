export default function Hero() {
  return (
    <section className="relative z-10 pt-28 pb-24 max-w-6xl mx-auto px-8">
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 font-mono text-[11px] font-medium px-3.5 py-1.5 rounded mb-9"
        style={{
          background: "rgba(124,93,249,0.08)",
          border: "1px solid rgba(124,93,249,0.2)",
          color: "#a78bfa",
          letterSpacing: "0.04em",
        }}
      >
        <span className="w-[5px] h-[5px] rounded-full bg-[#a78bfa] pulse-dot" />
        South Pasadena, CA · Open to new opportunities
      </div>

      {/* One-liner */}
      <p
        className="font-mono text-[12px] font-medium mb-7 flex items-center gap-2.5"
        style={{ color: "var(--text-muted)", letterSpacing: "0.06em" }}
      >
        <span className="inline-block w-6 h-px" style={{ background: "var(--text-muted)" }} />
        YC-backed Founder · ex-Uber (pre-IPO) · Product Builder in AI × Enterprise
      </p>

      {/* Headline */}
      <h1 className="font-sans font-extrabold leading-none mb-7" style={{ fontSize: "clamp(52px,7vw,86px)", letterSpacing: "-0.045em" }}>
        <span className="block gradient-text-white">I ship products</span>
        <span className="block gradient-text-accent">that scale.</span>
      </h1>

      {/* Subline */}
      <p className="text-[17px] leading-relaxed mb-11 max-w-[460px]" style={{ color: "var(--text-secondary)" }}>
        A decade building companies, teams, and products across the Americas. From zero to real revenue — in two languages, across 8 countries.
      </p>

      {/* CTAs */}
      <div className="flex gap-3 flex-wrap">
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-[14px] font-semibold px-6 py-3 rounded-md text-white transition-all duration-150 hover:-translate-y-px"
          style={{
            background: "linear-gradient(135deg,#7c5df9,#5b3fd4)",
            boxShadow: "0 0 0 1px rgba(124,93,249,0.35),0 4px 20px rgba(124,93,249,0.25)",
          }}
        >
          See what I&apos;m building →
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[14px] font-semibold px-6 py-3 rounded-md transition-all duration-150"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-bright)",
            color: "var(--text)",
          }}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
