export type Lang = "pt" | "en";

export type Copy = {
  tagline: string;
  ideias: string;
  estamos: string;
  botao: string;
  direitos: string;
  imgAlt: string;
  whatsapp: string;
};

export const translations: Record<Lang, Copy> = {
  pt: {
    tagline: "SEJA A EXCEÇÃO A REGRA",
    ideias: "Ideias criativas e estratégias pra quem não quer mais fazer o mesmo",
    estamos: "Estamos em construção",
    botao: "Quer saber mais? Fale com a gente",
    direitos: "© 2026 Sheepthree. Todos os direitos reservados.",
    imgAlt: "Ovelhas de crochê representando a Sheepthree",
    whatsapp:
      "https://wa.me/5519996363060?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20a%20Sheep3%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%21",
  },
  en: {
    tagline: "BE THE EXCEPTION TO THE RULE",
    ideias:
      "Creative ideas and strategies for those who no longer want to do the same",
    estamos: "We're under construction",
    botao: "Want to know more? Talk to us",
    direitos: "© 2026 Sheepthree. All rights reserved.",
    imgAlt: "Crochet sheep representing Sheepthree",
    whatsapp:
      "https://wa.me/5519996363060?text=Hi%2C%20I%20want%20to%20talk%20about%20Sheep3%2C%20I%20came%20through%20your%20website%21",
  },
};

const STORAGE_KEY = "sheepthree-lang";

export function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "pt";
  // localStorage pode lançar erro (modo privado / bloqueio de dados no Opera etc.)
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    /* acesso ao armazenamento bloqueado — segue com a detecção do navegador */
  }
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("pt") ? "pt" : "en";
}

export function persistLang(lang: Lang) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* acesso ao armazenamento bloqueado — ignora a persistência */
  }
}
