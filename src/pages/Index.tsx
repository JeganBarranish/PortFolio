import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jegan Barranish | Full Stack Developer & Design Engineer</title>
        <meta 
          name="description" 
          content="Portfolio of Jegan Barranish - Full Stack Developer with expertise in Java, Web Technologies, and 2+ years of Design Engineering experience at Quest Global. Currently pursuing B.Tech in IT at Anna University." 
        />
        <meta name="keywords" content="Jegan Barranish, Full Stack Developer, Java Developer, Web Developer, Design Engineer, Chennai, Portfolio" />
        <meta property="og:title" content="Jegan Barranish | Full Stack Developer & Design Engineer" />
        <meta property="og:description" content="Portfolio showcasing projects in Java, web development, and engineering design." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://jegan-barranish.github.io" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
