import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Aegis",
    date: "02/2025",
    description:
      "Developed a hardware prototype integrating Arduino & NVIDIA Jetson Orin Nano for automated trauma care. Configured VILA VLM on edge for wound classification.",
    tags: ["NVIDIA Jetson", "Arduino", "Flask", "VLM"],
    link: "https://devpost.com/software/aegis-kz4qnm",
  },
  {
    title: "ReCall.ai",
    date: "12/2024",
    description:
      "Integrated Gemini facial-recognition into smart glasses for cognitive aid. Built FastAPI backend & Next.js dashboard, achieving sub-second face-matching.",
    tags: ["HackPrinceton Winner", "FastAPI", "Next.js", "Gemini"],
    link: "https://dorahacks.io/buidl/19381",
  },
  {
    title: "Watchful.AI",
    date: "09/2024",
    description:
      "Built an AI-security system using FastAPI & Vector DB to monitor campus video feeds for threat detection using CLIP & GPT-4o.",
    tags: ["PennApps XXV Winner", "Best Privacy Hack", "Python", "OpenCV"],
    link: "https://devpost.com/software/watchful-ai-u5id0v",
  },
  {
    title: "Platemate",
    date: "09/2023",
    description:
      "Meal-sharing AI app using Cohere's LLM API to extract preferences & generate match recommendations. Won sponsor challenge at UofTHacks X.",
    tags: ["UofTHacks X Winner", "Python", "Cohere API", "React Native"],
    link: "https://devpost.com/software/platemate",
  },
  {
    title: "Skin Cancer Detector",
    date: "04/2024",
    description:
      "Developed ML classifiers (SVM, AdaBoost, MLP) for melanoma detection. Extracted features via RGB/HSV histograms & Gabor filters.",
    tags: ["Scikit-learn", "Python", "Computer Vision", "ML"],
    link: "https://github.com/anshag01/CancerDetection",
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

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 border-l-4 border-primary pl-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mb-12 pl-6 max-w-2xl">
            Award-winning projects combining AI, machine learning, and full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              variants={item}
              whileHover={{ y: -10 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <span className="text-primary text-sm font-mono mb-3">{project.date}</span>

                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
