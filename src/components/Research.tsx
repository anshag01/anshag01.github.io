import { motion } from "framer-motion";

const research = [
    {
        role: "Generative AI Researcher",
        lab: "UofT (Prof. Nick Koudas)",
        date: "09/2025 – Present",
        description: "Investigating Generative Engine Optimization (GEO) to decode AI search prioritization. Analyzing how content edits, pretraining signals, and authoritative sources in RAG systems impact visibility, fairness, and answer quality.",
        logo: "https://logo.clearbit.com/utoronto.ca",
    },
    {
        role: "Machine Learning Researcher",
        lab: "The Matter Lab at UofT",
        date: "12/2024 – 03/2025",
        description: "Built a PySCF workflow for ML functionals by extracting RDMs from CCSD. Mapped orbitals to grids to derive the exchange-correlation hole, enforcing sum rules to ensure consistency with first-principles DFT.",
        logo: "/matter_lab_logo.png",
    },
    {
        role: "LLM Robotics Researcher",
        lab: "MEDCVR at UofT",
        date: "08/2024 – 03/2025",
        description: "Engineered a multi-agent robotics system using VLMs & LLMs for autonomous surgery. Developed motion planning and control stacks, deploying them on a Franka Emika robot.",
        logo: "https://logo.clearbit.com/utoronto.ca",
        video: "https://www.youtube.com/embed/_fb3TfBmiVc",
    },
];

const publications = [
    {
        title: "From Attention to Application: The Evolution of Transformer Models & Their Impact on Modern Healthcare & Cancer Research",
        authors: "A. Agrawal",
        venue: "Submitted to J. Mach. Learn. Res., 2025",
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

export const Research = () => {
    return (
        <section id="research" className="py-12 lg:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-12 tracking-tight text-foreground">
                        Research
                    </h2>
                </motion.div>

                <div className="grid gap-12">
                    {/* Research Experience */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {research.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="group flex flex-col h-full rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden"
                                >
                                    {/* Media Section */}
                                    <div className="aspect-video w-full bg-black/50 overflow-hidden relative flex items-center justify-center">
                                        {exp.video ? (
                                            <iframe
                                                src={exp.video}
                                                title="Research Video"
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-secondary/20 flex items-center justify-center p-12">
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.lab} logo`}
                                                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex flex-col p-5 flex-grow">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {exp.lab}
                                            </h4>
                                            <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                                                {exp.date}
                                            </span>
                                        </div>

                                        <div className="text-sm font-medium text-primary/80 mb-2">
                                            {exp.role}
                                        </div>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-6">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Publications */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-foreground">Publications</h3>
                        <div className="flex flex-col gap-6">
                            {publications.map((pub, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="group relative pl-4 border-l-2 border-border/50 hover:border-primary transition-colors"
                                >
                                    <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                                        {pub.title}
                                    </p>
                                    <p className="text-base text-muted-foreground">
                                        {pub.authors}
                                    </p>
                                    <p className="text-sm font-mono text-primary/60 mt-1">
                                        {pub.venue}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
