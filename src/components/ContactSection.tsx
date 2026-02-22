import styled from 'styled-components'
import { Github, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { theme } from '../styles/theme'
import type { LucideIcon } from 'lucide-react'

interface Social {
  name: string
  icon: LucideIcon
  href: string
  color: string
}

const socials: Social[] = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/valeriomarcos/',
    color: '#0a66c2',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/valerio-junior',
    color: '#ffffff',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/5543984071477?text=Oii...',
    color: '#25d366',
  },
]

const Section = styled.section`
  padding: 6rem 1.5rem;
  position: relative;
`

const AmbientGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.05);
  filter: blur(120px);
  pointer-events: none;
`

const Container = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  text-align: center;
`

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${theme.colors.foreground};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`

const Subtitle = styled.p`
  color: ${theme.colors.mutedForeground};
  margin-bottom: 3rem;
`

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(0, 212, 255, 0.3);
  }
`

const SocialIconBox = styled.div<{ $color: string }>`
  padding: 0.625rem;
  border-radius: 0.5rem;
  background-color: ${({ $color }) => $color}15;
  transition: background-color 0.2s ease;
`

const SocialName = styled.span`
  font-weight: 600;
  color: ${theme.colors.foreground};
`

const ArrowWrapper = styled.div`
  color: ${theme.colors.mutedForeground};
  transition: all 0.2s ease;

  ${SocialLink}:hover & {
    color: ${theme.colors.primary};
    transform: translate(2px, -2px);
  }
`

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <Section id="contact">
      <AmbientGlow />
      <Container>
        <SectionTitle>{t('contact.title')}</SectionTitle>
        <Subtitle>{t('contact.subtitle')}</Subtitle>

        <SocialsWrapper>
          {socials.map((social) => (
            <SocialLink
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIconBox $color={social.color}>
                <social.icon size={20} color={social.color} />
              </SocialIconBox>
              <SocialName>{social.name}</SocialName>
              <ArrowWrapper>
                <ArrowUpRight size={16} />
              </ArrowWrapper>
            </SocialLink>
          ))}
        </SocialsWrapper>
      </Container>
    </Section>
  )
}
