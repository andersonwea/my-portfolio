import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>

      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}
