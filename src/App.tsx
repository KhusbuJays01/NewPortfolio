import { useCallback, useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Preloader } from "./components/Preloader";
import { About, Experience, Projects, Skills, EducationCerts, Contact } from "./components/Sections";
import { useActiveSection } from "./lib/hooks";

const NAV = [
  { id: "about", label: "about" },
  { id: "experience", label: "work" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

function Header({ active }: { active: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center px-5 md:px-8">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="text-acid">~/</span>
          <span className="text-snow transition-colors group-hover:text-acid">khusbu.jaiswal</span>
          <span className="caret" style={{ width: 7, height: 14 }} aria-hidden="true" />
        </a>

        <div className="ml-auto flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex" aria-label="Sections">
            {NAV.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`font-mono text-xs tracking-wide transition-colors duration-200 ${
                  active === l.id ? "text-acid" : "text-fog hover:text-snow"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={`mailto:khj98047@gmail.com`}
            className="hidden items-center gap-2 border border-acid/50 px-3.5 py-1.5 font-mono text-xs text-acid transition-all duration-300 hover:bg-acid hover:text-ink sm:flex"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            hire me
          </a>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);
  const active = useActiveSection(["top", ...NAV.map((n) => n.id)], ready);

  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <div className="min-h-screen bg-ink font-body text-snow antialiased">
      <div className="noise" aria-hidden="true" />
      {/* ambient full-page background (revealed after the loader) */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="bg-grid-page absolute inset-0" />
        <div
          className="drift absolute -left-40 top-[20%] h-[26rem] w-[26rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(closest-side, rgba(93,240,138,0.07), transparent 70%)",
            animationDuration: "19s",
          }}
        />
        <div
          className="drift absolute -right-40 top-[55%] h-[26rem] w-[26rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(closest-side, rgba(255,180,84,0.06), transparent 70%)",
            animationDuration: "24s",
            animationDelay: "-9s",
          }}
        />
        <div
          className="drift absolute left-1/3 top-[82%] h-80 w-80 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(closest-side, rgba(93,240,138,0.05), transparent 70%)",
            animationDuration: "27s",
            animationDelay: "-15s",
          }}
        />
      </div>
      <Preloader onDone={onDone} />
      {ready && (
        <>
          <Header active={active} />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <EducationCerts />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}
