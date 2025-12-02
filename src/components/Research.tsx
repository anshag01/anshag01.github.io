import { motion } from "framer-motion";

const research = [
    {
        role: "Machine Learning Researcher",
        lab: "The Matter Lab at UofT",
        date: "12/2024 – 03/2025",
        description: "Built a PySCF based workflow for a machine-learning exchange–correlation functional by extracting one & two-particle Reduced Density Matrices from CCSD calculations. Mapped orbitals to grids & derived the exchange-correlation hole hxc from pair & electron densities. Added automated checks enforcing physical sum rules so the data stayed consistent with first-principles DFT.",
        logo: "/matter_lab_logo.png",
    },
    {
        role: "LLM Robotics Researcher",
        lab: "MEDCVR at UofT",
        date: "08/2024 – 03/2025",
        description: "Designed a multi-agent robotics application with VLMs & LLMs for autonomous surgical tasks. Developed high-level motion planning, low-level action functions & deployed code on Franka Emika robot.",
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
                                            <div className="flex items-center gap-3 mb-1">
                                                {exp.logo && (
                                                    <img
                                                        src={exp.logo}
                                                        alt={`${exp.lab} logo`}
                                                        className="w-8 h-8 object-contain rounded-sm bg-white p-0.5"
                                                    />
                                                )}
                                                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {exp.lab}
                                                </h4>
                                            </div>
                                            <div className="text-lg text-muted-foreground mb-2">
                                                {exp.role}
                                            </div>
                                            <p className="text-muted-foreground/80 leading-relaxed mb-4">
                                                {exp.description}
                                            </p>
                                            {exp.video && (
                                                <div className="aspect-video w-full max-w-md mt-4 rounded-lg overflow-hidden border border-border/50">
                                                    <iframe
                                                        src={exp.video}
                                                        title="Research Video"
                                                        className="w-full h-full"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            )}
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
