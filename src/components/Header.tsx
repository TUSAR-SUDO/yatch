import { useState, useEffect, useRef } from 'react'

interface HeaderProps {
  menuOpen: boolean
  onBlogOpen: () => void
  onFleetOpen: () => void
  onJourneysOpen: () => void
  onMembershipOpen: () => void
  onAboutOpen: () => void
}

const navLinks = [
  { label: 'JOURNEYS', key: 'journeys' },
  { label: 'FLEET', key: 'fleet' },
  { label: 'MEMBERSHIP', key: 'membership' },
  { label: 'ABOUT US', key: 'about' },
  { label: 'BLOG', key: 'blog' },
] as const

export default function Header({
  menuOpen,
  onBlogOpen,
  onFleetOpen,
  onJourneysOpen,
  onMembershipOpen,
  onAboutOpen,
}: HeaderProps) {
  const pillRef = useRef<HTMLDivElement>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [joinHovered, setJoinHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!pillRef.current) return
      if (window.scrollY > 50) {
        pillRef.current.classList.add('scrolled')
      } else {
        pillRef.current.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (key: string) => {
    switch (key) {
      case 'journeys':
        onJourneysOpen()
        break
      case 'fleet':
        onFleetOpen()
        break
      case 'membership':
        onMembershipOpen()
        break
      case 'about':
        onAboutOpen()
        break
      case 'blog':
        onBlogOpen()
        break
    }
  }

  return (
    <div ref={pillRef} className="navbar-pill">
      {/* Logo Section */}
      <div
        style={{
          borderRight: '1px solid rgba(12,12,14,0.08)',
          padding: '0 20px 0 14px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <svg width={18} height={18} viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="5" r="2.4" stroke="#1c3557" strokeWidth="1.5" fill="none" />
          <line x1="10" y1="7.4" x2="10" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 11 Q10 14 15 11" stroke="#1c3557" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <line x1="7" y1="16" x2="13" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span
          style={{
            fontSize: '16px',
            letterSpacing: '0.28em',
            color: '#0c0c0e',
          }}
        >
          YORCH
        </span>
      </div>

      {/* Nav Links */}
      {navLinks.map((link) => (
        <a
          key={link.key}
          href="#"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick(link.key)
          }}
          onMouseEnter={() => setHoveredLink(link.key)}
          onMouseLeave={() => setHoveredLink(null)}
          style={{
            padding: '0 16px',
            height: '100%',
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: hoveredLink === link.key ? '#0c0c0e' : 'rgba(12,12,14,0.55)',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
        >
          {link.label}
        </a>
      ))}

      {/* Join The Club Button */}
      <div style={{ padding: '0 6px', flexShrink: 0 }}>
        <button
          onMouseEnter={() => setJoinHovered(true)}
          onMouseLeave={() => setJoinHovered(false)}
          style={{
            background: joinHovered ? '#253f63' : '#1c3557',
            borderRadius: '100px',
            padding: '9px 22px',
            fontSize: '10px',
            color: 'white',
            letterSpacing: '0.18em',
            border: 'none',
            cursor: 'pointer',
            transform: menuOpen
              ? 'translateX(calc(-1 * clamp(280px, 40vw, 440px)))'
              : 'none',
            transition: 'background 0.3s ease, transform 0.3s ease',
          }}
        >
          JOIN THE CLUB
        </button>
      </div>
    </div>
  )
}
