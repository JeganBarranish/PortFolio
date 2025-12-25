import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    title: "Design Engineer",
    company: "Quest Global",
    location: "Bengaluru, India",
    period: "Oct 2022 – Oct 2024",
    type: "Full Time",
    achievements: [
      "Designed and updated 500+ 3D models using SolidWorks and UG NX, improving design accuracy by 25%",
      "Interpreted UT and inspection data to modify 200+ CAD models for RBI and TM processes, reducing inspection time by 30%",
      "Prepared technical documentation for 15+ RBI projects, ensuring 100% compliance with industry standards",
      "Collaborated with cross-functional teams of 8+ engineers, delivering projects 15% ahead of schedule",
    ],
    highlights: ["6x Best Employee Award", "25% Design Accuracy Improvement", "15% Faster Delivery"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Career Journey</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-primary glow" />

              <div className="ml-8 md:ml-20">
                <div className="glass rounded-2xl p-8 card-shadow hover:border-primary/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-display font-bold">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium">{exp.company}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        <Award className="w-3 h-3" />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + achIndex * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

