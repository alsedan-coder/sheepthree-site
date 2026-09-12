import { useEffect, useRef, useState } from "react"
import SheepThree, { SheepThreeResponsive } from "@/SheepThree"
import LanguageToggle from "@/LanguageToggle"
import { detectInitialLang, persistLang, translations, type Lang } from "@/i18n"

// Native dimensions of the imported Figma "Desktop" frame.
const FRAME_W = 1273
const FRAME_H = 1042

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [lang, setLang] = useState<Lang>(detectInitialLang)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () =>
      setScale(Math.min(el.clientWidth / FRAME_W, el.clientHeight / FRAME_H))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    persistLang(lang)
    const html = document.documentElement
    html.lang = lang === "pt" ? "pt-BR" : "en"
    // Impede o navegador de traduzir a página automaticamente:
    // usamos apenas as traduções internas (PT/EN), preservando o logo SHEEP3.
    html.setAttribute("translate", "no")
    html.classList.add("notranslate")
    document.title = "Sheep3"
  }, [lang])

  const t = translations[lang]

  return (
    <div className="notranslate relative w-full bg-[#ffc83d]" translate="no">
      {/* Seletor de idioma — sempre fixo no canto superior direito da tela */}
      <LanguageToggle
        lang={lang}
        onChange={setLang}
        className="fixed right-5 top-5 z-50"
      />

      {/* Desktop: frame do Figma escalado para caber inteiro em 100vh */}
      <div
        ref={containerRef}
        className="hidden h-screen w-full items-center justify-center overflow-hidden lg:flex"
      >
        <div
          style={{
            width: FRAME_W,
            height: FRAME_H,
            transform: `scale(${scale})`,
            transformOrigin: "center",
          }}
        >
          <SheepThree lang={lang} t={t} />
        </div>
      </div>

      {/* Tablet e celular: layout fluido responsivo */}
      <div className="lg:hidden">
        <SheepThreeResponsive lang={lang} t={t} />
      </div>
    </div>
  )
}
