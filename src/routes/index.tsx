import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Briefcase,
  CircleStop,
  Cog,
  Cpu,
  Frame,
  Gauge,
  Menu,
  RotateCw,
  Wind,
  Wrench,
  X,
  Instagram,
  Mail,
  MapPin,
  ArrowRight,
  Trophy,
  Users,
  Calendar,
} from "lucide-react";

import heroAction from "../assets/hero-baja-action.jpg";
import workshop from "../assets/baja-workshop.jpg";
import teamPhoto from "../assets/baja-team.jpg";
import raceMud from "../assets/baja-race-mud.jpg";

const LOGO_WORDMARK = "/site-assets/e365c56a2dd9816d.png";
const SNAKE_HEAD = "/site-assets/f637290f1c60648f.png";
const SNAKE_LOGO = "/site-assets/01abeb95a00df169.png";
const CAR_RENDER = "/site-assets/830cb5d318c5c0c1.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reptiles Baja PUC-Rio — Engenharia em velocidade" },
      {
        name: "description",
        content:
          "A Reptiles é a equipe de Baja SAE da PUC-Rio: engenharia, gestão e trabalho em equipe construindo protótipos off-road para as competições Baja SAE.",
      },
      { property: "og:title", content: "Reptiles Baja PUC-Rio — Engenharia em velocidade" },
      {
        property: "og:description",
        content:
          "Conheça a equipe universitária de Baja SAE da PUC-Rio: história, subsistemas, protótipos, competições e processo seletivo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Subsistemas", href: "#subsistemas" },
  { label: "Competições", href: "#competicoes" },
  { label: "Memórias", href: "#memorias" },
  { label: "Processo seletivo", href: "#processo-seletivo" },
  { label: "Contato", href: "#contato" },
];

const SUBSISTEMAS = [
  { icon: Cog, name: "Powertrain", desc: "Motor, transmissão CVT e powertrain: a força que leva o protótipo adiante." },
  { icon: Gauge, name: "Suspensão", desc: "Geometria, amortecedores e curso para encarar qualquer terreno." },
  { icon: Frame, name: "Chassi", desc: "Estrutura tubular projetada, simulada e soldada pela equipe." },
  { icon: CircleStop, name: "Freios", desc: "Sistema de frenagem dimensionado para segurança e performance." },
  { icon: RotateCw, name: "Direção", desc: "Precisão e resposta para o piloto dominar a pista." },
  { icon: Cpu, name: "Eletrônica", desc: "Instrumentação, aquisição de dados e telemetria do protótipo." },
  { icon: Wind, name: "Aerodinâmica", desc: "Carenam e escoamento: eficiência também é aerodinâmica." },
  { icon: Briefcase, name: "Gestão", desc: "Marketing, patrocínios, logística e a organização que sustenta tudo." },
];

const INTEGRANTES = [
  { initials: "MC", name: "Marina Castro", role: "Capitã", area: "Gestão" },
  { initials: "RA", name: "Rafael Almeida", role: "Líder técnico", area: "Powertrain" },
  { initials: "JS", name: "Júlia Santos", role: "Projetista", area: "Chassi" },
  { initials: "LP", name: "Lucas Pereira", role: "Piloto e projetista", area: "Suspensão" },
  { initials: "BT", name: "Beatriz Teixeira", role: "Analista", area: "Eletrônica" },
  { initials: "GM", name: "Gabriel Moreira", role: "Projetista", area: "Freios" },
];

const COMPETICOES = [
  { year: "2025", event: "Baja SAE Brasil — Etapa Nacional", result: "Enduro completo · Top 10 geral" },
  { year: "2024", event: "Baja SAE Brasil — Etapa Nacional", result: "Destaque em prova de tração" },
  { year: "2023", event: "Baja SAE Brasil — Etapa Nacional", result: "Melhor resultado histórico no enduro" },
  { year: "2022", event: "Baja SAE Brasil — Etapa Nacional", result: "Retorno às pistas no pós-pandemia" },
];

const GALERIA = [
  { src: raceMud, year: "2025", title: "Enduro — Baja SAE Brasil 2025" },
  { src: heroAction, year: "2025", title: "Treino de pista — Ciclo 2025" },
  { src: teamPhoto, year: "2024", title: "Equipe completa — Baja SAE 2024" },
  { src: workshop, year: "2023", title: "Semana de fabricação — Oficina 2023" },
];

