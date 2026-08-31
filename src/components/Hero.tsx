import type { ReactNode } from "react";
import { profile, techTicker } from "../data/resume";
import { useScramble, useTyped, useSpoken, Reveal } from "../lib/hooks";
import { GitHubIcon, LinkedInIcon } from "./icons";

const codeLines: { d: number; jsx: ReactNode }[] = [
  {
    d: 1150,
    jsx: (
      <>
        <span className="text-amber">const</span> <span className="text-snow">khusbu</span>
        <span className="text-fog"> = {"{"}</span>
      </>
    ),
  },
  {
    d: 1270,
    jsx: (
      <>
        <span className="text-acid">  role</span>
        <span className="text-fog">: </span>
        <span className="text-snow">'Team Lead'</span>
        <span className="text-fog">,</span>
      </>
    ),
  },
  {
    d: 1390,
    jsx: (
      <>
        <span className="text-acid">  team</span>
        <span className="text-fog">: </span>
        <span className="text-amber">6</span>
        <span className="text-fog">,</span>
      </>
    ),
  },
  {
    d: 1510,
    jsx: (
      <>
        <span className="text-acid">  stack</span>
        <span className="text-fog">: [</span>
        <span className="text-snow">'HTML'</span>
        <span className="text-fog">, </span>
        <span className="text-snow">'CSS'</span>
        <span className="text-fog">, </span>
        <span className="text-snow">'JS'</span>
        <span className="text-fog">,</span>
      </>
    ),
  },
  {
    d: 1630,
    jsx: (
      <>
        <span className="text-fog">    </span>
        <span className="text-snow">'Flutter'</span>
        <span className="text-fog">, </span>
        <span className="text-snow">'Python'</span>
        <span className="text-fog">, </span>
        <span className="text-snow">'WordPress'</span>
        <span className="text-fog">],</span>
      </>
    ),
  },
  {
    d: 1750,
    jsx: (
      <>
        <span className="text-acid">  focus</span>
        <span className="text-fog">: </span>
        <span className="text-snow">'clean UI + solid delivery'</span>
        <span className="text-fog">,</span>
      </>
    ),
  },
  {
    d: 1870,
    jsx: (
      <>
        <span className="text-amber">  async</span> <span className="text-acid">ship</span>
        <span className="text-fog">() {"{"}</span>
      </>
    ),
  },
  {
    d: 1990,
    jsx: (
      <>
        <span className="text-fog">    </span>
        <span className="text-amber">return</span> <span className="text-snow">'on time, on brand ✨'</span>
        <span className="text-fog">;</span>
      </>
    ),
  },
  { d: 2110, jsx: <span className="text-fog">  {"}"}</span> },
  { d: 2230, jsx: <span className="text-fog">{"};"}</span> },
  {
    d: 2550,
    jsx: (
      <>
        <span className="text-acid">➜</span> <span className="text-fog">~</span>{" "}
        <span className="text-snow">khusbu.ship()</span>
      </>
    ),
  },
  {
    d: 2950,
    jsx: (
      <>
        <span className="text-fog">→ </span>
        <span className="text-snow">'on time, on brand ✨'</span>
      </>
    ),
  },
];

const ROLES = [profile.tagline, "Email Marketing", "Team Lead", "UI/UX & Product Thinking"];

export function Hero() {
  const name = useScramble(profile.name, true, 24);
  const cmd = useTyped("whoami && cat profile.js", true, 46);
  const role = useSpoken(ROLES, 32, 1900, 13);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-14 md:pt-40">
      {/* ambient layers */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="drift pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(93,240,138,0.16), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-64 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,180,84,0.12), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[7fr_5fr]">
          {/* left — identity */}
          <div>
            <p className="font-mono text-sm text-fog">
              <span className="text-acid">khusbuj@portfolio</span>
              <span className="text-fog">:~$</span>{" "}
              <span className="text-snow">{cmd.value}</span>
              {!cmd.done && <span className="caret" aria-hidden="true" />}
            </p>

            <h1
              className="mt-5 font-display text-[clamp(2.9rem,8.5vw,6.4rem)] font-extrabold leading-[0.95] tracking-tight"
              aria-label={profile.name}
            >
              <span className="break-all">{name}</span>
            </h1>

            <Reveal delay={200}>
              <p className="mt-6 font-mono text-base md:text-xl">
                <span className="text-fog">$ role = </span>
                <span className="text-acid">“{role.text}”</span>
                <span className="caret" aria-hidden="true" />
                <span className="ml-4 text-sm text-fog">· {profile.location}</span>
              </p>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-5 max-w-xl leading-relaxed text-fog">{profile.short}</p>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-2 bg-acid px-5 py-3 font-mono text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_rgba(93,240,138,0.45)]"
                >
                  view experience
                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm text-snow transition-all duration-300 hover:-translate-y-0.5 hover:border-acid/60 hover:text-acid"
                >
                  get in touch
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={560}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-fog">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-acid">
                  <svg className="h-3.5 w-3.5 text-acid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 6 10-6" />
                  </svg>
                  {profile.email}
                </a>
                <span className="inline-flex items-center gap-2">
                  <svg className="h-3.5 w-3.5 text-acid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <svg className="h-3.5 w-3.5 text-acid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3Z" />
                  </svg>
                  {profile.languages.join(" · ")}
                </span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-acid"
                  title="GitHub"
                >
                  <GitHubIcon className="h-3.5 w-3.5 text-acid" />
                  github/KhusbuJays01
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-acid"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="h-3.5 w-3.5 text-acid" />
                  in/khusbu-jayswal
                </a>
              </div>
            </Reveal>
          </div>

          {/* right — terminal card */}
          <Reveal delay={300}>
            <div className="relative border border-line bg-panel/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-acid/70 to-transparent" aria-hidden="true" />
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-amber" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-acid" aria-hidden="true" />
                <span className="ml-3 font-mono text-[11px] text-fog">khusbuj@portfolio: ~/dev</span>
              </div>
              <div className="p-5 font-mono text-[12.5px] leading-7 md:text-[13px]">
                <p className="text-snow">
                  <span className="text-acid">➜</span> <span className="text-fog">~</span> {cmd.value}
                </p>
                {codeLines.map((line, i) => (
                  <p key={i} className="anim-line whitespace-pre" style={{ animationDelay: `${line.d}ms` }}>
                    {line.jsx}
                  </p>
                ))}
                <p className="anim-line mt-1 text-snow" style={{ animationDelay: "3150ms" }}>
                  <span className="text-acid">➜</span> <span className="text-fog">~</span>
                  <span className="caret" aria-hidden="true" />
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* stats strip */}
        <Reveal delay={200}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label} className="group bg-ink/90 p-5 transition-colors duration-300 hover:bg-panel md:p-6">
                <p className="font-display text-3xl font-extrabold text-acid transition-transform duration-300 group-hover:-translate-y-0.5 md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-fog">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* tech ticker */}
      <div className="marquee relative mt-16 overflow-hidden border-y border-line bg-panel/40 py-3.5" aria-hidden="true">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {techTicker.map((t) => (
                <span
                  key={`${copy}-${t}`}
                  className="flex items-center gap-3 pr-10 font-mono text-xs uppercase tracking-[0.22em] text-fog"
                >
                  <span className="text-acid">✳</span>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
