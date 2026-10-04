import { Container, Graphics, Rectangle } from 'pixi.js';
import gsap from 'gsap';
import { C } from '../theme';
import { makeText } from '../text';

export interface MenuItem {
  label: string;
  /** Desenha o ícone (centrado em 0,0, cerca de 24 px). */
  icon: (g: Graphics) => void;
  onTap: () => void;
}

const ROW_H = 46;
const MENU_W = 240;
/** Linha fina entre as opções (#292929, como os sites). */
const HAIRLINE = 0x292929;

/** Menu "hambúrguer": lista que abre por baixo do botão ☰, alinhada à direita. */
export class Menu extends Container {
  isOpen = false;
  private readonly backdrop = new Graphics();
  private readonly panel = new Container();

  constructor() {
    super();
    this.visible = false;
    this.backdrop.eventMode = 'static';
    this.backdrop.on('pointertap', () => this.close());
    this.panel.eventMode = 'static';
    this.addChild(this.backdrop, this.panel);
  }

  /** Abre com o canto superior direito em (right, top). W/H = tamanho do ecrã (para o fundo que fecha). */
  open(items: MenuItem[], right: number, top: number, W: number, H: number): void {
    this.backdrop.clear().rect(0, 0, W, H).fill({ color: 0x000000, alpha: 0.5 });
    this.panel.removeChildren().forEach((c) => c.destroy({ children: true }));
    // Estilo minimalista (pedido do Dário, 04/10/2026): sem cartão arredondado.
    // Painel preto com contorno fino, linhas finas entre as opções e uma seta › à direita
    // que avança e fica branca ao passar o rato.
    const h = items.length * ROW_H;
    this.panel.addChild(
      new Graphics()
        .rect(0, 0, MENU_W, h)
        .fill(C.bgBase)
        .stroke({ width: 1, color: HAIRLINE, alignment: 1 }),
    );
    items.forEach((it, i) => {
      const row = new Container();
      const icon = new Graphics();
      it.icon(icon);
      icon.position.set(24, ROW_H / 2);
      const label = makeText(it.label, { fontSize: 15, fontWeight: '500', fill: C.text });
      label.anchor.set(0, 0.5);
      label.position.set(46, ROW_H / 2);
      const arrow = makeText('›', { fontSize: 20, fontWeight: '400', fill: C.textMuted });
      arrow.anchor.set(1, 0.5);
      arrow.position.set(MENU_W - 16, ROW_H / 2 - 1);
      row.addChild(icon, label, arrow);
      if (i > 0) row.addChild(new Graphics().rect(0, 0, MENU_W, 1).fill(HAIRLINE));
      row.position.set(0, i * ROW_H);
      row.eventMode = 'static';
      row.cursor = 'pointer';
      row.hitArea = new Rectangle(0, 0, MENU_W, ROW_H);
      row.on('pointerover', () => {
        arrow.style.fill = C.text;
        arrow.x = MENU_W - 13;
      });
      row.on('pointerout', () => {
        arrow.style.fill = C.textMuted;
        arrow.x = MENU_W - 16;
      });
      row.on('pointertap', () => {
        this.close();
        it.onTap();
      });
      this.panel.addChild(row);
    });
    this.panel.position.set(right - MENU_W, top);
    this.isOpen = true;
    this.visible = true;
    gsap.killTweensOf(this);
    gsap.fromTo(this, { alpha: 0 }, { alpha: 1, duration: 0.15 });
    gsap.fromTo(this.panel, { y: top - 8 }, { y: top, duration: 0.2, ease: 'power2.out' });
  }

  close(): void {
    if (!this.isOpen) return;
    this.isOpen = false;
    gsap.to(this, { alpha: 0, duration: 0.12, onComplete: () => (this.visible = this.isOpen) });
  }
}
