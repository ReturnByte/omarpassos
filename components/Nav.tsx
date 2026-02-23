"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "perfil",
  "qualificacoes",
  "cyberarmor",
  "impacto",
  "experiencia",
  "certificados",
  "contato",
] as const;

type SectionId = typeof SECTION_IDS[number];

export default function Nav() {
  const [shrink, setShrink] = useState(false);
  const [active, setActive] = useState<SectionId>("perfil");

  useEffect(() => {
    const onScroll = () => {
      setShrink(window.scrollY > 18);

      // Scroll spy
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // 120px from top works well with the sticky nav height
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const badge = (id: SectionId, label: string) => (
    <a
      key={id}
      className={`badge ${active === id ? "badgeActive" : ""}`}
      href={`#${id}`}
    >
      {label}
    </a>
  );

  return (
    <>
      <nav className={`nav navDesktop ${shrink ? "navShrink" : ""}`}>
        {badge("perfil", "Perfil")}
        {badge("qualificacoes", "Qualificações")}
        {badge("cyberarmor", "cyberARMOR")}
        {badge("impacto", "Impacto")}
        {badge("experiencia", "Experiência")}
        {badge("certificados", "Certificados")}
        {badge("contato", "Contato")}
      </nav>

      <nav className={`nav navMobile ${shrink ? "navShrink" : ""}`} aria-label="Menu">
        <details style={{ width: "100%" }}>
          <summary className="menuSummary">
            <span className="menuIcon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            Menu <span className="menuHint">seções</span>
          </summary>

          <div className="menuPanel">
            <a className="menuLink" href="#perfil"><span>Perfil</span><span className="menuHint">sobre</span></a>
            <a className="menuLink" href="#qualificacoes"><span>Qualificações</span><span className="menuHint">skills</span></a>
            <a className="menuLink" href="#cyberarmor"><span>cyberARMOR</span><span className="menuHint">produto</span></a>
            <a className="menuLink" href="#impacto"><span>Impacto</span><span className="menuHint">resultados</span></a>
            <a className="menuLink" href="#experiencia"><span>Experiência</span><span className="menuHint">carreira</span></a>
            <a className="menuLink" href="#certificados"><span>Certificados</span><span className="menuHint">provas</span></a>
            <a className="menuLink" href="#contato"><span>Contato</span><span className="menuHint">e-mail</span></a>
          </div>
        </details>
      </nav>
    </>
  );
}
