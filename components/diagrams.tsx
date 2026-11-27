import type { DiagramKind, Locale } from "@/lib/content";

const labels = {
  fr: {
    offline: "hors ligne",
    server: "serveur",
    merged: "fusionné",
    incident: "incident",
    debit: "client",
    credit: "marchand",
    fee: "frais",
    app: "votre app",
    lost: "callback perdu",
    again: "callback ×2",
    pay: "Payer",
    ago: "−30 j",
    now: "auj.",
  },
  en: {
    offline: "offline",
    server: "server",
    merged: "merged",
    incident: "incident",
    debit: "customer",
    credit: "merchant",
    fee: "fees",
    app: "your app",
    lost: "callback lost",
    again: "callback ×2",
    pay: "Pay",
    ago: "−30 d",
    now: "now",
  },
} satisfies Record<Locale, Record<string, string>>;

export function Diagram({ kind, lang }: { kind: DiagramKind; lang: Locale }) {
  const t = labels[lang];
  return (
    <svg className={`diagram diagram-${kind}`} viewBox="0 0 320 168" role="img" aria-hidden>
      {kind === "sync" && <Sync t={t} />}
      {kind === "uptime" && <Uptime t={t} />}
      {kind === "ledger" && <Ledger t={t} />}
      {kind === "callback" && <Callback t={t} />}
    </svg>
  );
}

type T = (typeof labels)["fr"];

function Sync({ t }: { t: T }) {
  return (
    <g>
      <text x="8" y="34" className="d-label">A</text>
      <text x="8" y="88" className="d-label">{t.server}</text>
      <text x="8" y="142" className="d-label">B</text>
      <line x1="24" y1="30" x2="312" y2="30" className="d-line" />
      <line x1="24" y1="138" x2="312" y2="138" className="d-line" />
      <line x1="72" y1="84" x2="312" y2="84" className="d-line d-strong" />
      <line x1="96" y1="30" x2="196" y2="30" className="d-line d-off" />
      <text x="112" y="20" className="d-label d-accent">{t.offline}</text>
      {[110, 140, 170].map((x, i) => (
        <circle key={x} cx={x} cy="30" r="4" className="d-dot d-queued" style={{ animationDelay: `${i * 0.25}s` }} />
      ))}
      <circle cx="150" cy="138" r="4" className="d-dot" />
      <path d="M200 30 C 220 30, 220 84, 240 84" className="d-line d-flow" />
      <path d="M150 138 C 200 138, 210 84, 240 84" className="d-line d-flow" />
      <circle cx="240" cy="84" r="7" className="d-dot d-merge" />
      <text x="254" y="76" className="d-label">{t.merged}</text>
    </g>
  );
}

function Uptime({ t }: { t: T }) {
  const bars = Array.from({ length: 30 }, (_, i) => i);
  const bad = 21;
  return (
    <g>
      <text x="8" y="28" className="d-big">99.9%</text>
      {bars.map((i) => (
        <rect
          key={i}
          x={8 + i * 10.2}
          y={i === bad ? 74 : 60}
          width="6.4"
          height={i === bad ? 66 : 80}
          rx="1.5"
          className={i === bad ? "d-bar d-bar-bad" : "d-bar"}
          style={{ animationDelay: `${i * 0.06}s` }}
        />
      ))}
      <line x1={8 + bad * 10.2 + 3.2} y1="44" x2={8 + bad * 10.2 + 3.2} y2="70" className="d-line d-accent-stroke" />
      <text x={8 + bad * 10.2 - 40} y="40" className="d-label d-accent">{t.incident}</text>
      <text x="8" y="160" className="d-label">{t.ago}</text>
      <text x="312" y="160" className="d-label" textAnchor="end">{t.now}</text>
    </g>
  );
}

function Ledger({ t }: { t: T }) {
  const rows: [string, string][] = [
    [t.debit, "−5 000"],
    [t.credit, "+4 900"],
    [t.fee, "+100"],
  ];
  return (
    <g>
      {rows.map(([name, amount], i) => (
        <g key={name} className="d-row" style={{ animationDelay: `${i * 0.35}s` }}>
          <text x="16" y={34 + i * 32} className="d-mono">{name}</text>
          <text x="304" y={34 + i * 32} className="d-mono" textAnchor="end">{amount}</text>
          <line x1="16" y1={44 + i * 32} x2="304" y2={44 + i * 32} className="d-line d-faint" />
        </g>
      ))}
      <line x1="16" y1="126" x2="304" y2="126" className="d-line d-strong" />
      <text x="16" y="152" className="d-mono d-accent">Σ</text>
      <text x="304" y="152" className="d-mono d-accent d-sum" textAnchor="end">0</text>
    </g>
  );
}

function Callback({ t }: { t: T }) {
  return (
    <g>
      <rect x="8" y="58" width="92" height="52" rx="6" className="d-box" />
      <text x="54" y="89" className="d-mono" textAnchor="middle">{t.app}</text>
      <rect x="220" y="58" width="92" height="52" rx="6" className="d-box d-box-accent" />
      <text x="266" y="89" className="d-mono" textAnchor="middle">mbongo</text>
      <line x1="100" y1="66" x2="220" y2="66" className="d-line" />
      <circle cx="100" cy="66" r="3.5" className="d-dot d-packet" />
      <path d="M220 84 L100 84" className="d-line d-off" />
      <g className="d-lost">
        <line x1="154" y1="78" x2="166" y2="90" className="d-line d-accent-stroke" />
        <line x1="166" y1="78" x2="154" y2="90" className="d-line d-accent-stroke" />
      </g>
      <text x="160" y="132" className="d-label d-accent" textAnchor="middle">{t.lost}</text>
      <path d="M220 102 L100 102" className="d-line d-faint" />
      <text x="160" y="152" className="d-label" textAnchor="middle">{t.again}</text>
      <text x="160" y="40" className="d-label" textAnchor="middle">POST /requesttopay</text>
    </g>
  );
}
