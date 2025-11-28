import { motion } from "framer-motion";
import { Code2, Layers, Brain, Cloud } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "C#", "Java", "C", "SQL", "JavaScript"],
  },
  {
    icon: Layers,
    title: "Frameworks",
    items: ["Spring Boot", ".NET (Core)", "Angular", "FastAPI"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    items: ["PyTorch", "Scikit-learn", "NumPy", "OpenCV", "RAG", "LLMs"],
  },
  {
    icon: Cloud,
    title: "Tools & Cloud",
    items: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Git", "Selenium"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 border-l-4 border-primary pl-6">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground mb-12 pl-6 max-w-2xl">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-md hover:bg-primary/10 hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
