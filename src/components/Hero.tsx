import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export const Hero = () => {
  const handleContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-[80vh] flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 block"
            >
              Hi, I'm
            </motion.span>

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
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Machine Learning & Software Engineering student at UofT. <br className="hidden md:block" />
              Building intelligent systems and scalable software.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-foreground/5 rounded-full blur-3xl" />
            <img
              src="/Ansh.jpg"
              alt="Ansh Agrawal"
              className="w-full h-full object-cover rounded-full border-2 border-border/50 shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
