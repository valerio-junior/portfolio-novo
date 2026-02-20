import styled from 'styled-components'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { theme } from '../styles/theme'

const skills = [
  { name: 'HTML', color: '#e34f26' },
  { name: 'CSS', color: '#1572b6' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'React', color: '#61dafb' },
  { name: 'Node.JS', color: '#339933' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'GitHub', color: '#ffffff' },
]

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  overflow: hidden;
  background-image:
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
`

const AmbientGlowTop = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.05);
  filter: blur(120px);
  pointer-events: none;
`

const AmbientGlowBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.05);
  filter: blur(100px);
  pointer-events: none;
`

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`

const AnimatedBlock = styled.div<{ $delay?: string }>`
  animation: fade-in-up 0.6s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  opacity: 0;
`

const Greeting = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.mutedForeground};
  margin-bottom: 0.5rem;
`

const NameSpan = styled.span`
  color: ${theme.colors.primary};
  font-weight: 600;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${theme.colors.foreground};
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
  text-wrap: balance;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`

const Description = styled.p`
  color: ${theme.colors.mutedForeground};
  line-height: 1.6;
  max-width: 42rem;
  margin: 0 auto 2rem;
  text-wrap: pretty;
`

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`

const SkillTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.colors.foreground};
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.1);
  }
`

const SkillDot = styled.span<{ $color: string }>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`

const PrimaryButton = styled.a`
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.primaryForeground};
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.25);

  &:hover {
    background-color: rgba(0, 212, 255, 0.9);
    box-shadow: 0 4px 30px rgba(0, 212, 255, 0.4);
  }
`

const SecondaryButton = styled.a`
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.foreground};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`

const ScrollDown = styled.a`
  display: inline-block;
  animation: float 6s ease-in-out infinite;
  color: ${theme.colors.mutedForeground};
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <Section id="home">
      <AmbientGlowTop />
      <AmbientGlowBottom />

      <Content>
        <AnimatedBlock>
          <Greeting>
            {t('hero.greeting')}{' '}
            <NameSpan>Valerio Marcos</NameSpan>
          </Greeting>
          <Title>{t('hero.role')}</Title>
          <Description>{t('hero.description')}</Description>
        </AnimatedBlock>

        <AnimatedBlock $delay="0.3s">
          <SkillsWrapper>
            {skills.map((skill) => (
              <SkillTag key={skill.name}>
                <SkillDot $color={skill.color} />
                {skill.name}
              </SkillTag>
            ))}
          </SkillsWrapper>
        </AnimatedBlock>

        <AnimatedBlock $delay="0.45s">
          <CTAWrapper>
            <PrimaryButton href="#projects">{t('hero.cta')}</PrimaryButton>
            <SecondaryButton href="#contact">{t('hero.contact')}</SecondaryButton>
          </CTAWrapper>

          <ScrollDown href="#projects" aria-label="Scroll down">
            <ArrowDown size={24} />
          </ScrollDown>
        </AnimatedBlock>
      </Content>
    </Section>
  )
}
