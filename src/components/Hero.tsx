import type { ReactNode } from "react";
import { profile, techTicker } from "../data/resume";
import {
  useScramble,
  useTyped,
  useSpoken,
  Reveal,
} from "../lib/hooks";
import { GitHubIcon, LinkedInIcon } from "./icons";
import khusbuImage from "../assets/khusbu.png";

const codeLines: { d: number; jsx: ReactNode }[] = [
  {
    d: 1150,
    jsx: (
      <>
        <span className="text-amber">const</span>{" "}
        <span className="text-snow">khusbu</span>
        <span className="text-fog"> = {"{"}</span>
      </>
    ),
  },
  {
    d: 1270,
    jsx: (
      <>
        <span className="text-acid"> role</span>
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
        <span className="text-acid"> team</span>
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
        <span className="text-acid"> stack</span>
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
        <span className="text-acid"> focus</span>
        <span className="text-fog">: </span>
        <span className="text-snow">
          'clean UI + solid delivery'
        </span>
        <span className="text-fog">,</span>
      </>
    ),
  },
  {
    d: 1870,
    jsx: (
      <>
        <span className="text-amber"> async</span>{" "}
        <span className="text-acid">ship</span>
        <span className="text-fog">() {"{"}</span>
      </>
    ),
  },
  {
    d: 1990,
    jsx: (
      <>
        <span className="text-fog">    </span>
        <span className="text-amber">return</span>{" "}
        <span className="text-snow">
          'on time, on brand ✨'
        </span>
        <span className="text-fog">;</span>
      </>
    ),
  },
  {
    d: 2110,
    jsx: <span className="text-fog"> {"}"}</span>,
  },
  {
    d: 2230,
    jsx: <span className="text-fog">{"};"}</span>,
  },
  {
    d: 2550,
    jsx: (
      <>
        <span className="text-acid">➜</span>{" "}
        <span className="text-fog">~</span>{" "}
        <span className="text-snow">khusbu.ship()</span>
      </>
    ),
  },
  {
    d: 2950,
    jsx: (
      <>
        <span className="text-fog">→ </span>
        <span className="text-snow">
          'on time, on brand ✨'
        </span>
      </>
    ),
  },
];

const ROLES = [
  profile.tagline,
  "Email Marketing",
  "Team Lead",
  "UI/UX & Product Thinking",
];

