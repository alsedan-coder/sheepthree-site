import imgRemoverFundoETexto1 from "@/imports/Desktop/06c9fea3ea608b0fab3e03e9bc54481e9a0e0517.png";
import { translations, type Copy, type Lang } from "@/i18n";

type LangProps = {
  lang?: Lang;
  t?: Copy;
};

function Logo() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute contents font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-[normal] left-[calc(50%+36px)] not-italic top-[48px] whitespace-nowrap">
      <p
        className="absolute left-[calc(50%-210px)] text-[130px] text-black top-[67px] tracking-[-1.3px]"
        style={{ WebkitTextStroke: "3px black" }}
      >
        SHEEP
      </p>
      <p
        className="absolute left-[calc(50%+212px)] text-[#f72585] text-[105px] top-[48px] tracking-[-4.2px]"
        style={{ WebkitTextStroke: "3px #f72585" }}
      >
        3
      </p>
    </div>
  );
}

export function SheepThreeResponsive({
  lang = "pt",
  t = translations[lang ?? "pt"],
}: LangProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#ffc83d] flex flex-col items-center px-6 py-8 text-black">
      {/* Círculo turquesa decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[18vw] -top-[14vw] aspect-square w-[75vw] max-w-[460px] rounded-full bg-[#10B8C8]"
      />

      {/* Bloco superior + ovelhas, centralizados verticalmente */}
      <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-3">
        <h1
          className="flex items-start justify-center font-['Konkhmer_Sleokchher:Regular',sans-serif] leading-none"
          style={{ fontSize: "clamp(56px, 17vw, 130px)" }}
        >
          <span className="text-black" style={{ WebkitTextStroke: "2px black" }}>
            SHEEP
          </span>
          <span
            className="text-[#f72585]"
            style={{
              fontSize: "0.8em",
              marginTop: "-0.12em",
              WebkitTextStroke: "2px #f72585",
            }}
          >
            3
          </span>
        </h1>

        <p
          className="text-center font-['Marmelad:Regular',sans-serif] uppercase"
          style={{
            fontSize: "clamp(13px, 4.2vw, 35px)",
            letterSpacing: "clamp(2px, 0.9vw, 6.3px)",
          }}
        >
          {t.tagline}
        </p>

        <div className="h-0.5 w-[90px] bg-black" />

        <p
          className="mt-3 max-w-[38rem] text-center font-['Kufam:Regular',sans-serif] leading-tight"
          style={{ fontSize: "clamp(18px, 5.2vw, 40px)" }}
        >
          {t.ideias}
        </p>

        {/* Ovelhas */}
        <img
          src={imgRemoverFundoETexto1}
          alt={t.imgAlt}
          className="mt-6 w-full max-w-[42rem] object-contain"
        />
      </div>

      {/* Bloco inferior */}
      <div className="mt-auto flex w-full flex-col items-center">
        <p
          className="mb-2 text-center font-['Lily_Script_One:Regular',sans-serif] text-white"
          style={{ fontSize: "clamp(16px, 4.5vw, 22px)" }}
        >
          {t.estamos}
        </p>

        <a
          href={t.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full max-w-[480px] items-center justify-center rounded-[12px] bg-black px-6 py-4 text-center font-['Lilita_One:Regular',sans-serif] text-white transition-all duration-200 hover:bg-[#1a1a1a] active:scale-[0.98]"
          style={{ fontSize: "clamp(18px, 4.8vw, 30px)" }}
        >
          {t.botao}
        </a>

        <p
          className="mt-6 text-center font-['ABeeZee:Regular',sans-serif] text-[#121111]"
          style={{ fontSize: "clamp(12px, 3.2vw, 16px)" }}
        >
          {t.direitos}
        </p>
      </div>
    </div>
  );
}

export default function SheepThree({
  lang = "pt",
  t = translations[lang ?? "pt"],
}: LangProps) {
  return (
    <div className="bg-[#ffc83d] relative size-full" data-name="Desktop">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[1418.026px] items-center justify-center left-[calc(50%+897.82px)] top-[calc(50%-229.99px)] w-[1667.641px]">
        <div className="-rotate-27 flex-none">
          <div className="h-[861.5px] relative w-[1432.681px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="861.5" preserveAspectRatio="none" viewBox="0 0 1432.68 861.5" width="1432.68">
              <ellipse cx="716.341" cy="430.75" fill="#10B8C8" id="Ellipse 1" rx="716.341" ry="430.75" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute aspect-[4096/2048] bottom-[130px] left-[122px] right-[130px]" data-name="Remover Fundo e Texto 1">
        <img alt={t.imgAlt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRemoverFundoETexto1} />
      </div>

      <Logo />
      <p className="[word-break:break-word] absolute font-['Marmelad:Regular',sans-serif] h-[35px] leading-[99.9749984741211%] not-italic right-[637px] text-[35px] text-black text-center top-[254px] tracking-[6.3px] translate-x-1/2 w-[862px]">{t.tagline}</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Kufam:Regular',sans-serif] font-normal leading-[normal] left-1/2 text-[40px] text-black text-center top-[418px] tracking-[-1.6px] w-[720px]">{t.ideias}</p>
      <div className="absolute h-0 left-[583px] top-[330px] w-[107px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 107 2" width="107">
            <line id="Line 1" stroke="black" strokeWidth="2" x2="107" y1="1" y2="1" />
          </svg>
        </div>
      </div>

      {/* "Estamos em construção" — acima do botão */}
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lily_Script_One:Regular',sans-serif] leading-[99.9749984741211%] left-[calc(50%+1px)] not-italic text-[22px] text-center text-white top-[848px] whitespace-nowrap">{t.estamos}</p>

      {/* Botão de contato via WhatsApp */}
      <a
        href={t.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="-translate-x-1/2 absolute bg-black h-[76px] left-[calc(50%+4px)] rounded-[12px] top-[875px] w-[480px] flex items-center justify-center transition-all duration-200 hover:bg-[#1a1a1a] hover:scale-[1.02] active:scale-100"
      >
        <span className="[word-break:break-word] font-['Lilita_One:Regular',sans-serif] leading-[99.9749984741211%] not-italic text-[30px] text-center text-white whitespace-nowrap">
          {t.botao}
        </span>
      </a>

      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['ABeeZee:Regular',sans-serif] leading-[99.9749984741211%] left-1/2 not-italic text-[#121111] text-[16px] text-center top-[975px] whitespace-nowrap">{t.direitos}</p>
    </div>
  );
}
