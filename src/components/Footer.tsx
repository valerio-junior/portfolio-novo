import styled from 'styled-components'
import { useLanguage } from '../contexts/LanguageContext'
import { theme } from '../styles/theme'

const FooterWrapper = styled.footer`
  border-top: 1px solid ${theme.colors.border};
  padding: 2rem 1.5rem;
`

const FooterContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${theme.colors.mutedForeground};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const TechStack = styled.p`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const Highlight = styled.span`
  color: ${theme.colors.primary};
`

export function Footer() {
  const { t } = useLanguage()

  return (
    <FooterWrapper>
      <FooterContent>
        <p>
          {'© 2026 Valerio Marcos. '}
          {t('footer.rights')}
        </p>
        <TechStack>
          {'Built with '}
          <Highlight>React</Highlight>
          {' & '}
          <Highlight>Styled Components</Highlight>
        </TechStack>
      </FooterContent>
    </FooterWrapper>
  )
}
