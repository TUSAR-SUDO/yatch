import { useEffect, useRef, useCallback } from 'react'

interface PoolItem {
  active: boolean
  x: number
  y: number
  age: number
}

const POOL_SIZE = 80

export default function RippleTrail() {
  const poolRef = useRef<PoolItem[]>([])
  const lastPosRef = useRef({ x: 0, y: 0 })
  const divRefs = useRef<(HTMLDivElement | null)[]>([])
  const rafRef = useRef<number>(0)

  const animate = useCallback(() => {
    const pool = poolRef.current
    for (let i = 0; i < pool.length; i++) {
      const item = pool[i]
      if (!item.active) continue

      item.age += 0.012
      const size = 20 + item.age * (300 - 20)
      const opacity = 1 - Math.pow(item.age, 1.2)

      const div = divRefs.current[i]
      if (!div) continue

      if (item.age >= 1) {
        item.active = false
        div.style.opacity = '0'
      } else {
        div.style.width = `${size}px`
        div.style.height = `${size}px`
        div.style.left = `${item.x - size / 2}px`
        div.style.top = `${item.y - size / 2}px`
        div.style.opacity = `${opacity}`
        div.style.transform = 'scale(1)'
      }
    }
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const dx = e.clientX - lastPosRef.current.x
    const dy = e.clientY - lastPosRef.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > 25) {
      const pool = poolRef.current

      // Find next inactive item
      let idx = -1
      for (let i = 0; i < pool.length; i++) {
        if (!pool[i].active) {
          idx = i
          break
        }
      }

      // If none inactive, find oldest active
      if (idx === -1) {
        let oldestAge = -1
        for (let i = 0; i < pool.length; i++) {
          if (pool[i].age > oldestAge) {
            oldestAge = pool[i].age
            idx = i
          }
        }
      }

      if (idx !== -1) {
        pool[idx].active = true
        pool[idx].x = e.clientX
        pool[idx].y = e.clientY
        pool[idx].age = 0
      }

      lastPosRef.current.x = e.clientX
      lastPosRef.current.y = e.clientY
    }
  }, [])

  useEffect(() => {
    // Init pool
    poolRef.current = Array.from({ length: POOL_SIZE }, () => ({
      active: false,
      x: 0,
      y: 0,
      age: 0,
    }))

    window.addEventListener('mousemove', handleMouseMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [animate, handleMouseMove])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 30, pointerEvents: 'none' }}>
      {/* SVG Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-trail">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves={2}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={30}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Pool divs */}
      {Array.from({ length: POOL_SIZE }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            divRefs.current[i] = el
          }}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            pointerEvents: 'none',
            opacity: 0,
            willChange: 'transform, opacity, width, height',
            backdropFilter: 'url(#liquid-trail) blur(1px)',
            boxShadow:
              'inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(147,197,253,0.15)',
          }}
        />
      ))}
    </div>
  )
}
