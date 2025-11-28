import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or
            just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              <a href="mailto:ansh.agrawal@utoronto.ca">
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-border hover:bg-secondary font-semibold"
            >
              <a
                href="https://www.linkedin.com/in/ansh-agrawal1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-border hover:bg-secondary font-semibold"
            >
              <a
                href="https://github.com/anshag01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
