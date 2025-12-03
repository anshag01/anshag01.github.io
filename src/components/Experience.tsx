import { motion } from "framer-motion";

const experiences = [
  {
    date: "05/2025 – 08/2025",
    company: "Autodesk",
    location: "Toronto, Canada",
    title: "Machine Learning Intern",
    description: "I built an agentic chatbot for software-package management that plans multi-step workflows & orchestrates cross-service tool calls, delivering 90% action accuracy & $6.7M/year projected savings.",
    tags: ["Python", "RASA", "Transformers", "ChromaDB", "Docker", "AWS"],
    logo: "https://logo.clearbit.com/autodesk.com",
  },
  {
    date: "09/2024 – 04/2025",
    company: "Thomson Reuters",
    location: "Toronto, Canada",
    title: "Software Engineering Intern",
    description: "I resolved 20 production issues & migrated C# backend services, improving platform stability by 15% and ensuring 98% on-time delivery for monthly releases.",
    tags: ["C#", ".NET", "SQL Server", "AWS", "Datadog"],
    logo: "/thomson_reuters_logo.png",
  },
  {
    date: "09/2024 – 04/2025",
    company: "University of Toronto",
    location: "Toronto, Canada",
    title: "Teaching Assistant",
    description: "I worked as a Teaching Assistant for CSC207 & CSC209, supporting 500+ students through labs and grading, and created a new test suite that reduced grading time by 50%.",
    tags: ["Java", "C", "JUnit", "Teaching"],
    logo: "https://logo.clearbit.com/utoronto.ca",
  },
  {
    date: "05/2024 – 08/2024",
    company: "TD Bank",
    location: "Toronto, Canada",
    title: "Software Engineering Intern",
    description: "I built the “Maintain Holiday” webpage for the Registered Products Database and authored Selenium-based regression scripts, cutting test time by 500% ($25k/yr savings).",
    tags: ["Spring Boot", "Angular", "SQL", "Selenium"],
    logo: "https://logo.clearbit.com/td.com",
  },
  {
    date: "05/2023 – 08/2023",
    company: "Nokia",
    location: "Toronto, Canada",
    title: "Software Engineering Intern",
    description: "I implemented and tested iSIM features in Java to enable Airtel to monitor 100 million users, resolving 7 critical security flaws and boosting stability by 5%.",
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
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 tracking-tight text-foreground">
            Work Experience
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group h-full"
            >
              <div className="flex flex-col h-full p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex justify-between items-start mb-4">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 object-contain rounded-md bg-white p-1"
                    />
                  )}
                  <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border/50">
                    {exp.date}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {exp.company}
                  </h3>
                  <div className="text-base text-muted-foreground font-medium">
                    {exp.title}
                  </div>
                </div>

                <p className="text-muted-foreground/80 text-sm leading-relaxed mb-6 flex-grow">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md font-medium border border-border/50 group-hover:border-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
