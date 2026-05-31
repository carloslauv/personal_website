"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#work", label: "work" },
  { href: "#kurios", label: "kurios" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 border-b transition-all duration-200"
      style={{
        background: scrolled ? "rgba(9,9,13,0.88)" : "rgba(9,9,13,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-8 h-[52px] grid items-center"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-[13px] font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--text-muted)" }}>/</span> carlos lau
        </a>

        {/* Center links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium transition-colors duration-150"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: LinkedIn + mobile menu */}
        <div className="flex justify-end items-center gap-4">
          <a
            href="https://linkedin.com/in/carloslauv"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] font-medium transition-colors duration-150"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
            linkedin
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-px transition-all" style={{ background: "var(--text-muted)", transform: menuOpen ? "rotate(45deg) translate(2px,2px)" : "" }} />
            <span className="block w-5 h-px transition-all" style={{ background: "var(--text-muted)", opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-px transition-all" style={{ background: "var(--text-muted)", transform: menuOpen ? "rotate(-45deg) translate(2px,-2px)" : "" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-8 py-4 flex flex-col gap-4" style={{ borderColor: "var(--border)", background: "rgba(9,9,13,0.96)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-[15px] font-medium" style={{ color: "var(--text-secondary)" }}>
              {l.label}
            </a>
          ))}
          <a href="https://linkedin.com/in/carloslauv" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium" style={{ color: "var(--text-secondary)" }}>
            linkedin ↗
          </a>
        </div>
      )}
    </nav>
  );
}
