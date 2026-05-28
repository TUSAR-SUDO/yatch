import { useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'

interface StaggeredMenuProps {
  isOpen: boolean
  onToggle: () => void
  onFleetOpen: () => void
}

export default function StaggeredMenu({ isOpen, onToggle, onFleetOpen }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const prelayer1Ref = useRef<HTMLDivElement>(null)
  const prelayer2Ref = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([])
  const socialsRef = useRef<HTMLDivElement>(null)
  const menuLabelRef = useRef<HTMLSpanElement>(null)
  const closeLabelRef = useRef<HTMLSpanElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const menuItems = [
    { label: 'HOME', onClick: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); onToggle() } },
    { label: 'OUR FLEET', onClick: () => { onFleetOpen(); onToggle() } },
    { label: 'MEMBERSHIP', onClick: () => onToggle() },
    { label: 'REGATTAS & EVENTS', onClick: () => onToggle() },
    { label: 'ACADEMY', onClick: () => onToggle() },
    { label: 'CONTACT', onClick: () => onToggle() },
  ]

  const animateOpen = useCallback(() => {
    if (timelineRef.current) timelineRef.current.kill()

    const tl = gsap.timeline()
    timelineRef.current = tl

    // Cycle label text
    if (menuLabelRef.current && closeLabelRef.current) {
      tl.to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0)
      tl.to(closeLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0)
    }

    // Prelayers slide in
    if (prelayer1Ref.current) {
      tl.fromTo(prelayer1Ref.current, { x: '100%' }, { x: '0%', duration: 0.6, ease: 'power4.out' }, 0)
    }
    if (prelayer2Ref.current) {
      tl.fromTo(prelayer2Ref.current, { x: '100%' }, { x: '0%', duration: 0.6, ease: 'power4.out' }, 0.08)
    }

    // Panel slides in
    if (panelRef.current) {
      tl.fromTo(panelRef.current, { x: '100%' }, { x: '0%', duration: 0.8, ease: 'power4.out' }, 0.15)
    }

    // Prelayers slide out to left
    if (prelayer1Ref.current) {
      tl.to(prelayer1Ref.current, { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5)
    }
    if (prelayer2Ref.current) {
      tl.to(prelayer2Ref.current, { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5)
    }

    // Nav items stagger in
    const items = navItemsRef.current.filter(Boolean)
    if (items.length) {
      tl.fromTo(
        items.map(li => li!.querySelector('a')),
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.06 },
        0.6
      )
    }

    // Socials fade in
    if (socialsRef.current) {
      tl.fromTo(socialsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.8)
    }
  }, [])

  const animateClose = useCallback(() => {
    if (timelineRef.current) timelineRef.current.kill()

    const tl = gsap.timeline()
    timelineRef.current = tl

    // Nav items fade out
    const items = navItemsRef.current.filter(Boolean)
    if (items.length) {
      tl.to(
        items.map(li => li!.querySelector('a')),
        { x: 40, opacity: 0, duration: 0.3, ease: 'power3.in', stagger: 0.04 },
        0
      )
    }

    // Socials fade out
    if (socialsRef.current) {
      tl.to(socialsRef.current, { opacity: 0, y: 10, duration: 0.3 }, 0)
    }

    // Panel slides out
    if (panelRef.current) {
      tl.to(panelRef.current, { x: '100%', duration: 0.6, ease: 'power4.in' }, 0.2)
    }

    // Cycle label back
    if (menuLabelRef.current && closeLabelRef.current) {
      tl.to(menuLabelRef.current, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0.3)
      tl.to(closeLabelRef.current, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0.3)
    }
  }, [])

  const prevOpenRef = useRef(false)
  useEffect(() => {
    if (isOpen && !prevOpenRef.current) {
      animateOpen()
    } else if (!isOpen && prevOpenRef.current) {
      animateClose()
    }
    prevOpenRef.current = isOpen
  }, [isOpen, animateOpen, animateClose])

  return (
    <div className="staggered-menu">
      {/* Toggle Button */}
      <button
        className={`menu-toggle${isOpen ? ' is-open' : ''}`}
        onClick={onToggle}
      >
        <div className="menu-toggle-label">
          <span ref={menuLabelRef} style={{ top: 0 }}>MENU</span>
          <span ref={closeLabelRef} style={{ top: '100%' }}>CLOSE</span>
        </div>
        <span className="menu-toggle-icon">+</span>
      </button>

      {/* Prelayers */}
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      {/* Menu Panel */}
      <div ref={panelRef} className="menu-panel">
        <ul className="menu-nav">
          {menuItems.map((item, i) => (
            <li key={item.label} ref={el => { navItemsRef.current[i] = el }}>
              <a onClick={(e) => { e.preventDefault(); item.onClick() }}>
                <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(12,12,14,0.3)', fontStyle: 'normal' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div ref={socialsRef} className="menu-socials">
          <span className="menu-socials-title">FOLLOW</span>
          <div className="menu-socials-links">
            <a href="#" onClick={e => e.preventDefault()}>INSTAGRAM</a>
            <a href="#" onClick={e => e.preventDefault()}>FACEBOOK</a>
            <a href="#" onClick={e => e.preventDefault()}>TWITTER</a>
          </div>
        </div>
      </div>
    </div>
  )
}
