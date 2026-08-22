import { useEffect, useRef, useState, type ReactNode } from "react";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ---------- scramble-decode text ---------- */
const GLYPHS = "!<>-_\\/[]{}=+*^?#@$%&01";

function scrambled(text: string): string {
  let out = "";
  for (const ch of text) {
    out += ch === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  }
  return out;
}

export function useScramble(text: string, start = true, tickMs = 26): string {
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setOut(text);
      return;
    }
    let frame = 0;
    setOut(scrambled(text));
    const id = window.setInterval(() => {
      frame += 1;
      const reveal = frame / 2.1;
      let next = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") {
          next += " ";
        } else if (i < reveal) {
          next += ch;
        } else {
          next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setOut(next);
      if (reveal >= text.length) {
        setOut(text);
        window.clearInterval(id);
      }
    }, tickMs);
    return () => window.clearInterval(id);
  }, [text, start, tickMs]);
  return out;
}

/* ---------- typewriter ---------- */
export function useTyped(text: string, start = true, speed = 42) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setCount(text.length);
      return;
    }
    setCount(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, start, speed]);
  return { value: text.slice(0, count), done: count >= text.length };
}

/* ---------- scroll reveal ---------- */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setVis(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVis(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, vis };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, vis } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out will-change-transform ${
        vis ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* ---------- speaking: type → hold → delete → next phrase ---------- */
export function useSpoken(phrases: string[], typeMs = 34, holdMs = 2400, deleteMs = 14) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
  useEffect(() => {
    const phrase = phrases[idx % phrases.length];
    if (prefersReducedMotion()) {
      setText(phrase);
      const id = window.setInterval(() => setIdx((v) => (v + 1) % phrases.length), holdMs + 1600);
      return () => window.clearInterval(id);
    }
    let id: number;
    if (phase === "typing") {
      let i = 0;
      id = window.setInterval(() => {
        i += 1;
        setText(phrase.slice(0, i));
        if (i >= phrase.length) {
          window.clearInterval(id);
          setPhase("holding");
        }
      }, typeMs);
    } else if (phase === "holding") {
      id = window.setTimeout(() => setPhase("deleting"), holdMs);
    } else {
      let j = phrase.length;
      id = window.setInterval(() => {
        j -= 2;
        if (j <= 0) {
          setText("");
          window.clearInterval(id);
          setIdx((v) => (v + 1) % phrases.length);
          setPhase("typing");
        } else {
          setText(phrase.slice(0, j));
        }
      }, deleteMs);
    }
    return () => {
      window.clearInterval(id);
      window.clearTimeout(id);
    };
  }, [phase, idx, phrases, typeMs, holdMs, deleteMs]);
  return { text, phase, idx: idx % phrases.length };
}

/* ---------- active section tracking ---------- */
export function useActiveSection(ids: string[], ready = true) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    if (!ready) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(","), ready]);
  return active;
}
