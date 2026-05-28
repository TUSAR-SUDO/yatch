import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RippleTrail from './components/RippleTrail'
import StaggeredMenu from './components/StaggeredMenu'
import FleetOverlay from './components/FleetOverlay'
import BrandManifesto from './components/BrandManifesto'
import Experiences from './components/Experiences'
import YachtSpecs from './components/YachtSpecs'
import Testimonials from './components/Testimonials'
import Membership from './components/Membership'
import Academy from './components/Academy'
import ConciergeForm from './components/ConciergeForm'
import Faq from './components/Faq'
import PressStrip from './components/PressStrip'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Blog from './pages/Blog'
import JourneysPage from './pages/JourneysPage'
import MembershipPage from './pages/MembershipPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fleetOpen, setFleetOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [journeysOpen, setJourneysOpen] = useState(false)
  const [membershipOpen, setMembershipOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onBlogOpen={() => setBlogOpen(true)}
        onFleetOpen={() => setFleetOpen(true)}
        onJourneysOpen={() => setJourneysOpen(true)}
        onMembershipOpen={() => setMembershipOpen(true)}
        onAboutOpen={() => setAboutOpen(true)}
      />
      <Hero fleetOpen={fleetOpen} menuOpen={menuOpen} />
      <RippleTrail />
      <StaggeredMenu
        isOpen={menuOpen}
        onToggle={() => setMenuOpen(p => !p)}
        onFleetOpen={() => { setFleetOpen(true); setMenuOpen(false) }}
      />
      <FleetOverlay isOpen={fleetOpen} onClose={() => setFleetOpen(false)} />

      <div style={{ position: 'relative', zIndex: 25 }}>
        <div style={{ height: '100vh' }} />
        <div style={{ backgroundColor: 'var(--bg-base)' }}>
          <BrandManifesto />
          <Experiences />
          <YachtSpecs />
          <Testimonials />
          <Membership />
          <Academy />
          <ConciergeForm />
          <Faq />
          <PressStrip />
          <Footer />
        </div>
      </div>

      <CookieConsent />
      <Blog isOpen={blogOpen} onClose={() => setBlogOpen(false)} />
      <JourneysPage isOpen={journeysOpen} onClose={() => setJourneysOpen(false)} />
      <MembershipPage isOpen={membershipOpen} onClose={() => setMembershipOpen(false)} />
      <AboutPage isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  )
}
