import { GlobalStyles } from './styles/GlobalStyles'
import { LanguageProvider } from './contexts/LanguageContext'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ProfessionalProjectsSection } from './components/ProfessionalProjectsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <GlobalStyles />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProfessionalProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
