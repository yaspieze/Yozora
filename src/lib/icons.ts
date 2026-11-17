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
  spark: svg('<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6.2 6.2l3 3M14.8 14.8l3 3M17.8 6.2l-3 3M9.2 14.8l-3 3"/>'),
};

export type IconName = keyof typeof ICONS;
