import { motion } from "framer-motion";

const skills = [
  {
    title: "Languages",
    items: ["Python", "C#", "Java", "C", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks",
    items: ["Spring Boot", ".NET (Core)", "Angular"],
  },
  {
    title: "Tools",
    items: ["AWS", "Git", "Docker", "Kubernetes", "PostgreSQL", "REST API", "Selenium"],
  },
  {
    title: "Machine Learning",
    items: ["PyTorch", "Scikit-learn", "NumPy", "OpenCV", "RAG"],
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
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 tracking-tight text-foreground">
            Skills
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={item}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-foreground border-b border-border pb-2">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((tech) => (
                  <span
                    key={tech}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {tech}
                    <span className="mx-2 text-border last:hidden">/</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
