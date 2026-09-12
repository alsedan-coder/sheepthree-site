import { useEffect, useRef, useState } from "react"
import SheepThree, { SheepThreeResponsive } from "@/SheepThree"

// Native dimensions of the imported Figma "Desktop" frame.
const FRAME_W = 1273
const FRAME_H = 1042

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setScale(el.clientWidth / FRAME_W)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#ffc83d]">
      {/* Desktop: frame do Figma escalado fielmente */}
      <div
        ref={containerRef}
        className="hidden w-full overflow-hidden lg:block"
        style={{ height: FRAME_H * scale }}
      >
        <div
          style={{
            width: FRAME_W,
            height: FRAME_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <SheepThree />
        </div>
      </div>

      {/* Tablet e celular: layout fluido responsivo */}
      <div className="lg:hidden">
        <SheepThreeResponsive />
      </div>
    </div>
  )
}
