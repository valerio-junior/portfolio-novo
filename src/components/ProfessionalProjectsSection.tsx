import styled from 'styled-components'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { theme } from '../styles/theme'

interface ProfessionalProject {
  titleKey: string
  descKey: string
  tags: string[]
  color: string
  image: string
  link: string
}

const professionalProjects: ProfessionalProject[] = [
  {
    titleKey: 'proProject1',
    descKey: 'proProject1',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#ef4444',
    image: '/assets/img/projeto-academia.jpg',
    link: 'https://valerio-junior.github.io/projeto-academia/',
  },
  {
    titleKey: 'proProject2',
    descKey: 'proProject2',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#d4a017',
    image: '/assets/img/projeto-advocacia.jpg',
    link: 'https://valerio-junior.github.io/projeto-advocacia/',
  },
  {
    titleKey: 'proProject3',
    descKey: 'proProject3',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#22c55e',
    image: '/assets/img/projeto-petshop.jpg',
    link: 'https://valerio-junior.github.io/projeto-petshop/',
  },
]

const Section = styled.section`
  padding: 6rem 1.5rem;
  position: relative;
`

const AmbientGlow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.05);
  filter: blur(100px);
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

const Subtitle = styled.p`
  color: ${theme.colors.mutedForeground};
  max-width: 32rem;
  margin: 0 auto;
`

const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  border-radius: 9999px;
  background: ${theme.colors.primary};
  margin: 1rem auto 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.1);
  }
`

const ColorBar = styled.div<{ $color: string }>`
  height: 4px;
  width: 100%;
  background-color: ${({ $color }) => $color};
`

const ImageArea = styled.div`
  height: 12rem;
  position: relative;
  overflow: hidden;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.08);
  }
`

const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Card}:hover & {
    opacity: 1;
  }
`

const HoverIcon = styled.div`
  padding: 0.75rem;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.3);
  color: ${theme.colors.primary};
  backdrop-filter: blur(4px);
  border: 1px solid rgba(0, 212, 255, 0.3);
`

const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`

const CardContent = styled.div`
  padding: 1.25rem;
`

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${theme.colors.foreground};
  margin-bottom: 0.5rem;
  transition: color 0.2s ease;

  ${Card}:hover & {
    color: ${theme.colors.primary};
  }
`

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.mutedForeground};
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Tag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  background: ${theme.colors.secondary};
  color: ${theme.colors.mutedForeground};
`

function ProfessionalProjectCard({ project }: { project: ProfessionalProject }) {
  const { t } = useLanguage()

  return (
    <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
      <Card>
        <ColorBar $color={project.color} />
        <ImageArea>
          <ProjectImage
            src={project.image}
            alt={t(`${project.titleKey}.title`)}
          />
          <HoverOverlay>
            <HoverIcon>
              <ExternalLink size={22} />
            </HoverIcon>
          </HoverOverlay>
        </ImageArea>
        <CardContent>
          <CardTitle>{t(`${project.titleKey}.title`)}</CardTitle>
          <CardDescription>{t(`${project.descKey}.desc`)}</CardDescription>
          <TagsWrapper>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsWrapper>
        </CardContent>
      </Card>
    </ProjectLink>
  )
}

export function ProfessionalProjectsSection() {
  const { t } = useLanguage()

  return (
    <Section id="professional-projects">
      <AmbientGlow />
      <Container>
        <Header>
          <SectionTitle>{t('proProjects.title')}</SectionTitle>
          <Subtitle>{t('proProjects.subtitle')}</Subtitle>
          <Divider />
        </Header>

        <Grid>
          {professionalProjects.map((project) => (
            <ProfessionalProjectCard key={project.titleKey} project={project} />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
