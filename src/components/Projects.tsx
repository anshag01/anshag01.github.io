import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Aegis",
    date: "02/2025",
    description:
      "Built a multimodal edge-ML system using Apple Watch & Terra biometrics with NVIDIA Jetson–deployed VILA models to infer firefighters’ state & trigger actuator-controlled medication.",
    tags: ["NVIDIA Jetson", "VILA", "Multimodal ML", "IoT"],
    link: "https://devpost.com/software/aegis-kz4qnm",
    image: "/aegis_project.png",
  },
  {
    title: "ReCall.ai",
    date: "12/2024",
    description:
      "Built smart glasses that use facial recognition to identify conversation partners & LLMs to summarize past interactions with them. Won the Patient Safety Challenge & Diagnosis Consort among 100 teams.",
    tags: ["HackPrinceton Winner", "FastAPI", "Next.js", "Gemini"],
    link: "https://dorahacks.io/buidl/19381",
    video: "https://www.youtube.com/embed/dxmZnS_8mQE",
  },
  {
    title: "Watchful.AI",
    date: "09/2024",
    description:
      "Developed an AI safety system using CLIP, VLMs, & a vector database to analyze CCTV feeds for weapon-related threats & alert campus security in real time. Won Best Privacy/Security Hack & Most Technically Complex Hack among 104 teams.",
    tags: ["PennApps Winner", "CLIP", "Vector DB", "FastAPI"],
    link: "https://devpost.com/software/watchful-ai-u5id0v",
    video: "https://www.youtube.com/embed/ke7UuqB-MVk",
  },
  {
    title: "Platemate",
    date: "09/2023",
    description:
      "Meal-sharing AI app using Cohere's LLM API to extract preferences & generate match recommendations. Won sponsor challenge at UofTHacks X.",
    tags: ["UofTHacks X Winner", "Python", "Cohere API", "React Native"],
    link: "https://devpost.com/software/platemate",
    video: "https://www.youtube.com/embed/tiZf6THqHrw",
  },
  {
    title: "Definition Finder",
    date: "04/2024",
    description:
      "Context-aware definition tool that helps users understand complex terms in real-time. Won DeerHacks for best educational hack.",
    tags: ["DeerHacks Winner", "Python", "NLP"],
    link: "https://devpost.com/software/definiton-finder",
    video: "https://www.youtube.com/embed/stWTJUYMcjc",
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
    <section id="projects" className="py-12 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 tracking-tight text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group flex flex-col h-full bg-secondary/20 rounded-lg overflow-hidden hover:bg-secondary/40 transition-colors duration-300"
            >
              {/* Media Section */}
              <div className="aspect-video w-full bg-black/50 overflow-hidden">
                {project.video ? (
                  <iframe
                    src={project.video}
                    title={project.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/20">
                    <ExternalLink className="w-12 h-12" />
                  </div>
                )}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-6 flex-grow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="text-sm font-mono text-muted-foreground mb-4">
                  {project.date}
                </div>

                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-background text-muted-foreground text-xs rounded-md font-medium border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
