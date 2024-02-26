import Image from "next/image";
import Navbar from '../components/navbar';
import Main from '../components/main';
import About from '../components/about'
import Skills from '../components/skills'
import Education from '../components/education'
import Edu from '../components/edu'
import Projects from '../components/projects'

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Edu />
      <Education />
    </>
  )
}