export function Hero() {
  const name = useScramble(profile.name, true, 24);
  const cmd = useTyped(
    "whoami && cat profile.js",
    true,
    46
  );

  const role = useSpoken(
    ROLES,
    32,
    1900,
    13
  );

  const nameParts = name.split(" ");

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-14 md:pt-40"
    >
      {/* =====================================================
          EXISTING PAGE BACKGROUND
          DO NOT CHANGE
      ===================================================== */}

      <div
        className="bg-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div
        className="drift pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(93,240,138,0.16), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 top-64 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,180,84,0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[7fr_5fr]">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div>

            {/* Terminal */}

            <p className="font-mono text-sm text-fog">
              <span className="text-acid">
                khusbuj@portfolio
              </span>

              <span className="text-fog">
                :~$
              </span>{" "}

              <span className="text-snow">
                {cmd.value}
              </span>

              {!cmd.done && (
                <span
                  className="caret"
                  aria-hidden="true"
                />
              )}
            </p>

            {/* =================================================
                NAME
            ================================================= */}

            <h1
              className="mt-5 font-display text-[clamp(2.9rem,8.5vw,6.4rem)] font-extrabold leading-[0.85] tracking-tight"
              aria-label={profile.name}
            >
              <span className="block whitespace-nowrap">
                {nameParts[0]}
              </span>

              <span className="block whitespace-nowrap text-acid">
                {nameParts[1]}
              </span>
            </h1>

            {/* =================================================
                ROLE
            ================================================= */}

            <Reveal delay={200}>
              <p className="mt-6 font-mono text-base md:text-xl">

                <span className="text-fog">
                  $ role ={" "}
                </span>

                <span className="text-acid">
                  “{role.text}”
                </span>

                <span
                  className="caret"
                  aria-hidden="true"
                />

                <span className="ml-4 text-sm text-fog">
                  · {profile.location}
                </span>

              </p>
            </Reveal>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <Reveal delay={320}>
              <p className="mt-5 max-w-xl leading-relaxed text-fog">
                {profile.short}
              </p>
            </Reveal>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <Reveal delay={440}>
              <div className="mt-8 flex flex-wrap items-center gap-3">

                <a
                  href="#experience"
                  className="group inline-flex items-center gap-2 bg-acid px-5 py-3 font-mono text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_rgba(93,240,138,0.45)]"
                >
                  view experience

                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-sm text-snow transition-all duration-300 hover:-translate-y-0.5 hover:border-acid/60 hover:text-acid"
                >
                  get in touch

                  <span aria-hidden="true">
                    →
                  </span>
                </a>

              </div>
            </Reveal>

            {/* =================================================
                CONTACT / SOCIAL
            ================================================= */}

            <Reveal delay={560}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-fog">

                {/* Email */}

                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-acid"
                >
                  <svg
                    className="h-3.5 w-3.5 text-acid"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                    />

                    <path d="m2 7 10 6 10-6" />
                  </svg>

                  {profile.email}
                </a>

                {/* Location */}

                <span className="inline-flex items-center gap-2">

                  <svg
                    className="h-3.5 w-3.5 text-acid"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />

                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                    />
                  </svg>

                  {profile.location}

                </span>

                {/* Languages */}

                <span className="inline-flex items-center gap-2">

                  <svg
                    className="h-3.5 w-3.5 text-acid"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                    />

                    <path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3Z" />
                  </svg>

                  {profile.languages.join(" · ")}

                </span>

                {/* GitHub */}

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

                {/* LinkedIn */}

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

          {/* =================================================
             {/* =================================================
    RIGHT SIDE — PROFILE IMAGE
================================================= */}

<Reveal delay={300}>
  <div className="relative flex min-h-[430px] items-center justify-center md:min-h-[520px]">

    {/* =============================================
        SOFT GREEN GLOW
    ============================================= */}
    <div
      className="
        pointer-events-none
        absolute
        h-[300px] w-[300px]
        rounded-full
        opacity-30
        blur-3xl
        md:h-[410px] md:w-[410px]
      "
      style={{
        background:
          "radial-gradient(circle, rgba(93,240,138,0.45), transparent 68%)",
      }}
      aria-hidden="true"
    />

    {/* =============================================
        LARGE DOTTED OUTER RING
    ============================================= */}
    <div
      className="
        pointer-events-none
        absolute
        h-[360px] w-[360px]
        rounded-full
        border
        border-dashed
        border-acid/30
        md:h-[470px] md:w-[470px]
      "
      aria-hidden="true"
    />

    {/* =============================================
        GREEN / ORANGE MAIN RING
    ============================================= */}
    <div
      className="
        pointer-events-none
        absolute
        h-[330px] w-[330px]
        rounded-full
        border-[3px]
        border-acid/80
        shadow-[0_0_25px_rgba(93,240,138,0.55),0_0_60px_rgba(93,240,138,0.20)]
        md:h-[430px] md:w-[430px]
      "
      style={{
        borderRightColor: "rgba(255,180,84,0.9)",
        borderBottomColor: "rgba(255,180,84,0.75)",
      }}
      aria-hidden="true"
    />

    {/* =============================================
        ROTATING TECH RING
    ============================================= */}
    <div
      className="
        pointer-events-none
        absolute
        h-[350px] w-[350px]
        animate-[spin_18s_linear_infinite]
        rounded-full
        border
        border-acid/40
        border-t-transparent
        border-l-transparent
        md:h-[450px] md:w-[450px]
      "
      aria-hidden="true"
    />

    {/* =============================================
        SECOND ROTATING RING
    ============================================= */}
    <div
      className="
        pointer-events-none
        absolute
        h-[375px] w-[375px]
        animate-[spin_25s_linear_infinite_reverse]
        rounded-full
        border
        border-amber/30
        border-r-transparent
        border-b-transparent
        md:h-[475px] md:w-[475px]
      "
      aria-hidden="true"
    />

    {/* =============================================
        TOP ORBIT DOT
    ============================================= */}
    <span
      className="
        absolute
        left-1/2
        top-[15px]
        z-20
        h-3
        w-3
        -translate-x-1/2
        rounded-full
        bg-acid
        shadow-[0_0_20px_rgba(93,240,138,1)]
        md:top-[20px]
      "
      aria-hidden="true"
    />

    {/* =============================================
        RIGHT ORBIT DOT
    ============================================= */}
    <span
      className="
        absolute
        right-[4%]
        top-[50%]
        z-20
        h-3
        w-3
        rounded-full
        bg-acid
        shadow-[0_0_18px_rgba(93,240,138,1)]
      "
      aria-hidden="true"
    />

    {/* =============================================
        LEFT ORBIT DOT
    ============================================= */}
    <span
      className="
        absolute
        left-[4%]
        top-[38%]
        z-20
        h-2.5
        w-2.5
        rounded-full
        bg-acid
        shadow-[0_0_18px_rgba(93,240,138,1)]
      "
      aria-hidden="true"
    />

    {/* =============================================
        ORANGE ORBIT DOT
    ============================================= */}
    <span
      className="
        absolute
        bottom-[18%]
        left-[17%]
        z-20
        h-3
        w-3
        rounded-full
        bg-amber
        shadow-[0_0_18px_rgba(255,180,84,0.9)]
      "
      aria-hidden="true"
    />

    {/* =============================================
        PROFILE IMAGE
        IMPORTANT:
        khusbu.png should have transparent background
    ============================================= */}
    <div
      className="
        relative
        z-10
        flex
        h-[290px]
        w-[290px]
        items-end
        justify-center
        md:h-[370px]
        md:w-[370px]
      "
    >

      {/* Inner circular glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[10px]
          rounded-full
          bg-acid/5
          shadow-[inset_0_0_35px_rgba(93,240,138,0.18)]
        "
        aria-hidden="true"
      />

      {/* Person */}
      <img
        src={khusbuImage}
        alt="Khusbu Jayswal"
        className="
          relative
          z-10
          h-full
          w-full
          object-contain
          object-bottom
          drop-shadow-[0_15px_35px_rgba(0,0,0,0.65)]
          transition-transform
          duration-700
          hover:scale-[1.03]
        "
      />

      {/* Subtle bottom glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-0
          h-20
          w-48
          -translate-x-1/2
          rounded-full
          bg-acid/20
          blur-2xl
        "
        aria-hidden="true"
      />
    </div>

    {/* =============================================
        CODE ICON
    ============================================= */}
    <div
      className="
        absolute
        left-[3%]
        top-[18%]
        z-30
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-acid/60
        bg-ink/80
        font-mono
        text-lg
        text-acid
        shadow-[0_0_20px_rgba(93,240,138,0.15)]
        backdrop-blur-sm
        md:left-[7%]
        md:h-14
        md:w-14
      "
      aria-hidden="true"
    >
      &lt;/&gt;
    </div>

    {/* =============================================
        LIGHTBULB ICON
    ============================================= */}
    <div
      className="
        absolute
        right-[4%]
        top-[15%]
        z-30
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-amber/70
        bg-ink/80
        text-xl
        shadow-[0_0_20px_rgba(255,180,84,0.15)]
        backdrop-blur-sm
        md:right-[8%]
        md:h-14
        md:w-14
      "
      aria-hidden="true"
    >
      💡
    </div>

    {/* =============================================
        ROCKET ICON
    ============================================= */}
    <div
      className="
        absolute
        bottom-[13%]
        right-[9%]
        z-30
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-acid/60
        bg-ink/80
        text-xl
        shadow-[0_0_20px_rgba(93,240,138,0.15)]
        backdrop-blur-sm
        md:h-14
        md:w-14
      "
      aria-hidden="true"
    >
      🚀
    </div>

    {/* =============================================
        SMALL ORANGE DECORATION
    ============================================= */}
    <span
      className="
        absolute
        left-[10%]
        top-[27%]
        h-12
        w-2
        rotate-[25deg]
        rounded-full
        bg-amber
        opacity-80
        shadow-[0_0_15px_rgba(255,180,84,0.4)]
        md:h-16
      "
      aria-hidden="true"
    />

    {/* =============================================
        SMALL GREEN DECORATION
    ============================================= */}
    <span
      className="
        absolute
        right-[5%]
        top-[40%]
        h-16
        w-3
        rotate-[45deg]
        rounded-full
        bg-acid
        opacity-80
        shadow-[0_0_20px_rgba(93,240,138,0.45)]
        md:h-20
      "
      aria-hidden="true"
    />

    {/* =============================================
        SMALL PLUS MARKS
    ============================================= */}
    <span
      className="absolute left-[17%] top-[24%] z-30 font-mono text-lg text-acid"
      aria-hidden="true"
    >
      ✦
    </span>

    <span
      className="absolute right-[17%] top-[32%] z-30 font-mono text-lg text-acid"
      aria-hidden="true"
    >
      ✦
    </span>

    <span
      className="absolute bottom-[22%] left-[12%] z-30 font-mono text-sm text-acid"
      aria-hidden="true"
    >
      +
    </span>

  </div>
</Reveal>
      </div>

      {/* =====================================================
          TECH TICKER
      ===================================================== */}

      <div
        className="marquee relative mt-16 overflow-hidden border-y border-line bg-panel/40 py-3.5"
        aria-hidden="true"
      >

        <div className="marquee-track flex w-max">

          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0"
            >

              {techTicker.map((t) => (
                <span
                  key={`${copy}-${t}`}
                  className="flex items-center gap-3 pr-10 font-mono text-xs uppercase tracking-[0.22em] text-fog"
                >

                  <span className="text-acid">
                    ✳
                  </span>

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