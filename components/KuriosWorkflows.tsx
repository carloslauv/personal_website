"use client";
export default function KuriosWorkflows() {
  return (
    <section id="kurios" className="relative z-10 py-24 border-t max-w-6xl mx-auto px-8" style={{ borderColor: "var(--border)" }}>
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 lg:gap-[72px] items-start">

        {/* Sidebar */}
        <div className="lg:sticky lg:top-20 fade-up">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] mb-4" style={{ color: "var(--text-muted)" }}>02 — Case studies</p>
          <h2 className="font-extrabold mb-4" style={{ fontSize: "34px", letterSpacing: "-0.035em", lineHeight: 1.1 }}>
            Inside<br />Kurios
          </h2>
          <p className="text-[14px] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
            Kurios was an operator collective for ambiguous problems — fractional work, consulting, custom courses. Two internal tools made the whole thing run. Not active now, but the systems still hold up.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">

          {/* ─── Card A: Warm-intros router ─── */}
          <div className="rounded-xl overflow-hidden fade-up" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
            <div className="px-7 py-6 border-b flex items-start justify-between gap-6" style={{ borderColor: "var(--border)" }}>
              <div>
                <p className="font-mono text-[10px] mb-1.5" style={{ color: "var(--text-muted)", letterSpacing: "0.06em" }}>A</p>
                <h3 className="text-[20px] font-bold mb-1.5" style={{ letterSpacing: "-0.025em" }}>Warm-intros router</h3>
                <p className="text-[13px] leading-relaxed max-w-lg" style={{ color: "var(--text-secondary)" }}>
                  A signal-rich graph between founders and operators. Requests in, qualified intros out — with reasoning attached so the receiver always knew why.
                </p>
              </div>
              <span className="font-mono text-[10px] whitespace-nowrap pt-1 shrink-0" style={{ color: "var(--text-muted)", letterSpacing: "0.04em" }}>schema · v1</span>
            </div>

            <div className="px-7 py-7 overflow-x-auto">
              {/* Warm-intros node graph */}
              <svg className="schema-svg" viewBox="0 0 760 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arr-w" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M1,1 L7,4 L1,7" stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none" strokeLinejoin="round" />
                  </marker>
                </defs>

                {/* founder_request */}
                <rect x="10" y="93" width="148" height="56" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                <text x="84" y="116" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fontWeight="500" fill="rgba(237,237,240,0.88)">founder request</text>
                <text x="84" y="133" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(237,237,240,0.36)">who / why / urgency</text>

                {/* signal_layer */}
                <rect x="212" y="16" width="155" height="56" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                <text x="289" y="39" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fontWeight="500" fill="rgba(237,237,240,0.88)">signal layer</text>
                <text x="289" y="56" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(237,237,240,0.36)">tags · history · trust</text>

                {/* match_engine */}
                <rect x="212" y="170" width="155" height="56" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                <text x="289" y="193" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fontWeight="500" fill="rgba(237,237,240,0.88)">match engine</text>
                <text x="289" y="210" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(237,237,240,0.36)">rules + heuristics</text>

                {/* curator_review */}
                <rect x="425" y="93" width="155" height="56" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                <text x="502" y="116" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fontWeight="500" fill="rgba(237,237,240,0.88)">curator review</text>
                <text x="502" y="133" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(237,237,240,0.36)">human × context</text>

                {/* warm_intro */}
                <rect x="638" y="16" width="112" height="56" rx="4" fill="rgba(124,93,249,0.1)" stroke="rgba(124,93,249,0.35)" strokeWidth="1" />
                <text x="694" y="39" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fontWeight="500" fill="rgba(237,237,240,0.9)">warm intro</text>
                <text x="694" y="56" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(167,139,250,0.6)">with reasoning</text>

                {/* declined */}
                <rect x="638" y="170" width="112" height="56" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
                <text x="694" y="193" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fontWeight="500" fill="rgba(237,237,240,0.45)">declined</text>
                <text x="694" y="210" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(237,237,240,0.25)">with feedback</text>

                {/* Arrows */}
                <path d="M158,121 C184,121 184,44 212,44" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" markerEnd="url(#arr-w)" />
                <path d="M158,121 C184,121 184,198 212,198" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" markerEnd="url(#arr-w)" />
                <path d="M367,44 C396,44 396,121 425,121" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" markerEnd="url(#arr-w)" />
                <path d="M367,198 C396,198 396,121 425,121" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" markerEnd="url(#arr-w)" />
                <path d="M580,121 C608,121 608,44 638,44" stroke="rgba(124,93,249,0.45)" strokeWidth="1" fill="none" markerEnd="url(#arr-w)" />
                <path d="M580,121 C608,121 608,198 638,198" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" markerEnd="url(#arr-w)" />
              </svg>
            </div>

            <div className="px-7 py-3.5 border-t flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
              <a href="#" className="font-mono text-[11px] transition-colors duration-150" style={{ color: "var(--text-muted)", letterSpacing: "0.02em" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}>
                read full case ↗
              </a>
              <div className="flex gap-2">
                {["matching", "graph", "operators"].map((t) => (
                  <span key={t} className="font-mono text-[9px] px-2 py-1 rounded-sm" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-muted)", letterSpacing: "0.04em" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Card B: Scoping engine ─── */}
          <div className="rounded-xl overflow-hidden fade-up" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", transitionDelay: "0.08s" }}>
            <div className="px-7 py-6 border-b flex items-start justify-between gap-6" style={{ borderColor: "var(--border)" }}>
              <div>
                <p className="font-mono text-[10px] mb-1.5" style={{ color: "var(--text-muted)", letterSpacing: "0.06em" }}>B</p>
                <h3 className="text-[20px] font-bold mb-1.5" style={{ letterSpacing: "-0.025em" }}>Scoping engine</h3>
                <p className="text-[13px] leading-relaxed max-w-lg" style={{ color: "var(--text-secondary)" }}>
                  A structured flow for ambiguous briefs. Five passes — from raw ask to staffed, priced proposal — with a kill-switch at each step.
                </p>
              </div>
              <span className="font-mono text-[10px] whitespace-nowrap pt-1 shrink-0" style={{ color: "var(--text-muted)", letterSpacing: "0.04em" }}>schema · v1</span>
            </div>

            <div className="px-7 py-7 overflow-x-auto">
              {/* Scoping engine linear flow */}
              <svg className="schema-svg" viewBox="0 0 700 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arr-s" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M1,1 L7,4 L1,7" stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none" strokeLinejoin="round" />
                  </marker>
                </defs>

                {/* raw_brief */}
                <rect x="10" y="16" width="116" height="54" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                <text x="68" y="38" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="500" fill="rgba(237,237,240,0.88)">raw brief</text>
                <text x="68" y="55" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(237,237,240,0.36)">form · call · email</text>

                {/* reframe */}
                <rect x="148" y="16" width="116" height="54" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <text x="206" y="38" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="500" fill="rgba(237,237,240,0.88)">reframe</text>
                <text x="206" y="55" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(237,237,240,0.36)">problem ≠ ask</text>

                {/* scope_draft */}
                <rect x="286" y="16" width="116" height="54" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <text x="344" y="38" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="500" fill="rgba(237,237,240,0.88)">scope draft</text>
                <text x="344" y="55" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(237,237,240,0.36)">shape · time · risk</text>

                {/* staffing */}
                <rect x="424" y="16" width="116" height="54" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <text x="482" y="38" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="500" fill="rgba(237,237,240,0.88)">staffing</text>
                <text x="482" y="55" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(237,237,240,0.36)">who · capacity</text>

                {/* proposal */}
                <rect x="562" y="16" width="116" height="54" rx="4" fill="rgba(124,93,249,0.1)" stroke="rgba(124,93,249,0.35)" strokeWidth="1" />
                <text x="620" y="38" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="500" fill="rgba(237,237,240,0.9)">proposal</text>
                <text x="620" y="55" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(167,139,250,0.6)">priced · sent</text>

                {/* Horizontal arrows */}
                <line x1="126" y1="43" x2="148" y2="43" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#arr-s)" />
                <line x1="264" y1="43" x2="286" y2="43" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#arr-s)" />
                <line x1="402" y1="43" x2="424" y2="43" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#arr-s)" />
                <line x1="540" y1="43" x2="562" y2="43" stroke="rgba(124,93,249,0.4)" strokeWidth="1" markerEnd="url(#arr-s)" />

                {/* Kill switches */}
                <line x1="206" y1="70" x2="206" y2="112" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3,3" />
                <text x="206" y="130" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(237,237,240,0.25)">kill</text>

                <line x1="344" y1="70" x2="344" y2="112" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3,3" />
                <text x="344" y="130" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(237,237,240,0.25)">kill</text>

                <line x1="482" y1="70" x2="482" y2="112" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3,3" />
                <text x="482" y="130" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(237,237,240,0.25)">kill</text>
              </svg>
            </div>

            <div className="px-7 py-3.5 border-t flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
              <a href="#" className="font-mono text-[11px] transition-colors duration-150" style={{ color: "var(--text-muted)", letterSpacing: "0.02em" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}>
                read full case ↗
              </a>
              <div className="flex gap-2">
                {["scoping", "AI", "consulting"].map((t) => (
                  <span key={t} className="font-mono text-[9px] px-2 py-1 rounded-sm" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-muted)", letterSpacing: "0.04em" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
