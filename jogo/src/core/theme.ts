// Ponto Alto: tokens da identidade partilhada (identidade/tokens.css) convertidos para PixiJS.
// Fundo preto, cinzentos escuros, texto branco e cinzento (como a app Grok Bot em modo escuro).
export const C = {
  /** Fundo da página (--id-bg). */
  bgBase: 0x000000,
  /** Cartões (jogo, aposta, levantar automático, ação) (--id-surface-1). */
  bgPanel: 0x141414,
  /** Pílulas neutras, botões ½/2×, segmentado (--id-surface-3). */
  bgSoft: 0x262626,
  /** Pílulas de destaque (histórico ≥ 2×, halo do ponto). */
  accentSoft: 0x3a3a3c,
  /** Ação principal: branco, como o botão "enviar" (--id-accent). */
  accent: 0xffffff,
  /** Texto/ícone sobre o branco (--id-on-accent). */
  onAccent: 0x000000,
  /** Botões cinzentos-escuros (selecionado, "Cancelar…", tooltip). */
  ink: 0x3a3a3c,
  /** Texto sobre os botões cinzentos-escuros. */
  onInk: 0xffffff,
  /** Ícones do topo (som, ajuda, menu…). */
  icon: 0xffffff,
  border: 0x2c2c2e,
  gridLine: 0x1f1f1f,
  dot: 0x3a3a3c,
  text: 0xffffff,
  /** Secundário (--id-text-2): 6.2:1 sobre o painel. */
  textMuted: 0x95959b,
  /** Terciário (--id-text-3): 4.7:1 sobre o painel. */
  textSoft: 0x808086,
  /** Estado "parou": usado com moderação (anel, legenda e avisos de perda). */
  stop: 0xff453a,
  stopSoft: 0x3a1715,
  /** Curva depois de parar. */
  curveDead: 0x6e6e73,
} as const;

export const R = { panel: 24, btn: 20, input: 16, small: 12 } as const;

export const FONT = 'Geist, -apple-system, "SF Pro Text", system-ui, "Segoe UI", Roboto, Arial, sans-serif';
export const MONO = '"Geist Mono", ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace';

/** Cor do texto sobre um fundo de botão/aviso: branco sobre cinzento-escuro, preto sobre branco ou vermelho. */
export function textOn(bg: number): number {
  return bg === C.ink ? C.onInk : C.onAccent;
}
