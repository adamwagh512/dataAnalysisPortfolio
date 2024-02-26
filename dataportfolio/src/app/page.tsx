import Image from "next/image";
import Navbar from '../components/navbar';
import Main from '../components/main';
import About from '../components/about'
import Skills from '../components/skills'
import Education from '../components/education'
import Edu from '../components/edu'

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Edu />
      <Education />
    </>
  );
}