const DEPOIMENTOS = [
  {
    name: "Ana Beatriz Rocha",
    role: "Ex-capitã · Ciclo 2021–2023",
    quote:
      "A Reptiles me ensinou mais do que qualquer disciplina: projetar, falhar, reconstruir e comemorar em equipe. Levo isso para a vida inteira.",
  },
  {
    name: "Pedro Henrique Luz",
    role: "Ex-líder de Powertrain · Ciclo 2019–2022",
    quote:
      "Ver o carro que você projetou cruzando a linha de chegada do enduro é uma sensação que não tem comparação. A equipe vira família.",
  },
  {
    name: "Camila Duarte",
    role: "Ex-integrante de Gestão · Ciclo 2020–2022",
    quote:
      "Entrei sem saber nada de carros e descobri que gestão, patrocínio e organização são tão decisivos quanto o motor. Foi minha melhor escola.",
  },
];

const PATROCINADORES = ["PUC-Rio", "Rio Ave", "TecnoParque", "MetalMax", "AutoPeças Sul", "LubriBrasil"];

const PROCESSO_ETAPAS = [
  { num: "01", title: "Inscrição", desc: "Preencha o formulário de inscrição quando abrirem as vagas do ciclo." },
  { num: "02", title: "Dinâmica em grupo", desc: "Um desafio coletivo para conhecermos como você trabalha em equipe." },
  { num: "03", title: "Entrevista", desc: "Uma conversa com os líderes dos subsistemas do seu interesse." },
  { num: "04", title: "Boas-vindas", desc: "Integração, treinamento e mão na massa desde a primeira semana." },
];

