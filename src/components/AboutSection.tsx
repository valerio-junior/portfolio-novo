import styled from 'styled-components'
import { Code, Monitor, Server, Zap } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { theme } from '../styles/theme'
import type { LucideIcon } from 'lucide-react'

interface Highlight {
  icon: LucideIcon
  labelPt: string
  labelEn: string
}

const highlights: Highlight[] = [
  { icon: Monitor, labelPt: 'Front-End', labelEn: 'Front-End' },
  { icon: Code, labelPt: 'HTML/CSS/JS', labelEn: 'HTML/CSS/JS' },
  { icon: Server, labelPt: 'Back-End', labelEn: 'Back-End' },
  { icon: Zap, labelPt: 'Resolucao de Problemas', labelEn: 'Problem Solving' },
]

const Section = styled.section`
  padding: 6rem 1.5rem;
  position: relative;
`

const AmbientGlow = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.05);
  filter: blur(120px);
  pointer-events: none;
`

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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

const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  border-radius: 9999px;
  background: ${theme.colors.primary};
  margin: 0 auto;
`

const GlassCard = styled.div`
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }

  &:hover {
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.1);
  }
`

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const PhotoWrapper = styled.div`
  flex-shrink: 0;
  position: relative;
`

const PhotoGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  background: rgba(0, 212, 255, 0.1);
  filter: blur(16px);
`

const ProfileImage = styled.img`
  position: relative;
  border-radius: 1rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
  object-fit: cover;
  width: 280px;
  height: 280px;
  box-shadow: 0 4px 30px rgba(0, 212, 255, 0.1);
`

const CornerAccentTL = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  width: 1.5rem;
  height: 1.5rem;
  border-top: 2px solid ${theme.colors.primary};
  border-left: 2px solid ${theme.colors.primary};
  border-top-left-radius: 0.5rem;
`

const CornerAccentBR = styled.div`
  position: absolute;
  bottom: -8px;
  right: -8px;
  width: 1.5rem;
  height: 1.5rem;
  border-bottom: 2px solid ${theme.colors.primary};
  border-right: 2px solid ${theme.colors.primary};
  border-bottom-right-radius: 0.5rem;
`

const TextContent = styled.div`
  flex: 1;
`

const AboutText = styled.p`
  color: ${theme.colors.mutedForeground};
  line-height: 1.6;
  text-wrap: pretty;
  margin-bottom: 2rem;
`

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`

const HighlightCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(30, 58, 95, 0.5);
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(0, 212, 255, 0.3);
  }
`

const IconBox = styled.div`
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: rgba(0, 212, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`

const HighlightLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.colors.foreground};
`

export function AboutSection() {
  const { t, language } = useLanguage()

  return (
    <Section id="about">
      <AmbientGlow />
      <Container>
        <Header>
          <SectionTitle>{t('about.title')}</SectionTitle>
          <Divider />
        </Header>

        <GlassCard>
          <FlexLayout>
            <PhotoWrapper>
              <PhotoGlow />
              <ProfileImage
                src="/assets/img/avatar.png"
                alt="Valerio Marcos"
              />
              <CornerAccentTL />
              <CornerAccentBR />
            </PhotoWrapper>

            <TextContent>
              <AboutText>{t('about.text')}</AboutText>
              <HighlightsGrid>
                {highlights.map((item) => (
                  <HighlightCard key={item.labelEn}>
                    <IconBox>
                      <item.icon size={16} color={theme.colors.primary} />
                    </IconBox>
                    <HighlightLabel>
                      {language === 'pt' ? item.labelPt : item.labelEn}
                    </HighlightLabel>
                  </HighlightCard>
                ))}
              </HighlightsGrid>
            </TextContent>
          </FlexLayout>
        </GlassCard>
      </Container>
    </Section>
  )
}
