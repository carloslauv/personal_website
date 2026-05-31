export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t py-16"
      style={{ background: "#050508", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:items-end">
          <div>
            <h2 className="text-[24px] font-extrabold mb-1" style={{ letterSpacing: "-0.03em" }}>
              Carlos Lau
            </h2>
            <p
              className="font-mono text-[10px] mb-5 uppercase tracking-[0.05em]"
              style={{ color: "var(--text-muted)" }}
            >
              YC-backed Founder · ex-Uber (pre-IPO) · Product Builder in AI × Enterprise
            </p>
            <div className="flex gap-2.5 flex-wrap">
              <a
                href="mailto:carloslauv@gmail.com"
                className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2.5 rounded-md transition-colors duration-150"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-bright)",
                  color: "var(--text)",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                carloslauv@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/carloslauv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2.5 rounded-md transition-colors duration-150"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-bright)",
                  color: "var(--text)",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div
            className="font-mono text-[10px] text-right leading-[1.9]"
            style={{ color: "var(--text-muted)" }}
          >
            English · Spanish<br />
            South Pasadena, CA<br />
            US Permanent Resident<br />
            <br />
            © 2026 Carlos Lau
          </div>
        </div>
      </div>
    </footer>
  );
}
