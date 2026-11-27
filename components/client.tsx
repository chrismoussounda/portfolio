"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const THEME_EVENT = "themechange";

// Light is the default; dark only when the visitor chose it.
function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribeTheme(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
}

export function ThemeToggle({ label, light, dark }: { label: string; light: string; dark: string }) {
  const theme = useSyncExternalStore<Theme | null>(subscribeTheme, readTheme, () => null);

  function toggle() {
    const next = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <button type="button" className="chip" onClick={toggle} aria-label={label} title={label}>
      <span className="chip-dot" aria-hidden />
      <span suppressHydrationWarning>{theme === "dark" ? dark : theme === "light" ? light : "·"}</span>
    </button>
  );
}

function format(timeZone: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

export function LocalTime({ timeZone }: { timeZone: string }) {
  // The clock is client-only: the page is prerendered, so the server cannot know "now".
  const [now, setNow] = useState("--:--");
  useEffect(() => {
    const tick = () => setNow(format(timeZone));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [timeZone]);
  return (
    <time suppressHydrationWarning className="tabular">
      {now}
    </time>
  );
}
