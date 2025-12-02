import { motion } from "framer-motion";

const experiences = [
  {
    date: "05/2025 – 08/2025",
    company: "Autodesk",
    location: "Toronto, Canada",
    title: "Machine Learning Intern",
    description: "Built an agentic chatbot for software-package management that plans multi-step workflows (create, edit, find, & delete) & orchestrates cross-service tool calls, delivering 90% action accuracy & $6.7M/year projected customer savings at rollout. Implemented RAG-powered semantic search for find feature across 1000+ package configs with 10× faster lookups. Added JWT feature flag to switch between hard-coded roles & 3-legged token, enabling safe staged migration.",
    tags: ["Python", "RASA", "Transformers", "ChromaDB", "Docker", "AWS"],
    logo: "https://logo.clearbit.com/autodesk.com",
  },
  {
    date: "09/2024 – 04/2025",
    company: "Thomson Reuters",
    location: "Toronto, Canada",
    title: "Software Engineering Intern",
    description: "Resolved 20 production issues & migrated C# backend services, improving platform stability by 15%. Managed monthly releases, cherry-picking cross-functional changes, ensuring 98% on-time delivery. Developed 25 SQL scripts to fix bugs & deliver features for 20,000 customers across seven environments.",
    tags: ["C#", ".NET", "SQL Server", "AWS", "Datadog"],
    logo: "https://logo.clearbit.com/thomsonreuters.com",
  },
  {
    date: "09/2024 – 04/2025",
    company: "University of Toronto",
    location: "Toronto, Canada",
    title: "Teaching Assistant",
    description: "TAed CSC207 (Software Design) & CSC209 (Systems Programming); supported 500+ students through labs, grading, & office hours. Created adventure game 2 assignment for CSC207 & test suite, reducing grading time by 50%.",
    tags: ["Java", "C", "JUnit", "Teaching"],
    logo: "https://logo.clearbit.com/utoronto.ca",
  },
  {
    date: "05/2024 – 08/2024",
    company: "TD Bank",
    location: "Toronto, Canada",
    title: "Software Engineering Intern",
    description: "Built “Maintain Holiday” webpage for Registered Products Database using Spring Boot & Angular. Authored Selenium-based regression scripts, cutting test time by 500% & providing $25,000/year savings.",
    tags: ["Spring Boot", "Angular", "SQL", "Selenium"],
    logo: "https://logo.clearbit.com/td.com",
  },
  {
    date: "05/2023 – 08/2023",
    company: "Nokia",
    location: "Toronto, Canada",
    title: "Software Engineering Intern",
    description: "Implemented & tested iSIM features in Java, enabling Airtel to monitor 100 million users. Resolved 100 code issues & 7 critical security flaws, boosting performance & stability by 5%.",
    tags: ["Java", "Docker", "Kubernetes", "REST APIs"],
    logo: "https://logo.clearbit.com/nokia.com",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

export const Experience = () => {
  return (
    <section id="experience" className="py-12 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 tracking-tight text-foreground">
            Software Engineering
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                {/* Date */}
                <div className="text-muted-foreground text-sm font-mono pt-1">
                  {exp.date}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-8 h-8 object-contain rounded-sm bg-white p-0.5"
                      />
                    )}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="text-lg text-muted-foreground mb-2">
                    {exp.title}
                  </div>

                  <p className="text-muted-foreground/80 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
