import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Research } from "@/components/Research";
import { Projects } from "@/components/Projects";
import { Extracurriculars } from "@/components/Extracurriculars";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Extracurriculars />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Ansh Agrawal. Crafted with precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
