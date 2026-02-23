import Section from "@/components/Section";
import Nav from "@/components/Nav";

const skills = [
  { k: "Linguagens", v: "Java • Python • C • Assembly • BASIC • Clipper • Ruby • Go" },
  { k: "Bancos de Dados", v: "PostgreSQL • DB2 • SQL Server • MySQL" },
  { k: "Governança & Privacidade", v: "SGSI (ISO/IEC 27001) • LGPD (Encarregado/DPO) • PCI (controles) • Gestão de risco e terceiros" },
  { k: "Detecção & Resposta", v: "SOC • SIEM (ELK) • EDR/XDR (integrações) • SOAR (fluxos) • DFIR • Threat Intel • Playbooks" },
  { k: "Vulnerabilidades", v: "RBVM • Gestão de vulnerabilidades • Pentest • Purple Team • Bug Bounty" },
  { k: "Cloud & Arquitetura", v: "Híbrido/Multi-cloud • AWS/Azure/GCP • Hardening • WAF/Firewall • Segmentação • IDS/IPS" },
  { k: "Proteção de Dados", v: "Data Discovery • Data Classification • Tokenização/Mascaramento • DLP • Controles anti-exfiltração" },
  { k: "Baixo nível", v: "Registradores • Memória alta/baixa • Stack/Heap • Debug/Tracing • Análise de binários (ética)" },
];
const knowledgeBars = [
  { label: "Governança, SGSI e Compliance", value: 95, note: "ISO 27001 • LGPD • políticas • auditoria" },
  { label: "SOC / SIEM / Engenharia de Detecções", value: 92, note: "ELK • correlação • tuning • playbooks" },
  { label: "Gestão de Vulnerabilidades / RBVM", value: 94, note: "priorização por risco • backlog • SLAs" },
  { label: "Proteção de Dados (DLP / classificação)", value: 90, note: "discovery • classification • tokenização" },
  { label: "Cloud Security / Arquitetura", value: 86, note: "AWS • Azure • GCP • hardening" },
  { label: "Pentest / Segurança Ofensiva", value: 85, note: "validação técnica • purple team • bug bounty" },
  { label: "Baixo nível / debugging / registradores", value: 82, note: "stack/heap • tracing • dumps" },
  { label: "Liderança técnica e execução", value: 96, note: "estratégia + hands-on + resultado" },
];

const radarAxes = [
  { name: "Governança", v: 95 },
  { name: "RBVM", v: 94 },
  { name: "SOC/SIEM", v: 92 },
  { name: "Dados", v: 90 },
  { name: "Cloud", v: 86 },
  { name: "Low-level", v: 82 },
];

const compareAreas = [
  {
    area: "Linguagens",
    desc: "Desenvolvimento e automação (engenharia + segurança)",
    items: [
      { name: "Java", v: 86, tone: "accent" as const },
      { name: "Python", v: 90, tone: "teal" as const },
      { name: "C / Assembly", v: 82, tone: "amber" as const },
    ],
  },
  {
    area: "Bancos de Dados",
    desc: "Consultas, auditoria, troubleshooting e suporte a investigações",
    items: [
      { name: "PostgreSQL", v: 86, tone: "accent" as const },
      { name: "DB2", v: 78, tone: "teal" as const },
      { name: "SQL Server/MySQL", v: 82, tone: "amber" as const },
    ],
  },
  {
    area: "Conhecimento técnico",
    desc: "Segurança aplicada, operação, arquitetura e baixo nível",
    items: [
      { name: "SOC/SIEM", v: 92, tone: "accent" as const },
      { name: "RBVM", v: 94, tone: "teal" as const },
      { name: "Low-level", v: 82, tone: "amber" as const },
    ],
  },
  {
    area: "Cloud & Infra",
    desc: "Segurança em ambientes híbridos/multi-cloud e controles de perímetro",
    items: [
      { name: "Cloud", v: 86, tone: "accent" as const },
      { name: "Perímetro", v: 84, tone: "teal" as const },
      { name: "Hardening", v: 88, tone: "amber" as const },
    ],
  },
];

function toneClass(tone: "accent" | "teal" | "amber") {
  if (tone === "teal") return "teal";
  if (tone === "amber") return "amber";
  return "";
}