const PRODUTOS = [
  { name: "Camiseta Reptiles 2025", price: "R$ 79,90", tag: "Novo" },
  { name: "Moletom Escamas", price: "R$ 189,90", tag: "Mais vendido" },
  { name: "Boné Equipe BAJA", price: "R$ 59,90", tag: "Clássico" },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        wasOpenRef.current = false;
        menuButtonRef.current?.focus();
      }
      return;
    }
    wasOpenRef.current = true;
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Reptiles Baja PUC-Rio — Início">
          <img src={SNAKE_LOGO} alt="" className="h-9 w-auto" />
          <img src={LOGO_WORDMARK} alt="Reptiles — Equipe BAJA PUC-Rio" className="h-6 w-auto brightness-0 invert" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-flame"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-cream transition-colors hover:bg-cream/10 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <>
          <div className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div
            role="dialog"
            aria-label="Menu de navegação"
            className="fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col bg-wine-deep shadow-2xl"
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <img src={SNAKE_LOGO} alt="" className="h-8 w-auto" />
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-md text-cream transition-colors hover:bg-cream/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Navegação móvel">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-cream/85 transition-colors hover:bg-cream/10 hover:text-flame"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ember">{eyebrow}</p>
      <h2 className={`font-display text-3xl font-extrabold leading-tight md:text-5xl ${dark ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroAction}
        alt="Protótipo Baja da Reptiles em competição, levantando poeira na pista"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1088}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      <img
        src={SNAKE_HEAD}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[520px] -translate-y-1/2 opacity-25 lg:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-flame/40 bg-ink/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-flame backdrop-blur-sm">
            Equipe Baja SAE · PUC-Rio
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-3xl font-display text-5xl font-black leading-[1.05] text-cream md:text-7xl">
            Engenharia que
            <span className="block bg-gradient-to-r from-flame via-ember to-wine bg-clip-text text-transparent">
              ruge na pista.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            Somos a Reptiles, equipe universitária da PUC-Rio que projeta, fabrica e compete com protótipos
            off-road nas competições Baja SAE. Engenharia, gestão e trabalho em equipe — do papel à lama.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-md bg-ember px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03] hover:bg-flame"
            >
              Conheça a Reptiles
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#subsistemas"
              className="inline-flex items-center gap-2 rounded-md border border-cream/40 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-cream backdrop-blur-sm transition-colors hover:border-flame hover:text-flame"
            >
              Conheça nossos subsistemas
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-wine">Sobre nós</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink md:text-5xl">
              Uma equipe, uma oficina, uma paixão.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Fundada por estudantes de engenharia da PUC-Rio, a Reptiles nasceu da vontade de tirar a teoria da
              sala de aula e colocá-la para atravessar lama, subir rampa e completar quatro horas de enduro.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              Cada protótipo é projetado, simulado, fabricado e testado pelos próprios integrantes — um ciclo
              completo de engenharia que forma profissionais e cria memórias para a vida.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { icon: Calendar, value: "10+", label: "anos de história" },
                { icon: Users, value: "40+", label: "integrantes ativos" },
                { icon: Trophy, value: "15+", label: "competições disputadas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="mb-2 h-5 w-5 text-ember" />
                  <p className="font-display text-3xl font-black text-wine">{stat.value}</p>
                  <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-wine" aria-hidden />
            <img
              src={workshop}
              alt="Integrantes da Reptiles fabricando o chassi do protótipo na oficina"
              loading="lazy"
              width={1280}
              height={960}
              className="relative rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Subsistemas() {
  return (
    <section id="subsistemas" className="relative overflow-hidden bg-wine-deep py-24 md:py-32">
      <img
        src={SNAKE_HEAD}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 w-[420px] opacity-10"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle dark eyebrow="Subsistemas" title="Cada área, uma peça do mesmo motor." />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SUBSISTEMAS.map((sub, i) => (
            <Reveal key={sub.name} delay={i * 60}>
              <div className="group h-full rounded-xl border border-cream/10 bg-wine/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-wine/70">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-ember/15 text-flame transition-colors group-hover:bg-ember group-hover:text-ink">
                  <sub.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-cream">{sub.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{sub.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prototipo() {
  const specs = [
    { label: "Motor", value: "Briggs & Stratton 10 hp" },
    { label: "Transmissão", value: "CVT com caixa de redução" },
    { label: "Peso", value: "≈ 190 kg" },
    { label: "Chassi", value: "Tubular em aço 1020" },
    { label: "Suspensão", value: "Duplo A dianteira / braço arrastado traseira" },
  ];

  return (
    <section id="prototipo" className="bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-wine via-wine-deep to-ink p-10">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,180,60,0.15),transparent_60%)]" aria-hidden />
            <img
              src={CAR_RENDER}
              alt="Render do protótipo atual da Reptiles"
              loading="lazy"
              className="relative w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </Reveal>
        <Reveal delay={150} className="order-1 lg:order-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ember">Protótipo atual</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-cream md:text-5xl">
              O RPT-25, nosso escamudo de corrida.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              Projetado do zero no ciclo atual, o RPT-25 carrega tudo o que aprendemos nas temporadas anteriores:
              mais leve, mais resistente e pronto para as quatro horas de enduro.
            </p>
            <dl className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
              {specs.map((spec) => (
                <div key={spec.label} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-sm font-semibold uppercase tracking-wider text-flame">{spec.label}</dt>
                  <dd className="text-right text-sm text-cream/80">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Integrantes() {
  return (
    <section id="integrantes" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Integrantes" title="As pessoas por trás das escamas." />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRANTES.map((member, i) => (
            <Reveal key={member.name} delay={i * 60}>
              <div className="flex h-full items-center gap-4 rounded-xl border border-ink/10 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ember to-wine font-display text-lg font-black text-cream">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">{member.name}</h3>
                  <p className="text-sm text-ink/60">{member.role}</p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-wine">{member.area}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Competicoes() {
  return (
    <section id="competicoes" className="relative overflow-hidden py-24 md:py-32">
      <img
        src={raceMud}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        width={1280}
        height={960}
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle dark eyebrow="Competições" title="Onde a teoria encontra a lama." />
        </Reveal>
        <div className="max-w-3xl space-y-0">
          {COMPETICOES.map((comp, i) => (
            <Reveal key={comp.year} delay={i * 80}>
              <div className="flex gap-6 border-l-2 border-ember/50 pb-10 pl-6 last:pb-0">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-flame" aria-hidden />
                  <p className="font-display text-2xl font-black text-flame">{comp.year}</p>
                  <p className="mt-1 font-semibold text-cream">{comp.event}</p>
                  <p className="mt-1 text-sm text-cream/65">{comp.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const years = ["Todos", "2025", "2024", "2023"];
  const [filter, setFilter] = useState("Todos");
  const items = GALERIA.filter((item) => filter === "Todos" || item.year === filter);

  return (
    <section id="galeria" className="bg-wine-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle dark eyebrow="Galeria" title="Registros de pista, oficina e equipe." />
        </Reveal>
        <Reveal>
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar galeria por ano">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setFilter(year)}
                aria-pressed={filter === year}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  filter === year
                    ? "bg-ember text-ink"
                    : "border border-cream/25 text-cream/70 hover:border-flame hover:text-flame"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <figure className="group relative overflow-hidden rounded-xl">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/90 to-transparent px-5 pb-4 pt-12">
                  <span className="text-sm font-medium text-cream">{item.title}</span>
                  <span className="rounded-full bg-ember px-3 py-1 text-xs font-bold text-ink">{item.year}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Memorias() {
  return (
    <section id="memorias" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Memórias" title="Quem passou, deixou marcas." />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {DEPOIMENTOS.map((depo, i) => (
            <Reveal key={depo.name} delay={i * 80}>
              <blockquote className="flex h-full flex-col rounded-xl border border-ink/10 bg-white/60 p-7">
                <span className="font-display text-5xl font-black leading-none text-ember" aria-hidden>
                  &ldquo;
                </span>
                <p className="mt-2 flex-1 leading-relaxed text-ink/75">{depo.quote}</p>
                <footer className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-display font-bold text-ink">{depo.name}</p>
                  <p className="text-sm text-wine">{depo.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Patrocinadores() {
  return (
    <section id="patrocinadores" className="border-y border-cream/10 bg-ink py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.25em] text-cream/50">
            Quem acelera com a gente
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {PATROCINADORES.map((sponsor) => (
            <span
              key={sponsor}
              className="font-display text-xl font-extrabold uppercase tracking-wide text-cream/35 transition-colors hover:text-flame"
            >
              {sponsor}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessoSeletivo() {
  return (
    <section id="processo-seletivo" className="relative overflow-hidden bg-wine py-24 md:py-32">
      <img
        src={SNAKE_HEAD}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-16 w-[460px] rotate-12 opacity-15"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-flame">Processo seletivo</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-cream md:text-5xl">
              Quer construir um carro com a gente?
            </h2>
            <p className="mt-4 text-lg text-cream/75">
              Não precisa saber nada de carros — precisa querer aprender. Abrimos vagas todos os semestres para
              todos os cursos da PUC-Rio.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESSO_ETAPAS.map((etapa, i) => (
            <Reveal key={etapa.num} delay={i * 80}>
              <div className="h-full rounded-xl bg-ink/30 p-6 backdrop-blur-sm">
                <p className="font-display text-4xl font-black text-flame/80">{etapa.num}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-cream">{etapa.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{etapa.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <a
            href="#contato"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-flame px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03]"
          >
            Quero participar
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Loja() {
  return (
    <section id="loja" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Loja" title="Vista as escamas." />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUTOS.map((produto, i) => (
            <Reveal key={produto.name} delay={i * 60}>
              <div className="group overflow-hidden rounded-xl border border-ink/10 bg-white/60">
                <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-wine to-wine-deep">
                  <img src={SNAKE_LOGO} alt="" aria-hidden className="w-32 opacity-90 transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-flame px-3 py-1 text-xs font-bold text-ink">
                    {produto.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-ink">{produto.name}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="font-display text-lg font-black text-wine">{produto.price}</p>
                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-md border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink/40"
                    >
                      Em breve
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <footer id="contato" className="bg-ink pb-10 pt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={SNAKE_LOGO} alt="" className="h-10 w-auto" />
              <img src={LOGO_WORDMARK} alt="Reptiles — Equipe BAJA PUC-Rio" className="h-7 w-auto brightness-0 invert" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Equipe universitária de Baja SAE da PUC-Rio. Engenharia, gestão e paixão por competição desde a
              primeira escama.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-flame">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-ember" />
                <a href="mailto:contato@reptilesbaja.com.br" className="transition-colors hover:text-flame">
                  contato@reptilesbaja.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-ember" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-flame">
                  @reptilesbaja
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span>
                  PUC-Rio — Rua Marquês de São Vicente, 225
                  <br />
                  Gávea, Rio de Janeiro — RJ
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-flame">Navegação</h3>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream/70 transition-colors hover:text-flame">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/40 md:flex-row">
          <p>© {new Date().getFullYear()} Reptiles Baja PUC-Rio. Todos os direitos reservados.</p>
          <p>Feito na oficina, com orgulho, na Gávea.</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-ink font-sans text-cream antialiased">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Subsistemas />
        <Prototipo />
        <Integrantes />
        <Competicoes />
        <Galeria />
        <Memorias />
        <Patrocinadores />
        <ProcessoSeletivo />
        <Loja />
      </main>
      <Contato />
    </div>
  );
}
