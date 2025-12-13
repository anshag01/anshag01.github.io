import { motion } from "framer-motion";
import { ExternalLink, Lightbulb } from "lucide-react";

const extracurriculars = [
    {
        date: "05/2025 – Present",
        organization: "UofT AI",
        location: "Toronto, Canada",
        title: "Director of Sponsorship",
        description: "I lead a 20-member team to raise CAD 40,000 in sponsorships for ConferenceX, Canada's largest undergraduate AI conference. Managing outreach, mentoring members, & negotiating sponsorship deals.",
        tags: ["Leadership", "Fundraising", "AI Community"],
        logo: "/uoft_ai_logo.png",
        link: "https://www.uoft.ai/",
    },
    {
        date: "09/2025 – 11/2025",
        organization: "ICPC",
        location: "Toronto, Canada",
        title: "Competitive Programming",
        description: "I represented UofT at the ICPC North America East Central Regional, competing in algorithmic problem-solving challenges.",
        tags: ["Algorithms", "Problem Solving", "Competitive Programming"],
        logo: "/icpc_logo.png",
        link: "https://icpc.global/",
    },
    {
        date: "05/2025 – 08/2025",
        organization: "Hackathon Judge",
        location: "Toronto, Canada",
        title: "Judge & Mentor",
        description: "I judged & mentored teams at Hack404 & Ignition Hacks, guiding students on ML, system architecture, & their projects.",
        tags: ["Mentorship", "Machine Learning", "Hackathons"],
        logo: null,
        links: [
            { name: "Hack404", url: "https://hack404-2025.devpost.com/" },
            { name: "Ignition Hacks", url: "https://ignition-hacks-v-6.devpost.com/" }
        ],
        icon: Lightbulb,
    },
    {
        date: "05/2025 – 08/2025",
        organization: "ClearSite.ai",
        location: "Toronto, Canada",
        title: "Founder & CEO",
        description: "I founded an accessibility startup & was offered CAD 150,000 in pre-seed funding at UofT's Hatchery. Built tools that detect accessibility issues in websites & generate automated fixes.",
        tags: ["Entrepreneurship", "Accessibility", "Startups"],
        logo: "/clearsite_logo.png",
        link: null,
    },
    {
        date: "09/2024 – 04/2025",
        organization: "UofT MIST",
        location: "Toronto, Canada",
        title: "ML Technical Writer",
        description: "I wrote & edited machine learning articles for the UofT ML community, helping students understand complex AI concepts.",
        tags: ["Technical Writing", "Machine Learning", "Education"],
        logo: "/uoft_mist_logo.png",
        link: "https://www.utmist.ca/",
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

export const Extracurriculars = () => {
    return (
        <section id="extracurriculars" className="py-12 lg:py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-12 tracking-tight text-foreground">
                        Extracurriculars & Leadership
                    </h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {extracurriculars.map((exp, index) => {
                        const CardWrapper = exp.link ? 'a' : 'div';
                        const cardProps = exp.link ? {
                            href: exp.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                        } : {};

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="group h-full"
                            >
                                <CardWrapper
                                    {...cardProps}
                                    className={`flex flex-col h-full p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/5 ${exp.link ? 'cursor-pointer' : ''}`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        {exp.logo ? (
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.organization} logo`}
                                                className="w-12 h-12 object-contain rounded-md bg-white p-1"
                                            />
                                        ) : exp.icon ? (
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <exp.icon className="w-6 h-6 text-primary" />
                                            </div>
                                        ) : null}
                                        <div className="flex items-center gap-2">
                                            {exp.link && (
                                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                            )}
                                            <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border/50">
                                                {exp.date}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                                            {exp.organization}
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
                                    {exp.links && (
                                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
                                            {exp.links.map((linkItem) => (
                                                <a
                                                    key={linkItem.name}
                                                    href={linkItem.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-md font-medium hover:bg-primary/20 transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {linkItem.name}
                                                    <ExternalLink className="w-3 h-3" />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </CardWrapper>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
