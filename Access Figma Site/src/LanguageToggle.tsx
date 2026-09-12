import type { Lang } from "@/i18n";

function FlagBR() {
  return (
    <svg viewBox="0 0 28 20" className="h-full w-full" aria-hidden>
      <rect width="28" height="20" fill="#009b3a" />
      <path d="M14 2 26 10 14 18 2 10Z" fill="#fedf00" />
      <circle cx="14" cy="10" r="4" fill="#002776" />
      <path
        d="M10.4 9.2a7 7 0 0 1 7.4 1.1"
        stroke="#fff"
        strokeWidth="0.9"
        fill="none"
      />
    </svg>
  );
}

function FlagUK() {
  return (
    <svg viewBox="0 0 28 20" className="h-full w-full" aria-hidden>
      <rect width="28" height="20" fill="#012169" />
      <path d="M0 0 28 20M28 0 0 20" stroke="#fff" strokeWidth="4" />
      <path
        d="M0 0 28 20M28 0 0 20"
        stroke="#c8102e"
        strokeWidth="2"
        clipPath="url(#none)"
      />
      <path d="M14 0V20M0 10H28" stroke="#fff" strokeWidth="6" />
      <path d="M14 0V20M0 10H28" stroke="#c8102e" strokeWidth="3.4" />
    </svg>
  );
}

type Props = {
  lang: Lang;
  onChange: (lang: Lang) => void;
  className?: string;
};

export default function LanguageToggle({ lang, onChange, className = "" }: Props) {
  const base =
    "h-6 w-9 overflow-hidden rounded-[3px] ring-1 ring-black/20 shadow-sm transition-all duration-200";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={() => onChange("pt")}
        aria-label="Mudar para português"
        aria-pressed={lang === "pt"}
        className={`${base} ${
          lang === "pt"
            ? "scale-110 ring-2 ring-black"
            : "opacity-55 hover:opacity-100"
        }`}
      >
        <FlagBR />
      </button>
      <button
        type="button"
        onClick={() => onChange("en")}
        aria-label="Switch to English"
        aria-pressed={lang === "en"}
        className={`${base} ${
          lang === "en"
            ? "scale-110 ring-2 ring-black"
            : "opacity-55 hover:opacity-100"
        }`}
      >
        <FlagUK />
      </button>
    </div>
  );
}
