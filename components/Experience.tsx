const jobs = [
  {
    dates: "2018 → present",
    company: "Kurios",
    badge: "YC S21",
    role: "Founder, CEO & Head of Product · LA + LATAM",
    desc: "Built a digital & AI training platform from zero to ~$1M ARR. 20+ enterprise clients across 8 countries, 35+ courses, 65+ instructors. Raised $2.7M from YC, VCs, and angels from Uber, Amazon, Google. 86% logo retention, 156% NDR, NPS 75+.",
  },
  {
    dates: "2017",
    company: "UTEC Ventures",
    role: "Managing Director · Lima, Peru",
    desc: "Led a top-tier startup accelerator. Portfolio grew monthly revenue 139%; 40% closed rounds within 4 months of demo day — 5× faster than prior cohorts.",
  },
  {
    dates: "2015 → 2016",
    company: "Uber",
    role: "Operations & Growth · Founding Team (4th employee) · Lima, Peru",
    desc: "Founding team. Helped scale from $2M to $143M GMV (70×) in under 18 months. Led Supply Growth: grew weekly active drivers 44× (900 → 40,000). Launched UberDOST across LATAM with HQ Product.",
  },
  {
    dates: "Summer 2014",
    company: "Amazon",
    role: "Product Marketing Manager (MBA Intern) · Seattle, WA",
    desc: "Built business case for launching wireless carrier plans on used phones via Marketplace. UX recommendations projected at 7% incremental revenue.",
  },
  {
    dates: "2011 → 2013",
    company: "Credicorp Capital",
    role: "Investment Advisor, Trading Room · Lima, Peru",
    desc: "Launched new investment products through a 10-banker channel. 140% of first-year revenue, 50 HNW clients, $40M AUM.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 border-t max-w-6xl mx-auto px-8" style={{ borderColor: "var(--border)" }}>
      <div className="mb-14 fade-up">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] mb-3.5" style={{ color: "var(--accent)" }}>{"// experience"}</p>
        <h2 className="font-extrabold" style={{ fontSize: "clamp(28px,3.8vw,42px)", letterSpacing: "-0.035em" }}>Where I&apos;ve been</h2>
      </div>

      <div className="flex flex-col">
        {jobs.map((job, i) => (
          <div
            key={job.company}
            className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-3 md:gap-12 py-8 border-b fade-up"
            style={{ borderColor: "var(--border)", transitionDelay: `${i * 0.07}s` }}
          >
            <div className="font-mono text-[10px] pt-0.5 shrink-0" style={{ color: "var(--text-muted)", letterSpacing: "0.05em" }}>
              {job.dates}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[17px] font-bold" style={{ letterSpacing: "-0.02em" }}>{job.company}</span>
                {job.badge && (
                  <span className="font-mono text-[8px] font-semibold px-1.5 py-0.5 rounded-sm" style={{ background: "rgba(230,74,0,0.1)", border: "1px solid rgba(230,74,0,0.22)", color: "#fb923c", letterSpacing: "0.05em" }}>
                    {job.badge}
                  </span>
                )}
              </div>
              <p className="font-mono text-[10px] mb-3" style={{ color: "var(--text-muted)", letterSpacing: "0.01em" }}>{job.role}</p>
              <p className="text-[14px] leading-[1.72]" style={{ color: "var(--text-secondary)" }}>{job.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-9 border-t fade-up" style={{ borderColor: "var(--border)" }}>
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] mb-2.5" style={{ color: "var(--accent)" }}>{"// education"}</p>
        <p className="text-[16px] font-bold" style={{ letterSpacing: "-0.015em" }}>UT Austin, McCombs School of Business</p>
        <p className="font-mono text-[10px] mt-1.5" style={{ color: "var(--text-muted)", letterSpacing: "0.03em" }}>
          Full-Time MBA · Entrepreneurship & Innovation · Good Neighbor Scholar ($50K) · 2013–2015
        </p>
      </div>
    </section>
  );
}
