import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { theme } from '../styles/theme'

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s ease;
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(10, 14, 26, 0.8)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(24px)' : 'none')};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? `1px solid ${theme.colors.border}` : '1px solid transparent'};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? `0 4px 30px rgba(0, 212, 255, 0.05)` : 'none'};
`

const NavContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  letter-spacing: -0.025em;
`

const DesktopNav = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavLink = styled.a`
  font-size: 0.875rem;
  color: ${theme.colors.mutedForeground};
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.primary};
  }

  &:hover::after {
    width: 100%;
  }
`

const LangButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.mutedForeground};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`

const MobileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMenuButton = styled.button`
  color: ${theme.colors.foreground};
  padding: 0.25rem;
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 1rem;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid ${theme.colors.border};

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNavLink = styled.a`
  color: ${theme.colors.mutedForeground};
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo href="#home">{'<VM />'}</Logo>

        <DesktopNav>
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <LangButton
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            aria-label="Toggle language"
          >
            <Globe size={16} />
            {language === 'pt' ? 'EN' : 'PT'}
          </LangButton>
        </DesktopNav>

        <MobileActions>
          <LangButton
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            aria-label="Toggle language"
          >
            <Globe size={16} />
            {language === 'pt' ? 'EN' : 'PT'}
          </LangButton>
          <MobileMenuButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </MobileActions>
      </NavContainer>

      {isOpen && (
        <MobileMenu>
          {navItems.map((item) => (
            <MobileNavLink
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileMenu>
      )}
    </Nav>
  )
}