function polarPoint(index: number, total: number, value: number, radius = 110) {
  const angle = (-90 + (360 / total) * index) * Math.PI / 180;
  const r = (value / 100) * radius;
  const x = 125 + Math.cos(angle) * r;
  const y = 125 + Math.sin(angle) * r;
  return `${x},${y}`;
}

export default function Page() {
  return (
    <main className="container">
      <Nav />
<header className="hero" style={{ position: "relative" }}>
        <div className="heroBanner" aria-hidden="true" />
<div className="heroTop">
  <div className="avatarWrap">
    <div className="avatarFrame" aria-label="Foto do Omar">
      <img className="avatarImg" src="/omar.png" alt="Omar Passos" />
    </div>
  </div>

  <div className="heroContent">
        <div className="pill" style={{ marginBottom: 12 }}>
          <span className="pillDot" aria-hidden="true" />
          <span style={{ color: "rgba(255,255,255,0.86)", fontSize: 13 }}>cyberARMOR Identity</span>
          <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>•</span>
          <span style={{ color: "rgba(255,255,255,0.76)", fontSize: 13 }}>
            Head de Segurança / CISO • Arquiteto de Segurança • Proteção de Dados • SOC/SIEM • Criador do cyberARMOR
          </span>
        </div>

        <h1 className="h1">Omar Passos</h1>

<div className="brandLogoRow" aria-label="Marca cyberARMOR">
  <a href="https://cyberarmor.app" target="_blank" rel="noreferrer" aria-label="Abrir site cyberARMOR">
            <img className="brandLogo" src="/cyberarmor-logo.png" alt="cyberARMOR" />
          </a>
  <div className="small">Creator • Solution cyberARMOR</div>
</div>

<div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
  <a className="linkBtn" href="mailto:omar.ctba@gmail.com">
    <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--teal)" }} aria-hidden="true" />
    <span>Falar por e-mail</span>
  </a>
  <a className="linkBtn" href="/OmarPassos_CV.pdf" target="_blank" rel="noreferrer">
    <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--amber)" }} aria-hidden="true" />
    <span>Baixar CV (PDF)</span>
  </a>
</div>

        <p className="sub">
          Profissional com <b>15+ anos</b> em <b>Segurança da Informação</b> e <b>Proteção de Dados</b>, combinando atuação
          <b> estratégica</b> e <b>hands-on</b> em <b>SGSI (ISO/IEC 27001)</b>, <b>LGPD (Encarregado/DPO)</b>, <b>SOC</b>,
          <b> SIEM/EDR/XDR</b>, <b>RBVM</b> e <b>DFIR</b> em ambientes <b>híbridos/multi-cloud (AWS/Azure/GCP)</b>.
          Minha especialidade é transformar requisitos regulatórios e risco em controles técnicos executáveis — e operar
          segurança com métricas, automação e impacto.
        </p>

        <div className="grid">
          <div className="card" style={{ marginTop: 14 }}>
            <h2 className="h2">Resumo executivo</h2>
            <p className="p">
              Eu opero segurança como <b>programa</b> (governança, processos, risco e auditoria) e como <b>engenharia</b>
              (detecções, automação, arquitetura e resposta). Tenho histórico forte em <b>proteção de dados</b> no ciclo
              completo — <i>data discovery</i>, classificação, tokenização/mascaramento e DLP — integrando com SIEM e
              pipelines de resposta para mitigar exfiltração em cloud e SaaS.
            </p>

            <div className="hr" />

            <ul className="list">
              <li><b>Segurança orientada a risco:</b> RBVM + contexto do ativo + exposição real para priorizar remediação.</li>
              <li><b>Detecção e resposta:</b> engenharia de detecções, playbooks e redução de MTTR.</li>
              <li><b>Proteção de dados:</b> controles práticos conectando LGPD/PCI à implementação técnica.</li>
            </ul>
          </div>

          <div className="card" style={{ marginTop: 14 }}>
            <h2 className="h2">Contato rápido</h2>
            <div className="kv">
              <div>
                <b>E-mail</b>
                <span><a href="mailto:omar.ctba@gmail.com">omar.ctba@gmail.com</a></span>
              </div>
              <div>
                <b>Site cyberARMOR</b>
                <span>
                  <a href="https://cyberarmor.app" target="_blank" rel="noreferrer">
                    cyberarmor.app
                  </a>
                </span>
              </div>
              <div>
                <b>Local</b>
                <span>Curitiba, PR • Brasil</span>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </header>

