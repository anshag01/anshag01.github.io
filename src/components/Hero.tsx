import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Twitter, Hexagon } from "lucide-react";

const roles = ["Builder", "Developer", "Researcher"];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentRole = roles[index];
  const article = currentRole === "ML Engineer" ? "an" : "a";

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 lg:py-20 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 flex items-center justify-center lg:justify-start gap-2 h-8"
            >
              <span>Hi, I'm {article}</span>
              <div className="relative w-40 h-full text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-0 left-0 font-semibold text-foreground"
                  >
                    {currentRole}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground"
            >
              Ansh Agrawal.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              Final Year CS @ UofT <br className="hidden md:block" />
              I build ML models and scalable backend systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={handleContact}
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-full px-8"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border hover:bg-secondary font-semibold rounded-full px-8"
              >
                <a href="/Grad_CV_Ansh_Agrawal.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 mt-12 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/anshag01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://x.com/anshag01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-8 h-8" />
              </a>
              <a
                href="https://devpost.com/anshagrawal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Hexagon className="w-8 h-8" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
            <img
              src="/Ansh.jpg"
              alt="Ansh Agrawal"
              className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
