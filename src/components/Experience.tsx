import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    date: "05/2025 – Present",
    company: "Autodesk",
    location: "Toronto, Canada",
    title: "Machine Learning Intern",
    description: [
      "Built an agentic chatbot for software-package management that plans multi-step workflows & orchestrates cross-service tool calls, delivering 90% action accuracy & $6.7M/year projected savings.",
      "Implemented RAG-powered semantic search for find feature across 1000+ package configs with 10× faster lookups.",
      "Added JWT feature flag to switch between hard-coded roles & 3-legged token, enabling safe staged migration.",
    ],
    tags: ["Python", "RASA", "Transformers", "ChromaDB", "Docker", "AWS"],
  },
  {
    date: "09/2024 – 05/2025",
    company: "Thomson Reuters",
    location: "Toronto, Canada",
    title: "Software Engineering Intern",
    description: [
      "Resolved 20 critical issues in the OneSource taxation platform and migrated C# services, boosting platform stability by 15%.",
      "Managed release management, cherry-picking cross-team changes & verifying commits, achieving 98% on-time delivery.",
      "Authored 25 SQL scripts and stored procedures to correct defects & deploy features for ~20,000 customers.",
    ],
    tags: ["C#", ".NET", "SQL Server", "AWS", "Datadog"],
  },
  {
    date: "12/2024 – 03/2025",
    company: "The Matter Lab",
    location: "Toronto, Canada",
    title: "Research Intern",
    description: [
      "Installed and configured DeepMind's DM21 repository on the group cluster, enabling 100% of built-in tests to pass.",
      "Defined PytorchNeuralNumInt and PytorchDM21 classes to mirror the original TensorFlow architecture.",
      "Derived second-order functional derivatives for the exchange-correlation hole and integrated a verification loop for robust DFT–ML workflows.",
    ],
    tags: ["PyTorch", "PySCF", "NumPy", "Conda"],
  },
  {
    date: "09/2024 – 04/2025",
    company: "MEDCVR at UofT",
    location: "Toronto, Canada",
    title: "LLM Robotics Researcher",
    description: [
      "Designed multi-agent robotic workflows using Gemini vision-language models to translate prompts into surgical task plans.",
      "Built an end-to-end prototype deploying code on a Franka Emika Panda robot for autonomous suturing tasks.",
      "Engineered a robust verification layer to automatically retry failed low-level routines until success.",
    ],
    tags: ["Python", "ROS", "Gemini VLMs", "Robotics"],
  },
  {
    date: "05/2024 – 08/2024",
    company: "TD Bank",
    location: "Toronto, Canada",
    title: "Software Engineering Intern",
    description: [
      "Built 'Maintain Holiday' webpage for Registered Products Database using Spring Boot & Angular.",
      "Authored SQL scripts for data migration and rollback logic to maintain integrity across environments.",
      "Developed a Selenium-based regression suite, cutting test time by 500%.",
    ],
    tags: ["Spring Boot", "Angular", "SQL", "Selenium"],
  },
  {
    date: "05/2023 – 08/2023",
    company: "Nokia",
    location: "Toronto, Canada",
    title: "Software Engineering Intern",
    description: [
      "Implemented 'last login' feature for iSIM using Java, enabling monitoring of millions of users.",
      "Resolved 100+ code issues in the DPP backend, boosting performance by 10%.",
      "Patched 7 critical security vulnerabilities, strengthening system stability.",
    ],
    tags: ["Java", "Docker", "Kubernetes", "REST APIs"],
  },
  {
    date: "01/2023 – 05/2025",
    company: "University of Toronto",
    location: "Toronto, Canada",
    title: "Teaching Assistant",
    description: [
      "CSC207 Lab TA: Led Java/JavaFX labs and graded for ~450 students.",
      "CSC207 Assignment Dev: Designed adventure-game assignments & authored JUnit test suites.",
      "CSC209 Lecture TA: Assisted in C programming lectures on pointers & system calls.",
    ],
    tags: ["Java", "C", "JUnit", "Teaching"],
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
    <section id="experience" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 border-l-4 border-primary pl-6">
            Experience
          </h2>
          <p className="text-muted-foreground mb-12 pl-6 max-w-2xl">
            Building innovative solutions across multiple companies and research labs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ x: 5 }}
              className="bg-card border border-border border-l-4 border-l-transparent hover:border-l-primary rounded-lg p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="grid lg:grid-cols-[200px_1fr] gap-6">
                {/* Meta */}
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-mono text-sm">{exp.date}</span>
                  <h3 className="text-lg font-bold">{exp.company}</h3>
                  <span className="text-sm text-muted-foreground">{exp.location}</span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span dangerouslySetInnerHTML={{ __html: desc }} />
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
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
