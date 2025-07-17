import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='bg-white dark:bg-black min-h-screen transition-all'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}
