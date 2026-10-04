// Outils communs aux articles du blog.
export type Block = ["p" | "h2", string] | ["ol" | "ul", string[]] | ["figure"];
export type Article = { body: Block[]; caption: string; diagram: string };

export const readingMinutes = (body: Block[]) => {
  const words = body
    .flatMap((b) => (b[0] === "ol" || b[0] === "ul" ? b[1] : b[0] === "figure" ? [] : [b[1]]))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};

// Schémas : même style sobre pour tous les articles (traits gris foncé, pas de couleur).
export const STYLE = `<style>.sch rect{fill:none;stroke:#3d3d3d;stroke-width:1.5}.sch .o{stroke-width:2}.sch .k{fill:#3d3d3d;stroke:none;opacity:.08}.sch .f{fill:#3d3d3d;stroke:none}.sch .l{fill:#3d3d3d;stroke:none;opacity:.35}.sch text{font:500 16px Inter,system-ui,sans-serif;fill:#3d3d3d}.sch .h{font-weight:600;font-size:18px;fill:#111}.sch .h2{font-weight:600;font-size:15px;fill:#111}.sch .s{font-size:14px}.sch path{fill:none;stroke:#3d3d3d;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.sch circle{fill:none;stroke:#3d3d3d;stroke-width:1.5}.sch circle.f{fill:#3d3d3d;stroke:none}</style>`;
export const svg = (viewBox: string, title: string, desc: string, inner: string) =>
  `<svg viewBox="${viewBox}" role="img" aria-labelledby="sch-t sch-d" class="sch"><title id="sch-t">${title}</title><desc id="sch-d">${desc}</desc>${STYLE}${inner}</svg>`;
