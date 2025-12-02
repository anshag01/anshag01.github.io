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
    logo: "https://logo.clearbit.com/thomsonreuters.com",
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
