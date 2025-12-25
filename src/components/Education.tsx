import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, Trophy, CheckCircle } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { SiMeta } from "react-icons/si";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Anna University MIT Campus, Chennai",
    period: "Expected 2027",
    score: "CGPA: 7.65",
    current: true,
  },
  {
    degree: "Diploma in Engineering",
    institution: "Thiagarajar Polytechnic College, Salem",
    period: "Completed 2022",
    score: "Score: 95%",
    current: false,
  },
];

const achievements = [
  {
    icon: FaCode,
    title: "LeetCode Problem Solver",
    description: "Solved 150+ DSA problems with 85% success rate",
  },
  {
    icon: Trophy,
    title: "SIH Runner-up",
    description: "Runner-up in National Level Technical Symposium (Smart India Hackathon)",
  },
  {
    icon: SiMeta,
    title: "META Certified",
    description: "Certified in FrontEnd Development by META",
  },
  {
    icon: Award,
    title: "Best Employee",
    description: "On-the-fly award for Best Employee for six consecutive months",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Background</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-display font-semibold mb-6 flex items-center gap-2"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              Academic Journey
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`glass rounded-2xl p-6 card-shadow relative overflow-hidden ${
                    edu.current ? "border-primary/30" : ""
                  }`}
                >
                  {edu.current && (
                    <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-bl-xl">
                      Current
                    </div>
                  )}
                  
                  <h4 className="text-lg font-display font-bold mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-3">{edu.institution}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-display font-semibold mb-6 flex items-center gap-2"
            >
              <Trophy className="w-6 h-6 text-primary" />
              Achievements & Certifications
            </motion.h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-4 card-shadow hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
