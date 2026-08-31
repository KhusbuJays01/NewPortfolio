import type { ReactNode } from "react";
import { profile, techTicker } from "../data/resume";
import {
  useScramble,
  useTyped,
  useSpoken,
  Reveal,
} from "../lib/hooks";
import { GitHubIcon, LinkedInIcon } from "./icons";
import khusbuImage from "../assets/khusbu-hero.png";

/* =========================================================
   CODE LINES
========================================================= */

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

/* =========================================================
   ROLES
========================================================= */

const ROLES = [
  profile.tagline,
  "Email Marketing",
  "Team Lead",
  "UI/UX & Product Thinking",
];

/* =========================================================
   HERO
========================================================= */

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

  /*
   * Split the name.
   *
   * KHUSBU
   * JAYSWAL
   */
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
              LEFT SIDE — IDENTITY
          ================================================= */}

          <div>

            {/* =================================================
                TERMINAL COMMAND
            ================================================= */}

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
              className="
                mt-5
                font-display
                text-[clamp(2.9rem,8.5vw,6.4rem)]
                font-extrabold
                leading-[0.85]
                tracking-tight
              "
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

                {/* VIEW EXPERIENCE */}

                <a
                  href="#experience"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    bg-acid
                    px-5
                    py-3
                    font-mono
                    text-sm
                    font-medium
                    text-ink
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_8px_30px_-6px_rgba(93,240,138,0.45)]
                  "
                >

                  view experience

                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>

                </a>


                {/* CONTACT */}

                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    border
                    border-line
                    px-5
                    py-3
                    font-mono
                    text-sm
                    text-snow
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-acid/60
                    hover:text-acid
                  "
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

                {/* EMAIL */}

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


                {/* LOCATION */}

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


                {/* LANGUAGES */}

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


                {/* GITHUB */}

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


                {/* LINKEDIN */}

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
    RIGHT SIDE — PROFILE IMAGE DESIGN
================================================= */}

