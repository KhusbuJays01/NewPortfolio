import { useEffect, useState } from "react";
import {
  profile,
  experience,
  projects,
  skillGroups,
  education,
  previousEducation,
  certifications,
  interests,
} from "../data/resume";
import { Reveal, useReveal, useSpoken } from "../lib/hooks";
import { GitHubIcon, LinkedInIcon } from "./icons";
import speakerImg from "../assets/speaker.png";

/* ================= section header (line-mask reveal) ================= */
function SectionHead({ index, title, sub }: { index: string; title: string; sub: string }) {
  const { ref, vis } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="mb-12 md:mb-14">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-acid md:text-base">/{index}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog md:text-[11px]">{sub}</span>
      </div>
      <div className="mt-4 overflow-hidden">
        <h2
          className={`font-display text-4xl font-extrabold uppercase tracking-tight transition-transform duration-700 ease-out md:text-6xl ${
            vis ? "translate-y-0" : "translate-y-[110%]"
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function Shell({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}

/* ================= speaking card (live equalizer + cycling phrases) ================= */
const PHRASES = [
  "Hey, hello! I'm Khusbu Jaiswal — team lead & frontend developer.",
  "I lead teams that review, share knowledge, and ship on time.",
  "Clean UI, solid delivery — that's the standard I hold.",
  "Mentoring junior devs is my favourite part of the job.",
  "Bhaktapur based — and ready to build with you.",
];

const ttsSupported = typeof window !== "undefined" && "speechSynthesis" in window;

function VolumeIcon({ muted }: { muted: boolean }) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" strokeLinejoin="round" />
      {muted ? (
        <>
          <line x1="22" y1="9" x2="16" y2="15" strokeLinecap="round" />
          <line x1="16" y1="9" x2="22" y2="15" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" strokeLinecap="round" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function SpeakingCard() {
  const [soundOn, setSoundOn] = useState(false);
  const { text, phase, idx } = useSpoken(PHRASES, 32, soundOn ? 3600 : 1900, 13);

  const doSpeak = (t: string) => {
    if (!ttsSupported) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t.replace(/[“”]/g, ""));
    u.rate = 1.05;
    u.pitch = 1.1;
    u.volume = 1;
    const voices = window.speechSynthesis.getVoices();
    const voice =
      voices.find((v) => v.lang.startsWith("en") && /female|zira|samantha|google uk english female/i.test(v.name)) ??
      voices.find((v) => v.lang.startsWith("en"));
    if (voice) u.voice = voice;
    window.speechSynthesis.speak(u);
  };

  useEffect(() => {
    if (phase === "holding" && text && soundOn) doSpeak(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, text, soundOn]);

  useEffect(() => {
    return () => {
      if (ttsSupported) window.speechSynthesis.cancel();
    };
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    if (next) {
      // this click is a user gesture → unlocks speech in browsers
      doSpeak(PHRASES[idx] ?? PHRASES[0]);
    } else if (ttsSupported) {
      window.speechSynthesis.cancel();
    }
  };

  const talking = phase === "typing";

  return (
    <div className="border border-line bg-panel/60 p-5">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 md:h-20 md:w-20">
          <span className="speaking-ring" aria-hidden="true" />
          <span className="speaking-ring" style={{ animationDelay: "0.9s" }} aria-hidden="true" />
          <span className="speaking-ring" style={{ animationDelay: "1.7s" }} aria-hidden="true" />
          <span
            className={`glow-breathe absolute -inset-1.5 rounded-full bg-acid/25 blur-md transition-opacity duration-500 ${
              talking ? "" : "opacity-25"
            }`}
            aria-hidden="true"
          />
          <img
            src={speakerImg}
            alt="Khusbu Jaiswal — animated speaking avatar"
            className={`relative h-16 w-16 rounded-full border border-acid/40 bg-ink object-cover md:h-20 md:w-20 ${
              talking ? "girl-talk-fast" : "girl-talk"
            }`}
          />
          <span
            className={`absolute -bottom-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full border-2 border-panel bg-acid transition-opacity duration-300 ${
              talking ? "opacity-100" : "opacity-40"
            }`}
            title="speaking"
            aria-hidden="true"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          </span>
        </div>

        <div className="min-w-0">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
            <span className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-acid" aria-hidden="true" />
            AI assistant active
          </p>
          <p className="mt-1.5 truncate font-mono text-xs text-acid">Khusbu Jaiswal is speaking…</p>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={toggleSound}
            className={`grid h-9 w-9 shrink-0 place-items-center border transition-all duration-200 hover:-translate-y-0.5 ${
              soundOn
                ? "border-acid bg-acid/10 text-acid"
                : "border-line text-fog hover:border-acid hover:text-acid"
            }`}
            title={soundOn ? "Mute voice" : "Enable voice"}
            aria-pressed={soundOn}
            aria-label={soundOn ? "Mute voice" : "Enable voice"}
          >
            <VolumeIcon muted={!soundOn} />
          </button>
          <div
            className={`flex h-7 items-end gap-1 transition-opacity duration-300 ${talking ? "opacity-100" : "opacity-40"}`}
            aria-hidden="true"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="eq-bar h-6 w-1 rounded-sm bg-acid/80"
                style={{ animationDelay: `${i * 0.13}s`, animationDuration: `${0.7 + i * 0.09}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 border border-line/70 bg-ink/70 p-4">
        <p className="font-mono text-[10px] text-fog">khushuj@portfolio:~$ ./speak.sh</p>
        <p className="mt-2 min-h-[70px] text-[15px] leading-relaxed text-snow/90">
          “{text}
          <span className="caret" aria-hidden="true" />”
        </p>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <div className="flex flex-1 gap-1.5" aria-hidden="true">
          {PHRASES.map((p, i) => (
            <span
              key={p}
              className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i === idx ? "bg-acid" : "bg-line"}`}
            />
          ))}
        </div>
        <p className="font-mono text-[10px] text-fog/60">
          {soundOn ? "// voice: on" : ttsSupported ? "// tap the speaker to hear her" : "// voice not supported"}
        </p>
      </div>
    </div>
  );
}

/* ================= 01 — about / professional summary ================= */
export function About() {
  return (
    <Shell id="about">
      <SectionHead index="01" title="About" sub="professional summary" />
      <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          {profile.summary.map((p, i) => (
            <Reveal key={i} delay={i * 110}>
              <p className={`leading-relaxed ${i === 0 ? "text-lg text-snow/90 md:text-xl" : "text-fog"}`}>
                {i === 0 ? (
                  <>
                    <span className="mr-2 font-mono text-acid">_</span>
                    {p}
                  </>
                ) : (
                  p
                )}
              </p>
            </Reveal>
          ))}
          <Reveal delay={340}>
            <p className="border-l-2 border-acid pl-5 font-mono text-sm italic text-fog">
              “Great products are built by teams that review each other’s work, share knowledge, and ship on
              schedule — that’s the culture I build.”
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="h-full">
          <SpeakingCard />
        </Reveal>
      </div>
    </Shell>
  );
}

/* ================= 02 — work experience ================= */
export function Experience() {
  return (
    <Shell id="experience">
      <SectionHead index="02" title="Work Experience" sub="git log --career" />
      <ol className="relative ml-2 space-y-16 border-l border-line md:ml-3">
        {experience.map((job, i) => (
          <li key={job.company} className="group relative pl-8 md:pl-12">
            <span
              className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink bg-acid transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgba(93,240,138,0.7)]"
              aria-hidden="true"
            />
            <Reveal delay={i * 120}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h3 className="font-display text-2xl font-bold md:text-3xl">{job.role}</h3>
                {job.promoted && (
                  <span className="border border-amber/50 bg-amber/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
                    ★ promoted
                  </span>
                )}
                <span className="border border-line px-2.5 py-1 font-mono text-[11px] text-fog">{job.dates}</span>
              </div>
              <p className="mt-2 font-mono text-sm text-acid">
                {job.company} <span className="text-fog">· {job.location}</span>
              </p>
              <ul className="mt-5 space-y-3">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-fog">
                    <span className="mt-0.5 shrink-0 text-acid" aria-hidden="true">
                      ▹
                    </span>
                    <span className="transition-colors duration-200 hover:text-snow/90">{pt}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Shell>
  );
}

/* ================= 03 — key projects ================= */
export function Projects() {
  return (
    <Shell id="projects">
      <SectionHead index="03" title="Key Projects" sub="cd ~/releases" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.file} delay={i * 130} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden border border-line bg-panel/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-acid/60 hover:shadow-[0_20px_50px_-20px_rgba(93,240,138,0.25)]">
              <span
                className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-acid to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative h-44 overflow-hidden border-b border-line">
                <img
                  src={p.img}
                  alt={`${p.title} — interface preview`}
                  loading="lazy"
                  className="kenburns h-full w-full object-cover"
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-panel via-panel/10 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute bottom-2.5 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-snow/70 transition-colors duration-300 group-hover:text-acid">
                  {p.year}
                </span>
              </div>
              <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/80" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-acid/80" aria-hidden="true" />
                <span className="ml-2 font-mono text-[11px] text-fog">{p.file}</span>
              </div>
              <div className="flex grow flex-col p-5">
                <h3 className="font-display text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-acid md:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{p.desc}</p>
                <p className="mt-4 border-l-2 border-acid/70 pl-3 text-[13px] leading-relaxed text-snow/85">
                  {p.impact}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-fog transition-colors duration-300 group-hover:border-acid/40 group-hover:text-snow/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ================= 04 — skills & expertise ================= */
export function Skills() {
  return (
    <Shell id="skills">
      <SectionHead index="04" title="Skills & Expertise" sub="ls -la ./capabilities" />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.index} delay={i * 110} className="h-full">
            <div className="group h-full border border-line bg-panel/50 p-6 transition-colors duration-300 hover:border-acid/40 md:p-7">
              <div className="mb-5 flex items-baseline gap-3">
                <span className="font-mono text-xs text-acid">{g.index}</span>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide">{g.title}</h3>
                <span className="ml-auto hidden font-mono text-[10px] italic text-fog/70 sm:block">{g.note}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default border border-line bg-ink/60 px-3 py-1.5 font-mono text-xs text-fog transition-all duration-200 hover:-translate-y-0.5 hover:border-acid hover:bg-acid hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ================= 05 — education + certifications + interests ================= */
export function EducationCerts() {
  const issuerColor: Record<string, string> = {
    acid: "border-acid/50 bg-acid/10 text-acid",
    amber: "border-amber/50 bg-amber/10 text-amber",
    fog: "border-line bg-panel2 text-fog",
  };

  return (
    <Shell id="education">
      <SectionHead
        index="05"
        title="Education & Credentials"
        sub="git blame: origins"
      />

      <div className="grid gap-5 lg:grid-cols-2">

        {/* ================= LEFT — EDUCATION ================= */}
        <Reveal className="h-full">
          <div className="flex h-full flex-col gap-5">

            {/* MAIN EDUCATION */}
            <div className="flex flex-1 flex-col border border-line bg-panel/60 p-6 transition-colors duration-300 hover:border-acid/40 md:p-7">

              <span className="mb-4 inline-flex w-fit border border-acid/40 bg-acid/5 px-2.5 py-1 font-mono text-[11px] text-acid">
                {education.dates}
              </span>

              <h3 className="font-display text-xl font-bold leading-snug md:text-2xl">
                {education.degree}
              </h3>

              <p className="mt-2 font-mono text-sm text-acid">
                {education.school}
              </p>

              <p className="mt-1 text-sm text-fog">
                {education.location}
              </p>

              <div className="mt-6">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
                  Relevant Courses
                </p>

                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course) => (
                    <span
                      key={course}
                      className="border border-line bg-ink/60 px-3 py-1.5 font-mono text-xs text-fog transition-all duration-200 hover:-translate-y-0.5 hover:border-acid hover:bg-acid hover:text-ink"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <div className="border border-acid/30 bg-acid/5 px-4 py-3 font-mono text-xs text-acid">
                  <span className="text-fog">gpa:Complated</span>{" "}
                  {education.gpa}
                </div>
              </div>
            </div>

            {/* PREVIOUS EDUCATION — +2 */}
            <div className="flex flex-col border border-line bg-panel/60 p-6 transition-colors duration-300 hover:border-acid/40 md:p-7">

              <span className="mb-4 inline-flex w-fit border border-line px-2.5 py-1 font-mono text-[11px] text-fog">
                {previousEducation.dates}
              </span>

              <h3 className="font-display text-xl font-bold leading-snug md:text-2xl">
                {previousEducation.degree}
              </h3>

              <p className="mt-2 font-mono text-sm text-acid">
                {previousEducation.school}
              </p>

              <div className="mt-5 border border-line bg-ink/50 px-4 py-3 font-mono text-xs text-fog">
                <span className="text-acid">status:</span>{" "}
                {previousEducation.results}
              </div>

            </div>

          </div>
        </Reveal>

        {/* ================= RIGHT — CERTIFICATIONS ================= */}
        <Reveal delay={130} className="h-full">
          <div className="flex h-full flex-col border border-line bg-panel/60 p-6 transition-colors duration-300 hover:border-acid/40 md:p-7">

            <h3 className="font-display text-lg font-bold uppercase tracking-wide">
              Certifications
            </h3>

            <ul className="mt-4 grow">
              {certifications.map((c, i) => (
                <li
                  key={c.name}
                  className={`flex items-center justify-between gap-4 py-3.5 transition-colors duration-200 hover:bg-ink/40 ${
                    i > 0 ? "border-t border-line/70" : ""
                  }`}
                >
                  <span className="text-[15px] text-snow/90">
                    {c.name}
                  </span>

                  <span
                    className={`shrink-0 border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                      issuerColor[c.color]
                    }`}
                  >
                    {c.issuer}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </Reveal>

      </div>

      {/* ================= INTERESTS ================= */}
      <Reveal delay={220}>
        <div className="mt-5 flex flex-wrap items-center gap-3 border border-line bg-panel/40 px-5 py-4">

          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
            interests:
          </span>

          {interests.map((it) => (
            <span
              key={it}
              className="border border-line px-3 py-1.5 font-mono text-xs text-fog transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/60 hover:text-amber"
            >
              ✦ {it}
            </span>
          ))}

        </div>
      </Reveal>

    </Shell>
  );
}

/* ================= 06 — contact / footer ================= */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      /* clipboard unavailable — no-op */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const set =
    (key: "name" | "email" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const val = e.target.value;
      setValues((v) => ({ ...v, [key]: val }));
      setErrors((er) => ({ ...er, [key]: undefined }));
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: { name?: string; email?: string; message?: string } = {};
    if (!values.name.trim()) er.name = "error: name is required";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) er.email = "error: valid email required";
    if (values.message.trim().length < 10) er.message = "error: tell me a bit more (10+ characters)";
    setErrors(er);
    if (Object.values(er).some(Boolean)) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  };

  const reset = () => {
    setValues({ name: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  };

  const rows: { k: string; v: React.ReactNode }[] = [
    {
      k: "email",
      v: (
        <button
          onClick={copyEmail}
          className="group inline-flex items-center gap-3 text-left transition-colors hover:text-acid"
          title="Copy email"
        >
          <span>{profile.email}</span>
          <span
            className={`border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
              copied ? "border-acid bg-acid/15 text-acid" : "border-line text-fog group-hover:border-acid/50"
            }`}
          >
            {copied ? "copied ✓" : "copy"}
          </span>
        </button>
      ),
    },
    { k: "location", v: profile.location },
    {
      k: "github",
      v: (
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-acid"
        >
          <GitHubIcon className="h-3.5 w-3.5" />
          github.com/KhusbuJays01 <span className="text-fog">↗</span>
        </a>
      ),
    },
    {
      k: "linkedin",
      v: (
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-acid"
        >
          <LinkedInIcon className="h-3.5 w-3.5" />
          in/khusbu-jayswal <span className="text-fog">↗</span>
        </a>
      ),
    },
    { k: "languages", v: profile.languages.join(" · ") },
    { k: "availability", v: "Team-lead · architecture · mentoring" },
  ];

  const inputCls =
    "w-full border border-line bg-ink/80 px-3.5 py-2.5 font-mono text-sm text-snow placeholder:text-fog/45 transition-colors duration-200 focus:border-acid focus:outline-none";
  const labelCls = "mb-2 block font-mono text-xs text-fog";
  const errCls = "mt-1.5 block font-mono text-[11px] text-[#ff9c9c]";

  return (
    <Shell id="contact">
      <SectionHead index="06" title="Get in Touch" sub="open to collaboration" />
      <div className="grid items-start gap-12 lg:grid-cols-2">
        {/* left — pitch + info */}
        <div>
          <Reveal>
            <p className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Let’s build <span className="text-acid">something</span> great, together.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-md leading-relaxed text-fog">
              Whether you need a frontend team lead, an architect for a React platform, or a mentor for junior
              developers — my inbox is open.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 flex max-w-md items-center gap-3 border border-line bg-panel px-4 py-3.5 font-mono text-[13px]">
              <span className="text-acid">$</span>
              <span className="truncate text-snow/90">curl -sL khusuj.dev/contact | sh</span>
              <span className="caret ml-auto shrink-0" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-6 max-w-md border border-line bg-panel/60">
              {rows.map((r, i) => (
                <div
                  key={r.k}
                  className={`flex flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3.5 font-mono text-[13px] transition-colors duration-200 hover:bg-ink/40 ${
                    i > 0 ? "border-t border-line/70" : ""
                  }`}
                >
                  <span className="w-28 shrink-0 text-acid">{r.k}</span>
                  <span className="text-fog">=</span>
                  <span className="text-snow/90">{r.v}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 border-t border-line/70 px-5 py-3.5">
                <span className="pulse-dot h-2 w-2 rounded-full bg-acid" aria-hidden="true" />
                <span className="font-mono text-xs text-fog">status: accepting new collaborations</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* right — contact form */}
        <Reveal delay={200}>
          <div className="relative border border-line bg-panel/60">
            <span
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-acid/70 to-transparent"
              aria-hidden="true"
            />
            <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-amber" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-acid" aria-hidden="true" />
              <span className="ml-3 font-mono text-[11px] text-fog">new-message.md</span>
            </div>

            {status === "sent" ? (
              <div className="px-6 py-12 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-acid/50 bg-acid/10">
                  <svg className="h-8 w-8 text-acid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="m4.5 12.5 5 5 10-11" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="mt-5 font-display text-2xl font-bold">message sent ✓</p>
                <p className="mt-2 font-mono text-xs text-acid">status: 200 OK · expected reply &lt; 24h</p>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-fog">
                  Thanks {values.name.trim()}! I’ll get back to you at {values.email.trim()} shortly.
                </p>
                <button
                  onClick={reset}
                  className="mt-7 border border-line px-5 py-2.5 font-mono text-xs text-snow transition-all duration-300 hover:border-acid hover:text-acid"
                >
                  ← send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-5 p-5 md:p-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-name" className={labelCls}>
                      <span className="text-acid">&gt;</span> name
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      value={values.name}
                      onChange={set("name")}
                      placeholder="Ada Lovelace"
                      className={`${inputCls} ${errors.name ? "border-[#ff9c9c]/60" : ""}`}
                      autoComplete="name"
                    />
                    {errors.name && <span className={errCls}>{errors.name}</span>}
                  </div>
                  <div>
                    <label htmlFor="cf-email" className={labelCls}>
                      <span className="text-acid">&gt;</span> email
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      value={values.email}
                      onChange={set("email")}
                      placeholder="ada@company.com"
                      className={`${inputCls} ${errors.email ? "border-[#ff9c9c]/60" : ""}`}
                      autoComplete="email"
                    />
                    {errors.email && <span className={errCls}>{errors.email}</span>}
                  </div>
                </div>
                <div>
                  <label htmlFor="cf-msg" className={labelCls}>
                    <span className="text-acid">&gt;</span> message
                  </label>
                  <textarea
                    id="cf-msg"
                    rows={5}
                    value={values.message}
                    onChange={set("message")}
                    placeholder="Tell me about your project, timeline, and the team you're building…"
                    className={`${inputCls} resize-none ${errors.message ? "border-[#ff9c9c]/60" : ""}`}
                  />
                  {errors.message && <span className={errCls}>{errors.message}</span>}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 bg-acid px-6 py-3 font-mono text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_rgba(93,240,138,0.45)] disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? (
                      <>
                        sending<span className="animate-pulse">…</span>
                      </>
                    ) : (
                      <>
                        send message <span aria-hidden="true">→</span>
                      </>
                    )}
                  </button>
                  <span className="font-mono text-[10px] text-fog/70">// replies within 24h, usually faster</span>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-line py-6 font-mono text-[11px] text-fog">
        <span>© 2026 {profile.firstName}</span>
        <span className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-all duration-200 hover:-translate-y-0.5 hover:text-acid"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-all duration-200 hover:-translate-y-0.5 hover:text-acid"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-all duration-200 hover:-translate-y-0.5 hover:text-acid">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
          </a>
        </span>
        <span>
          designed by <span className="text-acid">{profile.handle}</span> · react · tailwind ·{" "}
          <span className="text-acid">v3.2.0</span>
        </span>
      </footer>
    </Shell>
  );
}
