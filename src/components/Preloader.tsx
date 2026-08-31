import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../lib/hooks";

/* ---- matrix-style falling code rain ---- */
function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "01{}[]<>/=+*#%&$@;:~^!?abcdefABCDEF0123456789".split("");
    const fontSize = 14;
    let cols: { x: number; y: number; speed: number }[] = [];
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor(canvas.width / fontSize);
      cols = Array.from({ length: count }, (_, i) => ({
        x: i * fontSize,
        y: Math.random() * -canvas.height,
        speed: 1 + Math.random() * 2.4,
      }));
      ctx.fillStyle = "#0a0e14";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion()) {
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      for (let i = 0; i < 70; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillStyle = `rgba(93,240,138,${0.04 + Math.random() * 0.1})`;
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y);
      }
      return () => window.removeEventListener("resize", resize);
    }

    let last = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 55) return;
      last = t;
      ctx.fillStyle = "rgba(10,14,20,0.24)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      cols.forEach((c) => {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const bright = Math.random() > 0.93;
        ctx.fillStyle = bright ? "rgba(93,240,138,0.85)" : "rgba(93,240,138,0.28)";
        ctx.fillText(ch, c.x, c.y);
        c.y += c.speed * fontSize;
        if (c.y > canvas.height + 30) {
          c.y = -20 - Math.random() * 400;
          c.speed = 1 + Math.random() * 2.4;
        }
      });
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

const STAGES: [number, string][] = [
  [4, "initializing khusbu.jaiswal…"],
  [28, "mounting react components…"],
  [52, "applying tailwind styles…"],
  [74, "loading resume data…"],
  [90, "connecting · bhaktapur, nepal…"],
  [100, "boot sequence complete ✓"],
];

export function Preloader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [exit, setExit] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timers: number[] = [];
    if (prefersReducedMotion()) {
      setPct(100);
      timers.push(window.setTimeout(() => {
        setExit(true);
        onDone();
      }, 350));
      timers.push(window.setTimeout(() => setGone(true), 750));
      return () => timers.forEach((t) => window.clearTimeout(t));
    }
    let p = 0;
    const id = window.setInterval(() => {
      p += Math.random() * 13 + 5.5;
      const v = Math.min(100, Math.floor(p));
      setPct(v);
      if (v >= 100) {
        window.clearInterval(id);
        timers.push(window.setTimeout(() => {
          setExit(true);
          onDone();
        }, 430));
        timers.push(window.setTimeout(() => setGone(true), 1300));
      }
    }, 115);
    return () => {
      window.clearInterval(id);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [onDone]);

  if (gone) return null;

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[100] overflow-hidden bg-ink transition-transform duration-[750ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
        exit ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <MatrixRain />
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(93,240,138,0.18), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative grid h-full place-items-center px-6">
        <div className="w-full max-w-sm border border-line/70 bg-ink/70 p-6 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] backdrop-blur-[3px]">
          <div className="flex items-center justify-between font-mono text-[11px] text-fog">
            <span className="flex items-center gap-2">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-acid" aria-hidden="true" />
              boot sequence
            </span>
            <span className="text-acid">{pct}%</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            KHUSBU <span className="text-acid">JAYSWAL</span>
            <span className="caret" aria-hidden="true" />
          </h1>

          <div className="mt-6 h-1 w-full overflow-hidden bg-line">
            <div
              className="h-full bg-acid shadow-[0_0_14px_rgba(93,240,138,0.8)] transition-[width] duration-150 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="mt-5 space-y-1.5 font-mono text-[11px]">
            {STAGES.map(([n, label]) => (
              <p
                key={label}
                className={`flex items-center gap-2.5 transition-opacity duration-300 ${
                  pct >= n ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className={pct >= n ? "text-acid" : "text-line"}>{pct >= n ? "✓" : "·"}</span>
                <span className="text-fog">{label}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-fog/60">
        team lead · frontend · nepal
      </p>
    </div>
  );
}