<Reveal delay={300}>
  <div
    className="
      relative
      flex
      min-h-[430px]
      items-center
      justify-center
      md:min-h-[520px]
    "
  >

    {/* =============================================
        BACKGROUND GLOW
    ============================================= */}

    <div
      className="
        pointer-events-none
        absolute
        h-[300px]
        w-[300px]
        rounded-full
        opacity-40
        blur-3xl
        md:h-[430px]
        md:w-[430px]
      "
      style={{
        background:
          "radial-gradient(circle, rgba(93,240,138,0.30), transparent 68%)",
      }}
      aria-hidden="true"
    />

    {/* =============================================
        OUTER DOTTED CIRCLE
    ============================================= */}

    <div
      className="
        pointer-events-none
        absolute
        h-[350px]
        w-[350px]
        rounded-full
        border
        border-dashed
        border-acid/30
        md:h-[465px]
        md:w-[465px]
      "
      aria-hidden="true"
    />

    {/* =============================================
        MAIN GREEN / ORANGE CIRCLE
    ============================================= */}

    <div
      className="
        pointer-events-none
        absolute
        h-[330px]
        w-[330px]
        rounded-full
        border-[3px]
        border-acid
        shadow-[0_0_20px_rgba(93,240,138,0.7),0_0_50px_rgba(93,240,138,0.25)]
        md:h-[425px]
        md:w-[425px]
      "
      style={{
        borderRightColor: "rgba(255,180,84,1)",
        borderBottomColor: "rgba(255,180,84,0.9)",
      }}
      aria-hidden="true"
    />

    {/* =============================================
        ROTATING GREEN RING
    ============================================= */}

    <div
      className="
        pointer-events-none
        absolute
        h-[355px]
        w-[355px]
        animate-[spin_18s_linear_infinite]
        rounded-full
        border
        border-acid/50
        border-t-transparent
        border-l-transparent
        md:h-[450px]
        md:w-[450px]
      "
      aria-hidden="true"
    />

    {/* =============================================
        ROTATING ORANGE RING
    ============================================= */}

    <div
      className="
        pointer-events-none
        absolute
        h-[375px]
        w-[375px]
        animate-[spin_25s_linear_infinite_reverse]
        rounded-full
        border
        border-amber/40
        border-r-transparent
        border-b-transparent
        md:h-[475px]
        md:w-[475px]
      "
      aria-hidden="true"
    />

    {/* =============================================
        TOP DOT
    ============================================= */}

    <span
      className="
        absolute
        left-1/2
        top-[30px]
        z-30
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
        LEFT DOT
    ============================================= */}

    <span
      className="
        absolute
        left-[7%]
        top-[48%]
        z-30
        h-3
        w-3
        rounded-full
        bg-amber
        shadow-[0_0_18px_rgba(255,180,84,0.9)]
      "
      aria-hidden="true"
    />

    {/* =============================================
        RIGHT DOT
    ============================================= */}

    <span
      className="
        absolute
        right-[6%]
        top-[43%]
        z-30
        h-3
        w-3
        rounded-full
        bg-acid
        shadow-[0_0_18px_rgba(93,240,138,1)]
      "
      aria-hidden="true"
    />

    {/* =============================================
        PROFILE IMAGE
    ============================================= */}

    <div
      className="
        relative
        z-10
        h-[300px]
        w-[300px]
        md:h-[375px]
        md:w-[375px]
      "
    >

      {/* Image glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          rounded-full
          bg-acid/10
          shadow-[inset_0_0_45px_rgba(93,240,138,0.30)]
        "
        aria-hidden="true"
      />

      {/* =========================================
          FACE / PROFILE IMAGE
      ========================================= */}

      <img
        src={khusbuImage}
        alt="Khusbu Jayswal"
        className="
          relative
          z-10
          h-full
          w-full
          rounded-full
          object-cover
          object-center
          drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]
          transition-transform
          duration-700
          hover:scale-[1.03]
        "
      />

      {/* Inner border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-2
          z-20
          rounded-full
          border
          border-white/20
        "
        aria-hidden="true"
      />

      {/* Green image overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          rounded-full
          bg-gradient-to-t
          from-ink/25
          via-transparent
          to-acid/5
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
        left-[4%]
        top-[16%]
        z-40
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-acid/70
        bg-ink/90
        font-mono
        text-lg
        font-bold
        text-acid
        shadow-[0_0_25px_rgba(93,240,138,0.25)]
        backdrop-blur-sm
        md:left-[8%]
        md:h-14
        md:w-14
      "
      aria-hidden="true"
    >
      &lt;/&gt;
    </div>

    {/* =============================================
        LIGHT BULB
    ============================================= */}

    <div
      className="
        absolute
        right-[4%]
        top-[13%]
        z-40
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-amber/70
        bg-ink/90
        text-xl
        shadow-[0_0_25px_rgba(255,180,84,0.25)]
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
        ROCKET
    ============================================= */}

    <div
      className="
        absolute
        bottom-[14%]
        right-[8%]
        z-40
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-acid/70
        bg-ink/90
        text-xl
        shadow-[0_0_25px_rgba(93,240,138,0.25)]
        backdrop-blur-sm
        md:h-14
        md:w-14
      "
      aria-hidden="true"
    >
      🚀
    </div>

    {/* =============================================
        ORANGE DECORATION LEFT
    ============================================= */}

    <span
      className="
        absolute
        left-[8%]
        top-[28%]
        z-20
        h-12
        w-2
        rotate-[25deg]
        rounded-full
        bg-amber
        shadow-[0_0_18px_rgba(255,180,84,0.5)]
        md:h-16
      "
      aria-hidden="true"
    />

    <span
      className="
        absolute
        left-[13%]
        bottom-[22%]
        z-20
        h-10
        w-2
        rotate-[35deg]
        rounded-full
        bg-amber
        shadow-[0_0_18px_rgba(255,180,84,0.5)]
        md:h-14
      "
      aria-hidden="true"
    />

    {/* =============================================
        GREEN DECORATION RIGHT
    ============================================= */}

    <span
      className="
        absolute
        right-[5%]
        top-[38%]
        z-20
        h-16
        w-3
        rotate-[45deg]
        rounded-full
        bg-acid
        shadow-[0_0_22px_rgba(93,240,138,0.55)]
        md:h-20
      "
      aria-hidden="true"
    />

    {/* =============================================
        STARS
    ============================================= */}

    <span
      className="
        absolute
        left-[17%]
        top-[23%]
        z-40
        text-lg
        text-acid
      "
      aria-hidden="true"
    >
      ✦
    </span>

    <span
      className="
        absolute
        right-[16%]
        top-[28%]
        z-40
        text-lg
        text-acid
      "
      aria-hidden="true"
    >
      ✦
    </span>

    {/* =============================================
        SMALL GREEN DOTS
    ============================================= */}

    <span
      className="
        absolute
        left-[10%]
        top-[61%]
        z-30
        h-2
        w-2
        rounded-full
        bg-acid
        shadow-[0_0_12px_rgba(93,240,138,1)]
      "
      aria-hidden="true"
    />

    <span
      className="
        absolute
        right-[12%]
        top-[63%]
        z-30
        h-2
        w-2
        rounded-full
        bg-acid
        shadow-[0_0_12px_rgba(93,240,138,1)]
      "
      aria-hidden="true"
    />

    {/* =============================================
        PLUS
    ============================================= */}

    <span
      className="
        absolute
        bottom-[20%]
        left-[15%]
        z-40
        font-mono
        text-sm
        text-acid
      "
      aria-hidden="true"
    >
      +
    </span>

  </div>
</Reveal>

        </div>


        {/* =====================================================
            STATS STRIP
        ===================================================== */}

        <Reveal delay={200}>

          <div className="
            mt-16
            grid
            grid-cols-2
            gap-px
            overflow-hidden
            border
            border-line
            bg-line
            md:grid-cols-4
          ">

            {profile.stats.map((s) => (

              <div
                key={s.label}
                className="
                  group
                  bg-ink/90
                  p-5
                  transition-colors
                  duration-300
                  hover:bg-panel
                  md:p-6
                "
              >

                <p
                  className="
                    font-display
                    text-3xl
                    font-extrabold
                    text-acid
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    md:text-4xl
                  "
                >
                  {s.value}
                </p>

                <p
                  className="
                    mt-1.5
                    font-mono
                    text-[11px]
                    uppercase
                    tracking-[0.18em]
                    text-fog
                  "
                >
                  {s.label}
                </p>

              </div>

            ))}

          </div>

        </Reveal>

      </div>


      {/* =====================================================
          TECH TICKER
      ===================================================== */}

      <div
        className="
          marquee
          relative
          mt-16
          overflow-hidden
          border-y
          border-line
          bg-panel/40
          py-3.5
        "
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
                  className="
                    flex
                    items-center
                    gap-3
                    pr-10
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.22em]
                    text-fog
                  "
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