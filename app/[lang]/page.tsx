import Link from "next/link";
import { notFound } from "next/navigation";
import { archives, career, dict, hasLocale, lab, production, site } from "@/lib/content";
import { Diagram } from "@/components/diagrams";
import { ThemeToggle } from "@/components/client";

// Panel colours cycle through the sign-painter palette.
const tones = ["red", "sun", "leaf", "sky", "cream"] as const;

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = dict[lang];
  const other = lang === "fr" ? "en" : "fr";
  const mail = `mailto:${site.email}`;
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `${site.url}/${lang}`,
    jobTitle: lang === "fr" ? "Développeur full-stack" : "Full-stack developer",
    description: t.meta.description,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "CG" },
    worksFor: { "@type": "Organization", name: "Akieni" },
    knowsLanguage: ["fr", "en"],
    knowsAbout: ["React", "Next.js", "Node.js", "NestJS", "Django", "PostgreSQL", "React Native"],
    sameAs: [site.github, site.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      <a className="skip" href="#travaux">{t.nav.work}</a>
      <div className="stripe" aria-hidden />

      <header className="wrap top">
        <Link href={`/${lang}`} className="brand">{site.short}</Link>
        <nav aria-label="Sections">
          <a href="#travaux">{t.nav.work}</a>
          <a href="#parcours">{t.nav.career}</a>
          <a href="#labo">{t.nav.lab}</a>
          <a href="#contact">{t.nav.contact}</a>
          <Link href={`/${other}`} hrefLang={other} aria-label={t.lang.label}>{t.lang.other}</Link>
          <ThemeToggle label={t.theme.label} light={t.theme.light} dark={t.theme.dark} />
        </nav>
      </header>

      <main className="wrap">
        {/* ---------- The shop sign ---------- */}
        <section className="sign" aria-labelledby="sign-title">
          <p className="bubble">{t.sign.bubble}</p>
          <span className="tag">{t.sign.tag}</span>
          <h1 id="sign-title">
            {t.sign.title[0]}
            <br />
            <span className="yellow">{t.sign.title[1]}</span>
          </h1>
          <ul className="menu" aria-label="Services">
            {t.sign.menu.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        <div className="under">
          <div>
            <p className="intro">{t.intro}</p>
            <div className="cta">
              <a className="btn btn-sun" href={mail}>{t.cta.mail} →</a>
              <a className="btn" href="#travaux">{t.cta.work}</a>
            </div>
          </div>
          <dl className="card">
            {Object.entries(t.card).map(([key, [label, value]]) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>
                  {key === "status" && <span className="dot" aria-hidden />}
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <dl className="figures">
          {t.figures.map(([n, label]) => (
            <div key={label}>
              <dt>{n}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>

        {/* ---------- Work ---------- */}
        <Heading id="travaux" title={t.production.title} note={t.production.note} />
        <section className="panels">
          {production.map((p, i) => (
            <article key={p.id} className={`panel tone-${tones[i % tones.length]} ${i === 0 ? "panel-lead" : ""}`}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.name}</h3>
              <p className="client">{p.client[lang]}</p>
              <p>{i === 0 ? p.body[lang] : p.headline[lang]}</p>
              <div className="panel-foot">
                <span className="small">
                  {t.production.role} {p.role[lang]} · {p.period}
                  <br />
                  {p.stack.join(" · ")}
                </span>
                <span className="chip">{p.live ? t.production.live : t.production.building}</span>
              </div>
            </article>
          ))}
        </section>

        {/* ---------- Story, career, archives ---------- */}
        <div className="three">
          <section aria-labelledby="histoire">
            <Heading id="histoire" title={t.story.title} />
            <div className="board">
              {t.story.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
          <section aria-labelledby="parcours">
            <Heading id="parcours" title={t.career.title} />
            <ol className="board list">
              {career.map((c) => (
                <li key={c.org + c.when}>
                  <span className="when">{c.when}</span>
                  <b>{c.org}</b>
                  <span>{c.role[lang]}</span>
                </li>
              ))}
            </ol>
          </section>
          <section aria-labelledby="avant">
            <Heading id="avant" title={t.archives.title} />
            <ul className="board list">
              {archives.map((a) => (
                <li key={a.name}>
                  <b>{a.name}</b>
                  <span>
                    {a.text[lang]}{" "}
                    {a.link && (
                      <a href={a.link} target="_blank" rel="noreferrer" className="ink-link">
                        {t.lab.live} ↗
                      </a>
                    )}
                  </span>
                  <span className="when">{a.role[lang]}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ---------- Menu (services) ---------- */}
        <Heading id="menu" title={t.services.title} />
        <ul className="menu-board">
          {t.services.items.map(([name, desc]) => (
            <li key={name}>
              <b>{name}</b>
              <span className="dots" aria-hidden />
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        {/* ---------- Lab ---------- */}
        <Heading id="labo" title={t.lab.title} note={t.lab.note} />
        <section className="lab">
          {lab.map((p) => (
            <article key={p.id} className="lab-item">
              <div className="plate">
                <Diagram kind={p.kind} lang={lang} />
              </div>
              <h3>
                {p.name} <span className="chip">{p.status[lang]}</span>
              </h3>
              <p>{p.text[lang]}</p>
              <p className="small">{p.stack}</p>
              <p className="links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="ink-link">
                    {t.lab.live} ↗
                  </a>
                )}
                <a href={p.code} target="_blank" rel="noreferrer" className="ink-link">
                  {t.lab.code} ↗
                </a>
              </p>
            </article>
          ))}
        </section>
      </main>

      <footer id="contact" className="foot">
        <div className="wrap">
          <p className="foot-title">{t.contact.title}</p>
          <p className="foot-text">{t.contact.text}</p>
          <a href={mail} className="foot-mail">{site.email}</a>
          <p className="links">
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </p>
          <p className="foot-small">{t.footer}</p>
        </div>
      </footer>
      <div className="stripe" aria-hidden />
    </>
  );
}

function Heading({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div className="heading">
      <h2 id={id}>
        <span>{title}</span>
      </h2>
      {note && <p>{note}</p>}
    </div>
  );
}
