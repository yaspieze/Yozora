const svg = (inner: string, size = 24): string =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

export const ICONS = {
  discord:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.32 4.37A19.8 19.8 0 0 0 15.4 2.9a13.7 13.7 0 0 0-.62 1.28 18.3 18.3 0 0 0-5.55 0A13.7 13.7 0 0 0 8.6 2.9a19.7 19.7 0 0 0-4.92 1.47C.6 9.05-.27 13.6.16 18.1a19.9 19.9 0 0 0 6.03 3.05c.48-.66.9-1.36 1.27-2.1-.7-.26-1.37-.58-2-.96.17-.12.33-.25.49-.38a14.2 14.2 0 0 0 12.1 0c.16.13.32.26.49.38-.63.38-1.3.7-2 .96.37.74.79 1.44 1.27 2.1a19.8 19.8 0 0 0 6.03-3.05c.5-5.2-.86-9.72-3.52-13.73ZM8.02 15.33c-1.18 0-2.15-1.08-2.15-2.4 0-1.33.95-2.41 2.15-2.41 1.2 0 2.17 1.09 2.15 2.41 0 1.32-.95 2.4-2.15 2.4Zm7.96 0c-1.18 0-2.15-1.08-2.15-2.4 0-1.33.95-2.41 2.15-2.41 1.2 0 2.17 1.09 2.15 2.41 0 1.32-.95 2.4-2.15 2.4Z"/></svg>',
  bolt: svg('<path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z"/>'),
  card: svg('<rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M2.5 10h19"/>'),
  shield: svg('<path d="M12 3l7.5 3v6c0 4.5-3.2 7.7-7.5 9-4.3-1.3-7.5-4.5-7.5-9V6L12 3Z"/><path d="M9 12.2l2.1 2.1L15.4 10"/>'),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 1.8"/>'),
  search: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>'),
  menu: svg('<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>'),
  close: svg('<path d="m6 6 12 12M18 6 6 18"/>'),
  cart: svg('<path d="M3 4h2.4l2.2 11.2h9.9L19.5 7H6"/><circle cx="9.5" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/>'),
  chevron: svg('<path d="m9 6 6 6-6 6"/>'),
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  star: svg('<path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.9-5.2 2.9 1-5.9L3.5 9.8l5.9-.8L12 3.6Z"/>'),
  info: svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
  spark: svg('<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6.2 6.2l3 3M14.8 14.8l3 3M17.8 6.2l-3 3M9.2 14.8l-3 3"/>'),
};

export type IconName = keyof typeof ICONS;

/* ── آیکن‌های نوبار (سبک gamegrip: خطی، پرجزئیات، ۲۴px) ───────────────── */
const nav = (inner: string): string =>
  `<svg class="nav-ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

export const NAVICONS = {
  home: nav(
    '<path d="M4 10.6 12 4l8 6.6V19a1.4 1.4 0 0 1-1.4 1.4h-3.2v-5.6H9.6V20.4H5.4A1.4 1.4 0 0 1 4 19Z"/><path d="M8.6 9.8 12 7l3.4 2.8" stroke-opacity=".55"/>',
  ),
  products: nav(
    '<rect x="3.2" y="3.2" width="7.4" height="7.4" rx="1.8"/><rect x="13.4" y="3.2" width="7.4" height="7.4" rx="1.8"/><rect x="3.2" y="13.4" width="7.4" height="7.4" rx="1.8"/><path d="M14.6 14.6h4.8v4.8h-4.8z" stroke-opacity=".45"/>',
  ),
  prices: nav(
    '<path d="M12.6 3.4h6.4a.6.6 0 0 1 .6.6v6.4a2 2 0 0 1-.6 1.4l-7.4 7.4a2 2 0 0 1-2.8 0l-5-5a2 2 0 0 1 0-2.8l7.4-7.4a2 2 0 0 1 1.4-.6Z"/><circle cx="16.2" cy="7.4" r="1.5"/>',
  ),
  guarantee: nav(
    '<path d="M12 3.2 19 6v6c0 4.3-3 7.3-7 8.8-4-1.5-7-4.5-7-8.8V6Z"/><path d="m9 12 2 2 4-4.2" />',
  ),
  blog: nav(
    '<path d="M5 19.4 8.4 18.6 19 8a2.2 2.2 0 0 0-3.1-3.1L5.3 15.5 4.6 19Z"/><path d="m14.8 6.2 3 3M5.4 15.6l3 3" stroke-opacity=".55"/>',
  ),
  about: nav(
    '<circle cx="12" cy="12" r="8.6"/><path d="M12 10.8v5.4"/><circle cx="12" cy="8" r=".9" fill="currentColor" stroke="none"/>',
  ),
  contact: nav(
    '<path d="M4.4 6.6A2.2 2.2 0 0 1 6.6 4.4h10.8a2.2 2.2 0 0 1 2.2 2.2v7.2a2.2 2.2 0 0 1-2.2 2.2H9.8L5.6 19.2V16a2.2 2.2 0 0 1-1.2-2Z"/><path d="M8.4 9h7.2M8.4 11.8h4.6" stroke-opacity=".55"/>',
  ),
} as const;

export type NavIconName = keyof typeof NAVICONS;

/* ── نشان استودیو (گسلایت) ─────────────────────────────────────────────── */
export const GASLIGHT_MARK = `<svg class="gs-mark" width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M16 2.5 27.7 9v14L16 29.5 4.3 23V9Z" stroke="currentColor" stroke-width="1.2" stroke-opacity=".55"/>
  <path d="M16 8.2 22.6 12v7.6L16 23.4 9.4 19.6V12Z" stroke="currentColor" stroke-width="1.1"/>
  <path d="M16 12.4l3.2 1.9v3.8L16 20l-3.2-1.9v-3.8Z" fill="currentColor" fill-opacity=".85"/>
  <path d="M16 2.5v5.7M27.7 9l-5.1 3M4.3 9l5.1 3" stroke="currentColor" stroke-width=".9" stroke-opacity=".4"/>
</svg>`;