<section className="card" style={{ marginTop: 14 }}>
  <div className="sectionHeader">
    <h2 className="h2" style={{ marginBottom: 0 }}>Visão executiva do perfil</h2>
    <span className="sectionTag">Perfil técnico + estratégico</span>
  </div>
  <p className="p">
    Resumo visual das principais frentes de atuação e profundidade técnica, pensado para leitura rápida de recrutadores e líderes.
  </p>
  <div className="hr" />
  <div className="statsGrid">
    <div className="statCard">
      <div className="statLabel">Experiência em segurança</div>
      <div className="statValue">15+ anos</div>
    </div>
    <div className="statCard">
      <div className="statLabel">Foco principal</div>
      <div className="statValue">RBVM + SOC</div>
    </div>
    <div className="statCard">
      <div className="statLabel">Perfil de atuação</div>
      <div className="statValue">CISO Hands-on</div>
    </div>
    <div className="statCard">
      <div className="statLabel">Produto autoral</div>
      <div className="statValue">cyberARMOR</div>
    </div>
  </div>
</section>

<section className="card">
  <div className="sectionHeader">
    <h2 className="h2" style={{ marginBottom: 0 }}>Gráficos de conhecimentos</h2>
    <span className="sectionTag">Autoavaliação técnica e executiva</span>
  </div>
  <p className="p">
    Leitura visual por áreas de conhecimento (escala relativa de domínio e experiência prática).
  </p>
  <div className="hr" />
  <div className="chartsGrid">
    <div className="radarMock">
      <div className="radarCenter">
        <div className="ring r4" />
        <div className="ring r3" />
        <div className="ring r2" />
        <div className="ring r1" />
        <div className="axis ax0" />
        <div className="axis ax1" />
        <div className="axis ax2" />
        <div className="axis ax3" />
        <div className="axis ax4" />
        <div className="axis ax5" />
      </div>

      <div className="radarPoly" aria-label="Gráfico radar de conhecimentos">
        <svg viewBox="0 0 250 250" role="img">
          <polygon
            points={radarAxes.map((a, i) => polarPoint(i, radarAxes.length, a.v)).join(" ")}
            fill="rgba(79,140,255,0.20)"
            stroke="rgba(79,140,255,0.85)"
            strokeWidth="2"
          />
          {radarAxes.map((a, i) => {
            const [x, y] = polarPoint(i, radarAxes.length, a.v).split(",");
            return <circle key={a.name} cx={x} cy={y} r="3.5" fill="rgba(30,167,163,1)" />;
          })}
        </svg>
      </div>

      <div className="radarLegend">
        {radarAxes.map((a, idx) => (
          <div className="legendItem" key={a.name}>
            <span className="legendSwatch" style={{ background: idx % 2 ? "var(--teal)" : "var(--accent)" }} />
            {a.name}: <b style={{ color: "var(--text)" }}>{a.v}%</b>
          </div>
        ))}
      </div>
    </div>

    <div className="progressList">
      {knowledgeBars.map((item, idx) => (
        <div className="progressItem" key={item.label}>
          <div className="progressTop">
            <b>{item.label}</b>
            <span>{item.value}%</span>
          </div>
          <div className="track" aria-hidden="true">
            <div
              className={`fill ${idx % 3 === 2 ? "amber" : ""}`}
              style={{ width: `${item.value}%` }}
            />
          </div>
          <div className="small" style={{ marginTop: 8 }}>{item.note}</div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="card">
  <div className="sectionHeader">
    <h2 className="h2" style={{ marginBottom: 0 }}>Comparativo técnico</h2>
    <span className="sectionTag">Linguagens • Bancos • Núcleo técnico</span>
  </div>
  <p className="p">
    Comparação visual das principais áreas técnicas. Percentuais são relativos (para leitura rápida) e podem ser ajustados facilmente.
  </p>
  <div className="hr" />

  <div className="compareGrid">
    {compareAreas.map((group) => (
      <div className="compareCard" key={group.area}>
        <div className="sectionHeader">
          <h3 className="certGroupTitle" style={{ margin: 0 }}>{group.area}</h3>
          <span className="sectionTag">Comparação</span>
        </div>
        <div className="small">{group.desc}</div>

        <div style={{ marginTop: 10 }}>
          <div className="compareRow">
            <div className="compareLabel">
              <b>Itens</b>
              <span></span>
            </div>
            <div className="barStack" aria-label={`Barras comparativas de ${group.area}`}>
              {group.items.map((it) => (
                <div className="stackLine" key={it.name}>
                  <span>{it.name}</span>
                  <div className="stackTrack" aria-hidden="true">
                    <div className={`stackFill ${toneClass(it.tone)}`} style={{ width: `${it.v}%` }} />
                  </div>
                  <b>{it.v}%</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      <div style={{ display: "grid", gap: 14, marginTop: 14 }}>
        <Section id="perfil" title="Perfil (explicado e orientado a recrutador)">
          <p className="p">
            Minha atuação é voltada a <b>reduzir risco real</b> e <b>aumentar resiliência</b> sem travar o negócio.
            Eu trabalho na interseção entre <b>produto</b>, <b>dados</b> e <b>infra</b>, traduzindo requisitos de
            conformidade (LGPD/PCI) em controles técnicos e operações de segurança escaláveis.
          </p>

          <div className="hr" />

          <ul className="list">
            <li><b>Governança e auditoria:</b> SGSI, políticas, matriz de controles, evidências e gestão de terceiros.</li>
            <li><b>Proteção de dados:</b> discovery/classification + tokenização/mascaramento + DLP com foco anti-exfiltração.</li>
            <li><b>SOC e detecção:</b> correlação, dashboards, tuning e playbooks para reduzir ruído e acelerar resposta.</li>
            <li><b>Vulnerabilidades:</b> RBVM orientado a impacto, explorabilidade e contexto do ativo.</li>
          </ul>
        </Section>

        <Section id="qualificacoes" title="Qualificações (detalhadas e com nuances técnicas)">
          <p className="p">
            Perfil híbrido (estratégia + execução) com base técnica profunda. Além da liderança e governança, atuo
            diretamente com engenharia de detecções, automação, análise técnica e arquitetura de controles.
          </p>

          <div className="hr" />

          <ul className="list">
            <li>
              <b>SGSI / ISO 27001 + LGPD (DPO):</b> políticas, processos, gestão de risco, governança de terceiros e suporte
              a auditorias; conversão de requisitos legais em controles técnicos (incluindo DPIA/RIPD quando aplicável).
            </li>
            <li>
              <b>SOC, SIEM e engenharia de detecções:</b> desenho/operação de SOC, centralização de alertas, criação de
              correlações, dashboards e playbooks; redução de MTTR e melhoria de qualidade de detecção (menos falso positivo,
              mais contexto).
            </li>
            <li>
              <b>Proteção de dados (na prática):</b> data discovery/classification + tokenização/mascaramento + DLP integrados
              a SIEM e resposta, com foco em reduzir risco de exfiltração em cloud e SaaS.
            </li>
            <li>
              <b>RBVM e gestão de vulnerabilidades:</b> priorização por risco (impacto, explorabilidade e exposição), integração
              com remediação e TI, governança do backlog e SLAs de correção.
            </li>
            <li>
              <b>Low-level / registradores e memória alta/baixa:</b> experiência com depuração e análise de execução em baixo nível.
              Nuances que domino: interpretação do estado de CPU (registradores/flags), rastreio de fluxo (IP/PC),
              análise de stack/heap, ponteiros e calling conventions. Isso acelera troubleshooting, análise de crash/dumps
              e investigações técnicas.
            </li>
            <li>
              <b>Engenharia reversa (ética):</b> análise de binários para auditoria, interoperabilidade, pesquisa de segurança e
              validação de integridade, criando PoCs e ferramentas internas para acelerar análises e reduzir risco.
            </li>
            <li>
              <b>Dev + Dados:</b> experiência com Java, Python, C, Assembly, BASIC, Clipper (e Ruby/Go no cyberARMOR) e bancos
              PostgreSQL/DB2/SQL Server/MySQL para consultas, auditoria e suporte a investigações.
            </li>
          </ul>

          <div className="hr" />

          <div className="kv">
            {skills.map((s) => (
              <div key={s.k}>
                <b>{s.k}</b>
                <span>{s.v}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="cyberarmor" title="cyberARMOR (produto, impacto e link)">
          <p className="p">
            O <b>cyberARMOR</b> é a solução que idealizei e liderei para <b>análise automatizada de vulnerabilidades</b> e
            <b> pentest</b>, com automações em <b>Python/Ruby/Go</b>. O objetivo é transformar volume de achados em decisão prática:
            <b> o que corrigir primeiro</b>, com contexto e impacto.
          </p>

          <div className="hr" />

          <ul className="list">
            <li><b>Impacto reportado:</b> redução do tempo médio de triagem em <b>~60%</b> via automação e padronização.</li>
            <li><b>Visão executiva:</b> traduz achados técnicos em risco, prioridade e recomendação.</li>
            <li><b>RBVM na prática:</b> priorização orientada a contexto do ativo, exposição e explorabilidade.</li>
            <li><b>Integração:</b> facilita conexão com processos de remediação e governança do backlog.</li>
          </ul>

          <div className="hr" />

          <p className="p">
            Acesse:{" "}
            <a className="linkBtn" href="https://cyberarmor.app" target="_blank" rel="noreferrer">
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--amber)" }} aria-hidden="true" />
              <span>cyberarmor.app</span>
            </a>
          </p>
        </Section>

        <Section id="impacto" title="Resultados & Impacto (orientado a negócio)">
  <p className="p">
    Eu priorizo entregas mensuráveis: eficiência operacional, redução de risco e aumento de maturidade. Abaixo, alguns
    exemplos de impactos típicos das iniciativas que lidero e executo.
  </p>

  <div className="hr" />

  <div className="statsGrid">
    <div className="statCard">
      <div className="statLabel">Triagem de achados</div>
      <div className="statValue">~60%</div>
      <div className="small" style={{ marginTop: 6 }}>Redução de tempo via automação e padronização (cyberARMOR)</div>
    </div>
    <div className="statCard">
      <div className="statLabel">Backlog crítico</div>
      <div className="statValue">~45%</div>
      <div className="small" style={{ marginTop: 6 }}>Redução com RBVM, SLAs e governança de remediação</div>
    </div>
    <div className="statCard">
      <div className="statLabel">MTTR</div>
      <div className="statValue">↓</div>
      <div className="small" style={{ marginTop: 6 }}>Playbooks, detecções e resposta coordenada</div>
    </div>
    <div className="statCard">
      <div className="statLabel">Maturidade</div>
      <div className="statValue">↑</div>
      <div className="small" style={{ marginTop: 6 }}>Processo + engenharia + métricas contínuas</div>
    </div>
  </div>

  <div className="hr" />

  <ul className="list">
    <li><b>RBVM com contexto:</b> risco real (exposição + impacto) acima de “volume de CVEs”.</li>
    <li><b>Detecção com qualidade:</b> menos ruído e mais contexto para reduzir fadiga do SOC.</li>
    <li><b>Proteção de dados aplicada:</b> discovery/classification + DLP + SIEM para mitigar exfiltração.</li>
    <li><b>Automação pragmática:</b> scripts e integrações que destravam velocidade sem perder controle.</li>
  </ul>
</Section>

        <Section id="experiencia" title="Experiência (com atividades e atribuições)">
          <ul className="list">
            <li>
              <b>Head of Cyber Security — cyberARMOR (jul/2023 – presente)</b>
              <div className="small" style={{ marginTop: 6 }}>
                • Idealizei e liderei o cyberARMOR (análise de vulnerabilidades e pentest automatizado), reduzindo o tempo
                médio de triagem em <b>~60%</b> via automações em Python/Ruby/Go.<br />
                • Projetei e operacionalizei controles de proteção de dados (discovery/classification/tokenização/mascaramento/DLP)
                integrados a SIEM (ELK) e pipelines de resposta, suportando detecção de exfiltração em cloud.<br />
                • Defini roadmap de segurança corporativa e políticas alinhadas a ISO/IEC 27001 e LGPD; apoio em auditorias internas/externas.
              </div>
            </li>

            <li style={{ marginTop: 12 }}>
              <b>Especialista em Segurança da Informação — meutudo. (dez/2022 – mai/2024)</b>
              <div className="small" style={{ marginTop: 6 }}>
                • Implantei e evoluí SGSI e programa de RBVM, integrando vulnerabilidades com remediação/TI e reduzindo backlog crítico em <b>45%</b>.<br />
                • Desenvolvi detecções, playbooks e dashboards SIEM (ELK) e executei operações Purple Team / Pentest para elevar maturidade de detecção.<br />
                • Conduzi investigações DFIR focadas em exfiltração e contenção; implementei awareness com gamificação e controles de terceiros para LGPD.
              </div>
            </li>

            <li style={{ marginTop: 12 }}>
              <b>CISO — Exago Innovation (jan/2022 – nov/2022)</b>
              <div className="small" style={{ marginTop: 6 }}>
                • Liderança na implementação do SGSI (ISO/IEC 27001): políticas, matriz de controles, gestão de riscos e governança de terceiros.<br />
                • Traduzi requisitos LGPD em controles técnicos e processos (incluindo DPIA/RIPD quando aplicável), políticas DLP e validação de segurança de aplicações.<br />
                • Suporte executivo em auditorias e interface com stakeholders externos.
              </div>
            </li>

            <li style={{ marginTop: 12 }}>
              <b>Coordenador Cyber Defense Center — Task TI (dez/2021 – jul/2022)</b>
              <div className="small" style={{ marginTop: 6 }}>
                • Defini estratégia e operação do SOC: seleção/integração de ferramentas (SIEM, IVM, IDR, ASM, DFIR, MDR) e centralização de alertas.<br />
                • Coordenei resposta a incidentes críticos, desenvolvimento de playbooks e redução do MTTR em incidentes média/alta severidade.
              </div>
            </li>

            <li style={{ marginTop: 12 }}>
              <b>Analista de Segurança da Informação / Pentester — Rentcars.com (dez/2019 – ago/2020)</b>
              <div className="small" style={{ marginTop: 6 }}>
                • Pentest, gestão de vulnerabilidades e investigação de incidentes relacionados à integridade e exfiltração de dados; atuação em bug bounty.<br />
                • Colaboração em iniciativas internas de conformidade com LGPD.
              </div>
            </li>
          </ul>
        </Section>

        <Section id="certificados" title="Certificados (destaque visual e trilhas de conhecimento)">
  <p className="p">
    Certificações e cursos organizados para destacar amplitude técnica e capacidade de liderança em segurança,
    privacidade, ofensiva, redes, forense e gestão.
  </p>

  <div className="hr" />

  <div className="sectionHeader">
    <h3 className="certGroupTitle" style={{ margin: 0 }}>Certificações em destaque</h3>
    <span className="sectionTag">Leitura rápida para recrutadores</span>
  </div>

  <div className="certCardsGrid">
    <div className="certCard">
      <div className="certChip"><span className="legendSwatch" style={{ background: "var(--accent)" }} /> Governança</div>
      <div className="certCardTitle">CISM — Certified Information Security Manager</div>
      <div className="certCardMeta">ISACA / trilha de gestão de segurança</div>
      <div className="certCardDesc">Fortalece competências de gestão de programa de segurança, risco, governança e alinhamento com negócio.</div>
    </div>

    <div className="certCard">
      <div className="certChip"><span className="legendSwatch" style={{ background: "var(--teal)" }} /> Compliance</div>
      <div className="certCardTitle">ISO/IEC 27001 Foundation Essentials</div>
      <div className="certCardMeta">PMG Academy / SGSI</div>
      <div className="certCardDesc">Base sólida para estruturar SGSI, controles, políticas, evidências e melhoria contínua.</div>
    </div>

    <div className="certCard">
      <div className="certChip"><span className="legendSwatch" style={{ background: "var(--amber)" }} /> Privacidade</div>
      <div className="certCardTitle">EXIN PDPE Essentials — LGPD</div>
      <div className="certCardMeta">EXIN / proteção de dados pessoais</div>
      <div className="certCardDesc">Apoia implementação prática de privacidade, governança de dados e adequação à LGPD.</div>
    </div>

    <div className="certCard">
      <div className="certChip"><span className="legendSwatch" style={{ background: "var(--accent)" }} /> Ofensiva</div>
      <div className="certCardTitle">Practical Ethical Hacking</div>
      <div className="certCardMeta">Udemy / pentest prático</div>
      <div className="certCardDesc">Reforça validação técnica de vulnerabilidades, exploração controlada e visão ofensiva aplicada à defesa.</div>
    </div>

    <div className="certCard">
      <div className="certChip"><span className="legendSwatch" style={{ background: "var(--teal)" }} /> Forense & IR</div>
      <div className="certCardTitle">SANS FOR508 — Advanced Computer Forensics & Incident Response</div>
      <div className="certCardMeta">SANS Institute / DFIR</div>
      <div className="certCardDesc">Capacitação avançada para investigação forense, resposta a incidentes e análise de artefatos.</div>
    </div>

    <div className="certCard">
      <div className="certChip"><span className="legendSwatch" style={{ background: "var(--amber)" }} /> Redes & Infra</div>
      <div className="certCardTitle">CompTIA Network+ / trilha de redes</div>
      <div className="certCardMeta">Fundamentos de protocolos, arquitetura e troubleshooting</div>
      <div className="certCardDesc">Suporte técnico para segurança de perímetro, segmentação e diagnóstico de redes corporativas.</div>
    </div>
  </div>

  <div className="hr" />

  <h3 className="certGroupTitle">Lista completa por trilhas</h3>

  <h4 className="certGroupTitle" style={{ fontSize: 15 }}>Governança, Gestão e Compliance</h4>
  <ul className="list">
    <li><b>CIS Controls (ENAP) — 2024:</b> priorização prática de controles de segurança para redução rápida de risco.</li>
    <li><b>Project Management Professional (PMP) Exam Preparation (CIP Cyber) — 2019:</b> fundamentos de gestão de projetos aplicados à condução de programas e iniciativas de segurança.</li>
    <li><b>ISACA CISA Certification Training Program (CIP Cyber) — 2019:</b> base de auditoria de sistemas e controles, útil para compliance e avaliação de processos.</li>
    <li><b>CISSP Exam Preparation Training Course (CIP Cyber) — 2019:</b> trilha ampla de arquitetura, gestão e práticas de segurança corporativa.</li>
    <li><b>CISM - Certified Information Security Manager From ISACA (CIP Cyber) — 2019:</b> foco em gestão de segurança, risco e governança.</li>
    <li><b>CRISC (Cybrary) — 2019:</b> gestão de risco de TI e desenho de controles alinhados ao negócio.</li>
    <li><b>LGPD - Lei Geral de Proteção de Dados (ENAP) — 2019:</b> fundamentos legais e operacionais de proteção de dados no contexto brasileiro.</li>
    <li><b>EXIN PDPE Essentials: Lei Geral de Proteção de Dados LGPD (Udemy) — 2020:</b> reforço prático da LGPD para processos, controles e governança de dados pessoais.</li>
    <li><b>EXIN Information Security Management / ISO 27001 Foundation Essentials (PMG Academy) — 2020:</b> base de SGSI, controles e melhoria contínua.</li>
    <li><b>Atualização Jurídica - Direito Digital Contemporâneo (Unieducar) — 2019:</b> visão complementar de aspectos legais aplicados ao ambiente digital.</li>
  </ul>

  <div className="hr" />

  <h4 className="certGroupTitle" style={{ fontSize: 15 }}>Segurança Ofensiva, Pentest e Ethical Hacking</h4>
  <ul className="list">
    <li><b>Practical Ethical Hacking - The Complete Course (Udemy) — 2020:</b> técnicas práticas de pentest e validação de vulnerabilidades com uso responsável.</li>
    <li><b>The Complete Ethical Hacking Certification Course - CEH v10 (CIP Cyber) — 2019:</b> fundamentos e práticas de ethical hacking para avaliação de postura de segurança.</li>
    <li><b>Physical Penetration Testing (Cybrary) — 2019:</b> conceitos de segurança física e testes de intrusão em ambiente corporativo.</li>
    <li><b>Offensive Security - OSCP (Kali Linux) — referência no perfil:</b> trilha/ofensiva com foco em exploração e metodologia prática de pentest.</li>
    <li><b>Create Hidden Website Using TOR For Beginners (CIP Cyber) — 2019:</b> fundamentos de privacidade/rede TOR e conceitos de publicação em ambiente anonimizado.</li>
  </ul>

  <div className="hr" />

  <h4 className="certGroupTitle" style={{ fontSize: 15 }}>Resposta a Incidentes, Forense e Investigação</h4>
  <ul className="list">
    <li><b>Advanced Computer Forensic Analysis and Incident Response (SANS Institute FOR508) — 2012:</b> investigação forense avançada e resposta a incidentes em ambientes corporativos.</li>
    <li><b>Introdução à Criminalística (Unova Cursos) — 2019:</b> fundamentos investigativos úteis para raciocínio analítico e cadeia de evidências.</li>
  </ul>

  <div className="hr" />

  <h4 className="certGroupTitle" style={{ fontSize: 15 }}>Redes, Infraestrutura e Cloud</h4>
  <ul className="list">
    <li><b>CompTIA Network+ (Cybrary) — 2019:</b> fundamentos de redes, protocolos e troubleshooting.</li>
    <li><b>Segurança de Redes (WR Educacional) — 2019:</b> conceitos de proteção de redes, perímetro e controles básicos.</li>
    <li><b>Redes de Computadores (Prime Cursos do Brasil) — 2019:</b> base teórica/prática para arquitetura e diagnóstico de redes.</li>
    <li><b>EIGRP Training for CCNA and CCNP Candidates (CIP Cyber) — 2019:</b> roteamento e fundamentos de rede em ambientes Cisco.</li>
    <li><b>Cisco Labs Training With Advanced GNS3 Features (CIP Cyber) — 2019:</b> simulação de laboratórios e práticas avançadas em ambientes Cisco/GNS3.</li>
    <li><b>Fundamentos da Computação em Nuvem (SOFTEX) — 2019:</b> conceitos de cloud computing e arquitetura de serviços em nuvem.</li>
    <li><b>Microsoft - Segurança e Privacidade do Computador (SOFTEX) — 2019:</b> boas práticas de segurança e privacidade em estações de trabalho.</li>
  </ul>

  <div className="hr" />

  <h4 className="certGroupTitle" style={{ fontSize: 15 }}>Computação, Dados e Base Técnica</h4>
  <ul className="list">
    <li><b>CC50: Introdução à Ciência da Computação (Harvard / Fundação Estudar) — 2023:</b> fundamentos sólidos de lógica, algoritmos e pensamento computacional.</li>
    <li><b>Introdução à Ciência de Dados (Data Science Academy) — 2019:</b> noções de dados, análise e raciocínio orientado a evidências.</li>
    <li><b>Python (Udemy):</b> apoio à automação, scripts e ferramentas internas voltadas a produtividade e segurança.</li>
    <li><b>Maratona rumo a CYBER (CECyber) — 2022:</b> trilha de aceleração e consolidação de fundamentos em cibersegurança.</li>
  </ul>

  <div className="hr" />

  <p className="small">
    Observação: certificações e cursos organizados por trilha para facilitar leitura executiva e técnica.
  </p>
</Section>

        <Section id="contato" title="Contato">
          <div className="kv">
            <div>
              <b>E-mail</b>
              <span><a href="mailto:omar.ctba@gmail.com">omar.ctba@gmail.com</a></span>
            </div>
            <div>
              <b>cyberARMOR</b>
              <span>
                <a href="https://cyberarmor.app" target="_blank" rel="noreferrer">
                  cyberarmor.app
                </a>
              </span>
            </div>
          </div>
        </Section>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Omar Passos — Portfolio em Next.js (Vercel).
      </footer>
    </main>
  );
}
