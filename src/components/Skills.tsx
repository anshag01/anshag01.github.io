import { motion } from "framer-motion";
import { Brain, Server, Globe, Database } from "lucide-react";

const skills = [
  {
    title: "Languages & Frameworks",
    items: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "C#", icon: "devicon-csharp-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "C", icon: "devicon-c-plain" },
      { name: "SQL", icon: "devicon-postgresql-plain" }, // Using Postgres icon for SQL generic
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Spring Boot", icon: "devicon-spring-plain" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: ".NET (Core)", icon: "devicon-dotnetcore-plain" },
      { name: "Angular", icon: "devicon-angular-plain" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "REST API", icon: <Globe className="w-8 h-8" /> },
      { name: "Selenium", icon: "devicon-selenium-plain" },
    ],
  },
  {
    title: "Machine Learning",
    items: [
      { name: "PyTorch", icon: "devicon-pytorch-plain" },
      { name: "Scikit-learn", icon: "devicon-scikitlearn-plain" },
      { name: "NumPy", icon: "devicon-numpy-plain" },
      { name: "Pandas", icon: "devicon-pandas-plain" },
      { name: "OpenCV", icon: "devicon-opencv-plain" },
      {
        name: "Hugging Face",
        icon: (
          <img
            src="/hugging_face_logo.png"
            alt="Hugging Face"
            className="w-8 h-8 object-contain"
          />
        ),
      },
      { name: "RAG", icon: <Brain className="w-8 h-8" /> },
    ],
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
    <section id="skills" className="py-8 lg:py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight text-foreground">
            Skills
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {skills.map((category) => (
            <motion.div
              key={category.title}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="group flex flex-col items-center justify-center p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                  >
                    <div className="mb-2 text-2xl text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {typeof skill.icon === "string" ? (
                        <i className={`${skill.icon} colored`} />
                      ) : (
                        <div className="text-primary scale-75">{skill.icon}</div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors text-center whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
