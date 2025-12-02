import { motion } from "framer-motion";

const research = [
    {
        role: "Machine Learning Researcher",
        lab: "The Matter Lab at UofT",
        date: "12/2024 – 03/2025",
        description: "Built PySCF workflow for ML exchange–correlation functional by extracting Reduced Density Matrices from CCSD calculations.",
    },
    {
        role: "LLM Robotics Researcher",
        lab: "MEDCVR at UofT",
        date: "08/2024 – 03/2025",
        description: "Designed multi-agent robotics app with VLMs & LLMs for autonomous surgical tasks, deployed on Franka Emika robot.",
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
        <section id="research" className="py-20 lg:py-32">
            <div className="container mx-auto px-6 max-w-4xl">
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
                        <div className="space-y-8">
                            {research.map((exp, index) => (
                                <motion.div key={index} variants={item} className="group">
                                    <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                                        <div className="text-muted-foreground text-sm font-mono pt-1">
                                            {exp.date}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                {exp.lab}
                                            </h4>
                                            <div className="text-lg text-muted-foreground mb-2">
                                                {exp.role}
                                            </div>
                                            <p className="text-muted-foreground/80 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
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
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-foreground">Publications</h3>
                        <div className="space-y-6">
                            {publications.map((pub, index) => (
                                <motion.div key={index} variants={item} className="group">
                                    <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                                        {pub.title}
                                    </p>
                                    <p className="text-muted-foreground mt-1">
                                        {pub.authors} • <span className="italic">{pub.venue}</span>
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
